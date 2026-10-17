import { isSizeOption } from "@/lib/shopify";
import { createServerFn } from "@tanstack/react-start";
import { createPaymentLink, ensureCatalogItems, isApiPayConfigured } from "@/lib/apipay.server";

export type KaspiCustomer = { name: string; phone: string; address: string; comment?: string };
export type KaspiLine = { variantId: string; quantity: number };

const SITE_URL = (process.env["SITE_URL"] || "https://asselkruszka.com").replace(/\/$/, "");
const VARIANT_ID_PREFIX = "gid://shopify/ProductVariant/";
const MAX_LINES = 30;
const MAX_QUANTITY = 20;

type VariantNode = {
  id: string;
  price: { amount: string };
  selectedOptions: { name: string; value: string }[];
  product: { handle: string; title: string };
} | null;

/** Kazakhstani mobile number as +7XXXXXXXXXX. */
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const national = digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8")) ? digits.slice(1) : digits;
  if (!/^7\d{9}$/.test(national)) throw new Error("invalid_phone");
  return `+7${national}`;
}

function cleanText(raw: unknown, min: number, max: number, errorCode: string): string {
  const value = typeof raw === "string" ? raw.replace(/\s+/g, " ").trim() : "";
  if (value.length < min || value.length > max) throw new Error(errorCode);
  return value;
}

async function shortHash(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].slice(0, 6).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function cleanLines(raw: unknown): KaspiLine[] {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_LINES) throw new Error("empty_cart");
  return raw.map((line) => {
    const variantId = typeof line?.variantId === "string" ? line.variantId : "";
    const quantity = Number(line?.quantity);
    if (!variantId.startsWith(VARIANT_ID_PREFIX) || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
      throw new Error("empty_cart");
    }
    return { variantId, quantity };
  });
}

/** Prices and names always come from Shopify on the server — never from the browser. */
async function loadVariants(ids: string[]): Promise<Map<string, NonNullable<VariantNode>>> {
  const domain = (import.meta.env["VITE_SHOPIFY_DOMAIN"] as string | undefined) || process.env["VITE_SHOPIFY_DOMAIN"];
  const token = (import.meta.env["VITE_SHOPIFY_STOREFRONT_TOKEN"] as string | undefined) || process.env["VITE_SHOPIFY_STOREFRONT_TOKEN"];
  if (!domain || !token) throw new Error("shopify_unavailable");
  const response = await fetch(`https://${domain}/api/2025-01/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
    body: JSON.stringify({
      query: `query Variants($ids: [ID!]!) {
        nodes(ids: $ids) { ... on ProductVariant { id price { amount } selectedOptions { name value } product { handle title } } }
      }`,
      variables: { ids },
    }),
  });
  const json = (await response.json().catch(() => undefined)) as { data?: { nodes?: VariantNode[] } } | undefined;
  if (!response.ok || !json?.data?.nodes) throw new Error("shopify_unavailable");
  const byId = new Map<string, NonNullable<VariantNode>>();
  for (const node of json.data.nodes) if (node) byId.set(node.id, node);
  return byId;
}

export const getPaymentMode = createServerFn({ method: "GET" }).handler(async () => ({ kaspi: isApiPayConfigured() }));

export const createKaspiPaymentLink = createServerFn({ method: "POST" })
  .validator((input: { lines: KaspiLine[]; customer: KaspiCustomer }) => input)
  .handler(async ({ data }) => {
    if (!isApiPayConfigured()) throw new Error("kaspi_unavailable");

    const name = cleanText(data.customer?.name, 2, 80, "invalid_name");
    const phone = normalizePhone(String(data.customer?.phone ?? ""));
    const address = cleanText(data.customer?.address, 6, 160, "invalid_address");
    const comment = data.customer?.comment ? cleanText(data.customer.comment, 1, 120, "invalid_comment") : "";
    const lines = cleanLines(data.lines);

    const variants = await loadVariants([...new Set(lines.map((line) => line.variantId))]);
    const priced = lines.map((line) => {
      const variant = variants.get(line.variantId);
      // The buyer is charged exactly the Shopify price, tiyn included (QR payment accepts fractional tenge).
      const price = Math.round(Number(variant?.price.amount) * 100) / 100;
      if (!variant || !(price > 0)) throw new Error("empty_cart");
      // Only the size is shown in the order line; stray extra options in Shopify must not leak into it.
      const sizeValue = variant.selectedOptions.find((option) => isSizeOption(option.name))?.value;
      const options = sizeValue ? [sizeValue] : variant.selectedOptions.filter((option) => option.name !== "Title").map((option) => option.value);
      return {
        slug: variant.product.handle,
        productTitle: variant.product.title,
        title: `${variant.product.title}${options.length ? ` (${options.join(" / ")})` : ""}`,
        quantity: line.quantity,
        price,
      };
    });

    // Sizes/colors of one product share a catalog item; the sold price travels with each line.
    const catalogIds = await ensureCatalogItems(
      [...new Map(priced.map((item) => [item.slug, item])).values()].map((item) => ({
        name: item.productTitle,
        sellingPrice: item.price,
        externalRef: item.slug,
      })),
    );
    const cartItems = priced.map((item) => {
      const catalogItemId = catalogIds.get(item.slug);
      if (!catalogItemId) throw new Error("catalog_unavailable");
      return { catalogItemId, count: item.quantity, price: item.price };
    });
    const orderItems = priced.map((item) => ({ title: item.title, quantity: item.quantity, price: item.price }));

    const internalComment = [name, phone, address, comment].filter(Boolean).join("; ");
    const fingerprint = await shortHash(JSON.stringify({ orderItems, internalComment }));
    // Hour bucket: an identical retry reuses the same link, but a repeat order days later gets a fresh one.
    const hourBucket = Math.floor(Date.now() / 3_600_000);

    const link = await createPaymentLink({
      cartItems,
      description: `ASSEL KRUSZKA: ${orderItems.map((item) => `${item.title} x${item.quantity}`).join(", ")}`,
      externalOrderId: `ak-${fingerprint}-${hourBucket}`,
      idempotencyKey: `ak-${fingerprint}-${hourBucket}`,
      internalComment,
      orderItems,
      successUrl: `${SITE_URL}/?paid=1`,
      cancelUrl: `${SITE_URL}/cart`,
    });
    return { paymentUrl: link.payment_url };
  });
