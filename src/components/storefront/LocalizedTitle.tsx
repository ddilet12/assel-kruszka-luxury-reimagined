import { useEffect } from "react";
import { infoPages } from "@/data/pages";
import { useLocaleSafe } from "@/state/storefront";

// Route <title>s are written once in English by each route's head(); this keeps the browser tab title in the
// language the visitor picked. Pairs are [English, Russian] fragments of those titles.
const PAIRS: [string, string][] = [
  ["Women’s Collection", "Женская коллекция"],
  ["Shopping Bag", "Корзина"],
  ["Wishlist", "Избранное"],
  ["Checkout", "Оформление заказа"],
  ["Lookbook", "Лукбук"],
  ["About", "О бренде"],
  ["Rebellious Elegance", "Мятежная элегантность"],
  ...Object.keys(infoPages.en).map(
    (slug) =>
      [infoPages.en[slug as keyof typeof infoPages.en].title, infoPages.ru[slug as keyof typeof infoPages.ru].title] as [string, string],
  ),
];

function localize(title: string, toRu: boolean): string {
  const [head, ...rest] = title.split(" — ");
  const tail = rest.length ? ` — ${rest.join(" — ")}` : "";
  const translateTail = (s: string) => PAIRS.reduce((acc, [en, ru]) => (toRu ? acc.replace(en, ru) : acc.replace(ru, en)), s);
  const pair = PAIRS.find(([en, ru]) => (toRu ? en : ru) === head);
  return (pair ? (toRu ? pair[1] : pair[0]) : head) + translateTail(tail);
}

export function LocalizedTitle() {
  const locale = useLocaleSafe();
  useEffect(() => {
    const apply = () => {
      const next = localize(document.title, locale === "ru");
      if (next !== document.title) document.title = next;
    };
    apply();
    // The router rewrites <title> on every navigation, after this effect has run.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);
  return null;
}
