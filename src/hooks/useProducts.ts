import { useQuery } from "@tanstack/react-query";
import { localProducts, categories, type Product } from "@/data/store";
import { fetchLiveProducts, type LiveProduct } from "@/lib/shopify";

function mapCategory(productType: string): string {
  const match = categories.find((c) => c.en.toLowerCase() === productType.trim().toLowerCase());
  return match?.slug ?? "";
}

// One language per product: titles and descriptions are edited in Shopify, so both locales show them as written.
export function fromShopify(live: LiveProduct): Product {
  return {
    id: live.handle,
    slug: live.handle,
    name: { en: live.title, ru: live.title },
    price: live.price,
    category: mapCategory(live.productType),
    images: live.images,
    colors: live.colors,
    sizes: live.sizes,
    description: { en: live.description, ru: live.description },
    inStock: live.inStock,
    variants: live.variants,
  };
}

// Shopify is the single source of truth for what the shop sells. The bundled local copy is only a
// fallback for when Shopify can't be reached at all.
export async function loadProducts(): Promise<Product[]> {
  const live = await fetchLiveProducts();
  return live.length === 0 ? localProducts : live.map(fromShopify);
}

const productsQuery = {
  queryKey: ["shopify-products"],
  queryFn: loadProducts,
  staleTime: 10_000,
};

export function useProducts(): Product[] {
  const { data } = useQuery(productsQuery);
  return data ?? [];
}

// True once the real catalog (with Shopify variant IDs) has loaded.
export function useProductsReady(): boolean {
  const { isFetched } = useQuery(productsQuery);
  return isFetched;
}
