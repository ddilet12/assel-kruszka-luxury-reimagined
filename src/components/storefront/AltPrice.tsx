import { useRates } from "@/hooks/useRates";
import { useStore } from "@/state/storefront";

const whole = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

/** Euro and dollar equivalents of a tenge price, so shoppers abroad see what they pay. Charging is always in tenge. */
export function AltPrice({ value, note = false, className = "" }: { value: number; note?: boolean; className?: string }) {
  const rates = useRates();
  const { locale } = useStore();
  if (!rates || !(value > 0)) return null;
  return (
    <span className={`block text-[11px] font-normal text-muted-foreground ${className}`}>
      ≈ €{whole.format(value / rates.eur)} · ≈ ${whole.format(value / rates.usd)}
      {note && (
        <span className="mt-0.5 block text-[10px]">
          {locale === "en"
            ? "Prices are in tenge (₸), the currency you are charged in. € and $ are approximate, at the National Bank of Kazakhstan rate."
            : "Цены указаны в тенге (₸), в этой валюте происходит оплата. € и $ — справочно, по курсу Нацбанка РК."}
        </span>
      )}
    </span>
  );
}
