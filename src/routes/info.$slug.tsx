import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useStore } from "@/state/storefront";
import { infoPages, type InfoPageSlug } from "@/data/pages";

export const Route = createFileRoute("/info/$slug")({
  loader: ({ params }) => {
    if (!(params.slug in infoPages.en)) throw notFound();
    return { slug: params.slug as InfoPageSlug };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${infoPages.en[loaderData.slug].title} — ASSEL KRUSZKA` : "ASSEL KRUSZKA";
    return { meta: [{ title }, { property: "og:title", content: title }] };
  },
  component: InfoPage,
});

function InfoPage() {
  const { slug } = Route.useLoaderData();
  const { locale } = useStore();
  const page = infoPages[locale][slug];
  return (
    <main className="page-wrap">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl">{page.title}</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{page.intro}</p>
        <div className="mt-8 space-y-7">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-sm font-semibold">{s.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
        <Link to="/catalog" search={{ category: "all", q: "" }} className="mt-10 inline-block text-xs underline">
          {locale === "en" ? "Back to the collection" : "Назад к коллекции"}
        </Link>
      </div>
    </main>
  );
}
