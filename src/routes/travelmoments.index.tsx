import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";
import { moments } from "@/lib/site-data";

export const Route = createFileRoute("/travelmoments/")({
  head: () => ({
    meta: [
      { title: "Travel Moments — FYAT Travel Tour & Logistics" },
      { name: "description", content: "Photos from safaris, beaches, deserts and cities our travelers have explored." },
      { property: "og:title", content: "Travel Moments — FYAT Travel" },
      { property: "og:description", content: "Moments from our travelers' adventures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Moments,
});

function Moments() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-center text-3xl font-bold text-primary">Travel Moments</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m) => (
            <Link key={m.id} to="/travelmoments/$id" params={{ id: m.id }} className="group relative block h-64 overflow-hidden rounded-xl shadow-sm">
              <img src={m.images[0]} alt={m.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-ink/60 p-3 text-ink-foreground">{m.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
