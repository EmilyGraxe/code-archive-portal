import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, buttonClass } from "@/components/SiteLayout";
import { bedroomCounts, guesthouses } from "@/lib/site-data";

type Search = { bedrooms?: number };

export const Route = createFileRoute("/guesthouses/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const n = Number(s["bedrooms"]);
    return Number.isInteger(n) && n > 0 ? { bedrooms: n } : {};
  },
  head: () => ({
    meta: [
      { title: "Guesthouses — FYAT Travel Tour & Logistics" },
      { name: "description", content: "Browse guesthouses by number of bedrooms." },
      { property: "og:title", content: "Guesthouses — FYAT Travel" },
      { property: "og:description", content: "Comfortable guesthouses in East Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Guesthouses,
});

function Guesthouses() {
  const { bedrooms } = Route.useSearch();
  const list = bedrooms ? guesthouses.filter((g) => g.bedrooms === bedrooms) : guesthouses;
  const pill = (active: boolean) =>
    `rounded-md px-4 py-2 font-semibold transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`;
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex flex-wrap gap-2 rounded-xl bg-card p-4 shadow-sm">
          <Link to="/guesthouses" className={pill(!bedrooms)}>All Guesthouses</Link>
          {bedroomCounts.map((c) => (
            <Link key={c} to="/guesthouses" search={{ bedrooms: c }} className={pill(bedrooms === c)}>
              {c} Bedroom{c > 1 ? "s" : ""}
            </Link>
          ))}
        </div>
        <h2 className="mb-6 text-3xl font-bold text-primary">Guesthouses</h2>
        {list.length === 0 ? (
          <p className="text-muted-foreground">No guesthouses with this many bedrooms yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g) => (
              <div key={g.id} className="overflow-hidden rounded-xl bg-card shadow-sm">
                <img src={g.images[0]} alt={g.name} className="h-52 w-full object-cover" />
                <div className="space-y-1 p-4">
                  <h5 className="text-lg font-bold">{g.name}</h5>
                  <p>{g.bedrooms} Bedroom{g.bedrooms > 1 ? "s" : ""}</p>
                  <p className="text-muted-foreground">{g.location}</p>
                  <p className="font-bold">${g.price}</p>
                  <Link to="/guesthouses/$id" params={{ id: g.id }} className={`${buttonClass} mt-2 px-4 py-1.5 text-sm`}>View</Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link to="/hotels" className={`${buttonClass} mt-8`}>Back</Link>
      </div>
    </PageShell>
  );
}
