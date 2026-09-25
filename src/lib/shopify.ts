const domain = import.meta.env["VITE_SHOPIFY_DOMAIN"] as string | undefined;
const token = import.meta.env["VITE_SHOPIFY_STOREFRONT_TOKEN"] as string | undefined;

type ShopifyMoney = { amount: string };
type ShopifyVariant = { availableForSale: boolean; selectedOptions: { name: string; value: string }[] };
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
            edges { node { availableForSale selectedOptions { name value } } }
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
    };
  });
}
