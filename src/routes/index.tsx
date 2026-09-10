import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/storefront/Home";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ASSEL KRUSZKA — Rebellious Elegance" },
    { name: "description", content: "Discover ASSEL KRUSZKA luxury women’s tailoring, dresses and knitwear." },
    { property: "og:title", content: "ASSEL KRUSZKA — Rebellious Elegance" },
    { property: "og:description", content: "Discover ASSEL KRUSZKA luxury women’s tailoring, dresses and knitwear." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});
