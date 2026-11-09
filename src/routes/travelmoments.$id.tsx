import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, buttonClass } from "@/components/SiteLayout";
import { moments } from "@/lib/site-data";

export const Route = createFileRoute("/travelmoments/$id")({
  loader: ({ params }) => {
    const moment = moments.find((m) => m.id === params.id);
    if (!moment) throw notFound();
    return { moment };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.moment.title ?? "Travel Moment"} — FYAT Travel` },
      { name: "description", content: `Photos from ${loaderData?.moment.title ?? "a FYAT trip"}.` },
      { property: "og:title", content: `${loaderData?.moment.title ?? "Travel Moment"} — FYAT Travel` },
      { property: "og:description", content: "A travel moment from FYAT Travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <PageShell><p className="p-16 text-center">Moment not found. <Link to="/travelmoments" className="text-primary underline">See all moments</Link></p></PageShell>
  ),
  component: Detail,
});

function Detail() {
  const { moment } = Route.useLoaderData();
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-primary">{moment.title}</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {moment.images.map((src) => (
            <img key={src} src={src} alt={moment.title} className="h-80 w-full rounded-xl object-cover shadow" />
          ))}
        </div>
        <Link to="/travelmoments" className={`${buttonClass} mt-8`}>Back</Link>
      </div>
    </PageShell>
  );
}
