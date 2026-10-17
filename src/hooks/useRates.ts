import { useQuery } from "@tanstack/react-query";
import { getRates, type Rates } from "@/lib/rates.server";

export function useRates(): Rates | null {
  const { data } = useQuery({ queryKey: ["nbk-rates"], queryFn: () => getRates(), staleTime: 6 * 60 * 60 * 1000 });
  return data ?? null;
}
