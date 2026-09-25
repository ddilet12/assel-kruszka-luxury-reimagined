import { useQuery } from "@tanstack/react-query";
import { localProducts, categories, type Product } from "@/data/store";
import { fetchLiveProducts, type LiveProduct } from "@/lib/shopify";

function mapCategory(productType: string): string {
  const match = categories.find((c) => c.en.toLowerCase() === productType.trim().toLowerCase());
  return match?.slug ?? "";
}

function fromShopify(live: LiveProduct): Product {
  return {
    id: live.handle,
    slug: live.handle,
    name: { en: live.title, ru: live.title },
    price: live.price,
    category: mapCategory(live.productType),
    images: live.images.length ? live.images : [],
    colors: live.colors,
    sizes: live.sizes,
    description: { en: live.description, ru: live.description },
  };
}

async function loadProducts(): Promise<Product[]> {
  const live = await fetchLiveProducts();
  if (live.length === 0) return localProducts;
  // Shopify is the source of truth for which products exist. Local copy
  // supplies bilingual name/description/images for products we already
  // have translations for; anything new gets built straight from Shopify.
  return live.map((liveProduct) => {
    const local = localProducts.find((p) => p.slug === liveProduct.handle);
    if (!local) return fromShopify(liveProduct);
    return {
      ...local,
      price: liveProduct.price,
      sizes: liveProduct.sizes.length ? liveProduct.sizes : local.sizes,
      colors: liveProduct.colors.length ? liveProduct.colors : local.colors,
      images: liveProduct.images.length ? liveProduct.images : local.images,
    };
  });
}

export function useProducts(): Product[] {
  // placeholderData (not initialData) so a real fetch always fires on
  // mount instead of being treated as already-fresh and skipped.
  const { data } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: loadProducts,
    placeholderData: localProducts,
    staleTime: 10_000,
  });
  return data ?? localProducts;
}
