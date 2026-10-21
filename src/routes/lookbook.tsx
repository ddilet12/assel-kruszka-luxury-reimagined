import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/state/storefront";
import { useProducts, useProductsReady } from "@/hooks/useProducts";

const TITLE = "Lookbook — ASSEL KRUSZKA";
const DESCRIPTION = "ASSEL KRUSZKA sets and looks, photo by photo.";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Lookbook,
});

function Lookbook() {
  const { locale } = useStore();
  const products = useProducts();
  const ready = useProductsReady();
  const en = locale === "en";
  const looks = products.filter((p) => p.category === "sets" && p.images.length > 0);

  return (
    <main>
      <section className="page-wrap">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">ASSEL KRUSZKA</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{en ? "Lookbook" : "Лукбук"}</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            {en ? "Our sets in one place, through the looks." : "Наши комплекты в одном месте, через образы."}
          </p>

          {looks.length > 1 && (
            <nav aria-label={en ? "Lookbook" : "Лукбук"} className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-xs uppercase tracking-[0.08em]">
              {looks.map((p) => (
                <a key={p.slug} href={`#${p.slug}`} className="inline-flex min-h-8 items-center border-b border-transparent hover:border-current">
                  {p.name[locale]}
                </a>
              ))}
            </nav>
          )}

          {ready && looks.length === 0 && (
            <p className="mt-12 text-sm text-muted-foreground">{en ? "Photos coming soon." : "Фото скоро появятся."}</p>
          )}

          {looks.map((p) => (
            <section key={p.slug} id={p.slug} className="mt-14 scroll-mt-24 border-t border-border pt-8">
              <h2 className="font-display text-3xl sm:text-4xl">{p.name[locale]}</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {p.images.slice(0, 6).map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={i === 0 ? p.name[locale] : `${p.name[locale]} ${i + 1}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full border border-border bg-white object-contain"
                  />
                ))}
              </div>
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] underline underline-offset-4"
              >
                {en ? "Shop this set" : "Смотреть комплект"} <ArrowRight className="size-3" />
              </Link>
            </section>
          ))}

          <Link to="/catalog" search={{ category: "all", q: "" }} className="mt-14 inline-flex items-center gap-2 text-xs underline underline-offset-4">
            {en ? "Back to the collection" : "Назад к коллекции"} <ArrowRight className="size-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
