import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, buttonClass, inputClass } from "@/components/SiteLayout";
import { guesthouses } from "@/lib/site-data";

export const Route = createFileRoute("/guesthouses/$id")({
  loader: ({ params }) => {
    const guesthouse = guesthouses.find((g) => g.id === params.id);
    if (!guesthouse) throw notFound();
    return { guesthouse };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.guesthouse.name ?? "Guesthouse"} — FYAT Travel` },
      { name: "description", content: `Book ${loaderData?.guesthouse.name ?? "this guesthouse"} in ${loaderData?.guesthouse.location ?? "East Africa"}.` },
      { property: "og:title", content: `${loaderData?.guesthouse.name ?? "Guesthouse"} — FYAT Travel` },
      { property: "og:description", content: "Guesthouse details and booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <PageShell><p className="p-16 text-center">Guesthouse not found. <Link to="/guesthouses" className="text-primary underline">See all guesthouses</Link></p></PageShell>
  ),
  component: Detail,
});

function Detail() {
  const { guesthouse: g } = Route.useLoaderData();
  const [img, setImg] = useState(0);
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  return (
    <PageShell>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <img src={g.images[img]} alt={g.name} className="h-96 w-full rounded-xl object-cover shadow" />
          <div className="mt-3 flex gap-3">
            {g.images.map((src, n) => (
              <button key={src} onClick={() => setImg(n)} className={`overflow-hidden rounded-md ring-2 ${n === img ? "ring-primary" : "ring-transparent"}`}>
                <img src={src} alt="" className="h-20 w-28 object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-card p-6 shadow">
          <h1 className="text-3xl font-bold text-primary">{g.name}</h1>
          <p className="mt-2 text-muted-foreground">{g.location} · {g.bedrooms} Bedroom{g.bedrooms > 1 ? "s" : ""}</p>
          <p className="mt-2 text-2xl font-bold">${g.price} <span className="text-base font-normal text-muted-foreground">/ night</span></p>
          {done ? (
            <p className="mt-6 text-success">✅ Booking confirmed for {g.name}!</p>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-3">
              <label className="block">Your Name<input required name="customer_name" className={inputClass} /></label>
              <label className="block">Your Email<input required type="email" name="customer_email" className={inputClass} /></label>
              <button type="submit" className={`${buttonClass} w-full`}>Book Now</button>
            </form>
          )}
          <Link to="/guesthouses" className={`${buttonClass} mt-6`}>Back</Link>
        </div>
      </div>
    </PageShell>
  );
}
