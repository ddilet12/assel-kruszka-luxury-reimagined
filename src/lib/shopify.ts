const domain = import.meta.env["VITE_SHOPIFY_DOMAIN"] as string | undefined;
const token = import.meta.env["VITE_SHOPIFY_STOREFRONT_TOKEN"] as string | undefined;

type ShopifyMoney = { amount: string };
type ShopifyVariant = { title: string; availableForSale: boolean; quantityAvailable: number | null; selectedOptions: { name: string; value: string }[]; price: ShopifyMoney };
type ShopifyProduct = {
  handle: string;
  priceRange: { minVariantPrice: ShopifyMoney };
  totalInventory: number | null;
  options: { name: string; values: string[] }[];
  variants: { edges: { node: ShopifyVariant }[] };
};

export type LiveProduct = {
  handle: string;
  price: number;
  sizes: string[];
  inStock: boolean;
  totalInventory: number | null;
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
          totalInventory
          priceRange { minVariantPrice { amount } }
          options { name values }
          variants(first: 20) {
            edges { node { title availableForSale quantityAvailable selectedOptions { name value } price { amount } } }
          }
        }
      }
    }
  }
`;

export async function fetchLiveProducts(): Promise<Map<string, LiveProduct>> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(PRODUCTS_QUERY);
  const map = new Map<string, LiveProduct>();
  if (!data) return map;
  for (const { node: p } of data.products.edges) {
    const sizeOption = p.options.find((o) => o.name === "Size");
    map.set(p.handle, {
      handle: p.handle,
      price: Math.round(Number(p.priceRange.minVariantPrice.amount)),
      sizes: sizeOption?.values ?? [],
      inStock: p.variants.edges.some((v) => v.node.availableForSale),
      totalInventory: p.totalInventory,
    });
  }
  return map;
}
