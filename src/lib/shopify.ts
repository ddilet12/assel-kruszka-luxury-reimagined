const domain = import.meta.env["VITE_SHOPIFY_DOMAIN"] as string | undefined;
const token = import.meta.env["VITE_SHOPIFY_STOREFRONT_TOKEN"] as string | undefined;

type ShopifyMoney = { amount: string };
type ShopifyVariant = { id: string; availableForSale: boolean; selectedOptions: { name: string; value: string }[] };
type ShopifyProduct = {
  handle: string;
  title: string;
  description: string;
  productType: string;
  priceRange: { minVariantPrice: ShopifyMoney };
  totalInventory: number | null;
  options: { name: string; values: string[] }[];
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: { edges: { node: ShopifyVariant }[] };
};

export type LiveVariant = { id: string; size: string; color: string; availableForSale: boolean };

export type LiveProduct = {
  handle: string;
  title: string;
  description: string;
  productType: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: string[];
  inStock: boolean;
  variants: LiveVariant[];
};

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  if (!domain || !token) return null;
  try {
    const res = await fetch(`https://${domain}/api/2025-01/graphql.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.errors) return null;
    return json.data as T;
  } catch {
    return null;
  }
}

const PRODUCTS_QUERY = `
  query Products {
    products(first: 50) {
      edges {
        node {
          handle
          title
          description
          productType
          totalInventory
          priceRange { minVariantPrice { amount } }
          options { name values }
          images(first: 6) { edges { node { url altText } } }
          variants(first: 40) {
            edges { node { id availableForSale selectedOptions { name value } } }
          }
        }
      }
    }
  }
`;

export async function fetchLiveProducts(): Promise<LiveProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(PRODUCTS_QUERY);
  if (!data) return [];
  return data.products.edges.map(({ node: p }) => {
    const sizeOption = p.options.find((o) => o.name === "Size");
    const colorOption = p.options.find((o) => o.name === "Color");
    return {
      handle: p.handle,
      title: p.title,
      description: p.description,
      productType: p.productType,
      price: Math.round(Number(p.priceRange.minVariantPrice.amount)),
      sizes: sizeOption?.values ?? [],
      colors: colorOption?.values ?? [],
      images: p.images.edges.map((e) => e.node.url),
      inStock: p.variants.edges.some((v) => v.node.availableForSale),
      variants: p.variants.edges.map(({ node: v }) => ({
        id: v.id,
        size: v.selectedOptions.find((o) => o.name === "Size")?.value ?? "",
        color: v.selectedOptions.find((o) => o.name === "Color")?.value ?? "",
        availableForSale: v.availableForSale,
      })),
    };
  });
}

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { message }
    }
  }
`;

// Creates a real Shopify cart from the lines the customer picked on our own
// storefront, and hands back Shopify's own hosted checkout URL. Shopify
// calculates shipping/tax and handles whichever payment methods are enabled
// in Settings → Payments (including a manual method like Kaspi Pay) — we
// don't process any payment ourselves.
export async function createShopifyCheckout(
  lines: { variantId: string; quantity: number }[],
): Promise<string | null> {
  if (lines.length === 0) return null;
  const data = await shopifyFetch<{
    cartCreate: { cart: { checkoutUrl: string } | null; userErrors: { message: string }[] };
  }>(CART_CREATE_MUTATION, {
    lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })),
  });
  if (!data || data.cartCreate.userErrors.length > 0 || !data.cartCreate.cart) return null;
  return data.cartCreate.cart.checkoutUrl;
}
