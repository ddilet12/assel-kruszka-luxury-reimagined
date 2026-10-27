import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/state/storefront";

const EMAIL = "info@asselkruszka.com";
const PHONE = "+7 778 965 4642";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — ASSEL KRUSZKA" }, { property: "og:title", content: "Contact Us — ASSEL KRUSZKA" }] }),
  component: Contact,
});

const card = "flex items-center gap-4 border border-border p-5 transition-colors hover:bg-muted";

function Contact() {
  const { locale } = useStore();
  const ru = locale === "ru";
  const [copied, setCopied] = useState(false);

  // A mail link needs a mail app on the device; copying the address works everywhere (also inside Instagram/Telegram).
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt(ru ? "Скопировать адрес" : "Copy address", EMAIL);
    }
  };

  return (
    <main className="page-wrap">
      <div className="mx-auto max-w-xl">
        <p className="eyebrow">ASSEL KRUSZKA</p>
        <h1 className="mt-2 font-display text-5xl">{ru ? "Связаться с нами" : "Contact Us"}</h1>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          {ru ? "Мы ответим как можно скорее. Выберите удобный способ связи." : "We reply as soon as we can. Choose the way that suits you."}
        </p>
        <div className="mt-8 grid gap-3">
          <a className={card} href="https://wa.me/qr/G6ZZJNGLIGDBP1" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
            <span><strong className="block text-sm font-medium">WhatsApp</strong><small className="text-muted-foreground">{PHONE}</small></span>
          </a>
          <div className="flex flex-wrap items-center justify-between gap-3 border border-border p-5">
            <a className="flex min-h-11 flex-1 items-center gap-4 hover:opacity-75" href={`mailto:${EMAIL}`}>
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span><strong className="block text-sm font-medium">{ru ? "Почта" : "Email"}</strong><small className="text-muted-foreground">{EMAIL}</small></span>
            </a>
            <button type="button" onClick={copyEmail} aria-live="polite" className="inline-flex h-10 items-center gap-2 border border-border px-3 text-xs hover:border-foreground">
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {copied ? (ru ? "Скопировано" : "Copied") : ru ? "Скопировать адрес" : "Copy address"}
            </button>
          </div>
          <a className={card} href={`tel:${PHONE.replace(/\s/g, "")}`}>
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            <span><strong className="block text-sm font-medium">{ru ? "Телефон" : "Phone"}</strong><small className="text-muted-foreground">{PHONE}</small></span>
          </a>
          <a className={card} href="https://www.instagram.com/assel.kruszka/" target="_blank" rel="noopener noreferrer">
            <Instagram className="size-5 shrink-0" aria-hidden="true" />
            <span><strong className="block text-sm font-medium">Instagram</strong><small className="text-muted-foreground">@assel.kruszka</small></span>
          </a>
        </div>
      </div>
    </main>
  );
}
