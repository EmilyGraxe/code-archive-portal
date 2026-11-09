import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, buttonClass, inputClass } from "@/components/SiteLayout";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotel Reservations — FYAT Travel Tour & Logistics" },
      { name: "description", content: "Book a hotel or browse guesthouses with FYAT Travel." },
      { property: "og:title", content: "Hotel Reservations — FYAT Travel" },
      { property: "og:description", content: "From resorts to budget-friendly stays." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hotels,
});

function Hotels() {
  const [view, setView] = useState<"options" | "hotel">("options");
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 5000);
  };
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        {view === "options" ? (
          <div className="rounded-xl bg-card p-10 text-center shadow">
            <h1 className="text-3xl font-bold text-primary">Hotel Reservations</h1>
            <h2 className="mt-2 text-xl text-primary">Book Now</h2>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/guesthouses" className={buttonClass}>Guesthouse</Link>
              <button onClick={() => setView("hotel")} className={buttonClass}>Hotel</button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-card p-8 shadow">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary">Hotel Booking</h2>
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <label className="block">Full Name<input name="hname" required placeholder="Enter full name" className={inputClass} /></label>
              <label className="block">Email<input type="email" required name="hemail" placeholder="Enter email" className={inputClass} /></label>
              <label className="block">Phone Number<input type="tel" name="hphone" placeholder="Enter phone number" className={inputClass} /></label>
              <label className="block">Hotel Name<input name="hotelname" placeholder="Enter hotel name" className={inputClass} /></label>
              <label className="block">Hotel Location<input name="hlocation" placeholder="Enter location" className={inputClass} /></label>
              <label className="block">Number of Rooms<input type="number" min={1} name="hrooms" placeholder="Enter number of rooms" className={inputClass} /></label>
              <label className="block">Check-in Date<input type="date" name="checkin_date" className={inputClass} /></label>
              <label className="block">Number of Nights<input type="number" min={1} name="Nights" placeholder="Enter number of nights" className={inputClass} /></label>
              <div className="text-center sm:col-span-2">
                <button type="submit" className={buttonClass}>Book Hotel</button>
                {done && <p className="mt-3 text-success">✔️ Booking Successful!</p>}
              </div>
            </form>
            <button onClick={() => setView("options")} className={`${buttonClass} mt-6`}>Back</button>
          </div>
        )}
      </div>
    </PageShell>
  );
}
