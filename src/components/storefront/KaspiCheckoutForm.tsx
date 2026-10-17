import { AltPrice } from "@/components/storefront/AltPrice";
import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { copy, money, type Locale } from "@/data/store";
import { createKaspiPaymentLink, type KaspiLine } from "@/lib/kaspi-checkout.server";

type Props = { lines: KaspiLine[]; total: number; locale: Locale };

const ERROR_KEYS = {
  invalid_name: "kaspiErrName",
  invalid_phone: "kaspiErrPhone",
  invalid_address: "kaspiErrAddress",
  invalid_comment: "kaspiErrComment",
  empty_cart: "kaspiErrEmpty",
} as const;

export function KaspiCheckoutForm({ lines, total, locale }: Props) {
  const t = copy[locale];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const { paymentUrl } = await createKaspiPaymentLink({ data: { lines, customer: { name, phone, address, comment } } });
      window.location.href = paymentUrl;
    } catch (caught) {
      const code = caught instanceof Error ? caught.message : "";
      const key = ERROR_KEYS[code as keyof typeof ERROR_KEYS] ?? "kaspiErrGeneric";
      setError(t[key]);
      setSubmitting(false);
    }
  }

  return (
    <main className="page-wrap mx-auto max-w-xl">
      <h1 className="font-display text-4xl">{t.kaspiTitle}</h1>
      <p className="mt-3 text-muted-foreground">{t.total}: {money(total, locale)}<AltPrice value={total} note/></p>
      <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
        <Label htmlFor="kaspi-name">{t.kaspiName}</Label>
        <Input id="kaspi-name" autoComplete="name" required maxLength={80} value={name} onChange={(event) => setName(event.target.value)} />
        <Label className="mt-3" htmlFor="kaspi-phone">{t.kaspiPhone}</Label>
        <Input id="kaspi-phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+7 7XX XXX XX XX" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <Label className="mt-3" htmlFor="kaspi-address">{t.kaspiAddress}</Label>
        <Input id="kaspi-address" autoComplete="street-address" required maxLength={160} value={address} onChange={(event) => setAddress(event.target.value)} />
        <Label className="mt-3" htmlFor="kaspi-comment">{t.kaspiComment}</Label>
        <Input id="kaspi-comment" maxLength={120} value={comment} onChange={(event) => setComment(event.target.value)} />
        {error && <p className="mt-2 text-sm text-destructive" role="alert">{error}</p>}
        <Button type="submit" className="mt-6 w-full" disabled={submitting}>
          {submitting ? <><Loader2 className="mr-2 size-4 animate-spin" />{t.kaspiCreating}</> : t.kaspiPay}
        </Button>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.kaspiNote}</p>
      </form>
    </main>
  );
}
