import { useQuery } from "@tanstack/react-query";
import { localProducts, categories, type Product } from "@/data/store";
import { fetchLiveCollections, fetchLiveProducts, type LiveCollection, type LiveProduct } from "@/lib/shopify";

// Products whose Shopify type is missing (or the catch-all "all") are filed by a word in their title.
const TITLE_CATEGORIES: [RegExp, string][] = [
  [/\bskirts?\b/i, "skirts"],
  [/\b(trousers?|pants)\b/i, "trousers"],
];

function mapCategory(productType: string, title = ""): string {
  const match = categories.find((c) => c.en.toLowerCase() === productType.trim().toLowerCase());
  if (match) return match.slug;
  return TITLE_CATEGORIES.find(([pattern]) => pattern.test(title))?.[1] ?? "";
}

// One language per product: titles and descriptions are edited in Shopify, so both locales show them as written.
export function fromShopify(live: LiveProduct): Product {
  return {
    id: live.handle,
    slug: live.handle,
    name: { en: live.title, ru: live.title },
    price: live.price,
    category: mapCategory(live.productType, live.title),
    images: live.images,
    colors: live.colors,
    sizes: live.sizes,
    description: { en: live.description, ru: live.descriptionRu || live.description },
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

// The three collections shown in the menu until Shopify returns its own list.
const DEFAULT_COLLECTIONS: LiveCollection[] = [
  { handle: "power-dressing", title: "Power Dressing", productHandles: [] },
  { handle: "the-devil-wears-satin", title: "The Devil Wears Satin", productHandles: [] },
  { handle: "velvet-rebellion", title: "Velvet Rebellion", productHandles: [] },
];

const collectionsQuery = {
  queryKey: ["shopify-collections"],
  queryFn: fetchLiveCollections,
  staleTime: 10_000,
};

export function useCollections(): LiveCollection[] {
  const { data } = useQuery(collectionsQuery);
  return data && data.length > 0 ? data : DEFAULT_COLLECTIONS;
}

// True once the real catalog (with Shopify variant IDs) has loaded.
export function useProductsReady(): boolean {
  const { isFetched } = useQuery(productsQuery);
  return isFetched;
}
