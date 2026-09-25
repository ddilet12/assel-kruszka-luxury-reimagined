import { useQuery } from "@tanstack/react-query";
import { localProducts, type Product } from "@/data/store";
import { fetchLiveProducts } from "@/lib/shopify";

async function loadProducts(): Promise<Product[]> {
  const live = await fetchLiveProducts();
  if (live.size === 0) return localProducts;
  return localProducts.map((p) => {
    const match = live.get(p.slug);
    if (!match) return p;
    return { ...p, price: match.price, sizes: match.sizes.length ? match.sizes : p.sizes };
  });
}

export function useProducts(): Product[] {
  const { data } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: loadProducts,
    initialData: localProducts,
    staleTime: 60_000,
  });
  return data;
}
