import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, buttonClass, inputClass } from "@/components/SiteLayout";

export const Route = createFileRoute("/flightbooking/booking")({
  head: () => ({
    meta: [
      { title: "Book a Flight — FYAT Travel Tour & Logistics" },
      { name: "description", content: "Request a one-way or round-trip flight booking with FYAT Travel." },
      { property: "og:title", content: "Book a Flight — FYAT Travel" },
      { property: "og:description", content: "Best deals on domestic and international flights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FlightBooking,
});

function FlightBooking() {
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 5000);
  };
  return (
    <PageShell>
      <div className="bg-secondary px-4 py-16">
        <form onSubmit={submit} className="mx-auto max-w-4xl rounded-xl bg-card p-8 shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-bold">Book Your Flight</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-lg">Personal Details</h4>
              <label className="block">Full Name<input required name="fullName" placeholder="As per passport" className={inputClass} /></label>
              <label className="block">Gender
                <select required name="gender" className={inputClass} defaultValue="">
                  <option value="">--Select--</option><option value="male">M</option><option value="female">F</option>
                </select>
              </label>
              <label className="block">Email<input required type="email" name="email" placeholder="your@example.com" className={inputClass} /></label>
              <label className="block">Phone Number<input required type="tel" name="phone" placeholder="+256 700 000000" className={inputClass} /></label>
              <label className="block">Passport Expiry Date<input required type="date" min={today} name="passportExpiry" className={inputClass} /></label>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg">Trip Details</h4>
              <label className="block">Trip Type
                <select required name="tripType" className={inputClass} defaultValue="">
                  <option value="">--Select--</option><option value="one-way">One-way</option><option value="round-trip">Round-trip</option>
                </select>
              </label>
              <label className="block">Departure City / Airport<input required name="departure" placeholder="City or airport code" className={inputClass} /></label>
              <label className="block">Destination City / Airport<input required name="destination" placeholder="City or airport code" className={inputClass} /></label>
              <label className="block">Departure Date<input required type="date" name="departureDate" className={inputClass} /></label>
              <label className="block">Return Date<input type="date" name="returnDate" className={inputClass} /></label>
            </div>
          </div>
          <button type="submit" className={`${buttonClass} mt-6 w-full`}>Book Flight</button>
          {done && <p className="mt-3 text-success">✔️ Flight booking confirmed! We will contact you soon for further details.</p>}
        </form>
        <div className="mx-auto mt-6 max-w-4xl"><Link to="/" className={buttonClass}>Back</Link></div>
      </div>
    </PageShell>
  );
}
