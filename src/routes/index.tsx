import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Briefcase, Building2, Car, Clock, FileCheck, Globe, Instagram, Mail, MessageCircle, Music2, Package, Plane, Star, Twitter, Compass,
} from "lucide-react";
import { PageShell, buttonClass, inputClass } from "@/components/SiteLayout";
import { contact, destinations, images, moments } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FYAT Travel Tour & Logistics — Flights, Hotels, Tours & Freight" },
      { name: "description", content: "Kampala-based travel partner for flight booking, hotel reservations, custom tours, car hire, visa processing and freight forwarding." },
      { property: "og:title", content: "FYAT Travel Tour & Logistics" },
      { property: "og:description", content: "Your one-stop partner for travel and freight forwarding needs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { image: images.travel4.url, title: ["FYAT TRAVEL", "TOUR & LOGISTICS"], text: "Are you dreaming of your next adventure? Planning a business trip? Or perhaps need reliable logistics solutions? FYAT Travel Tour & Logistics is your one-stop partner for all your travel and freight forwarding needs." },
  { image: images.safari.url, title: ["African Safari"], text: "Experience wildlife like never before." },
  { image: images.travel3.url, title: ["Escape to Bali"], text: "Soak in the tropical vibes." },
];

const services = [
  { icon: Plane, title: "Flight Booking", text: "Best deals on domestic and international flights.", to: "/flightbooking/booking" as const },
  { icon: Building2, title: "Hotel Reservations", text: "From resorts to budget-friendly stays.", to: "/hotels" as const },
  { icon: Compass, title: "Custom Tours", text: "Tailored trips for your needs and style." },
  { icon: Briefcase, title: "Tour Packages", text: "All-in-one travel experiences and itineraries." },
  { icon: Car, title: "Car Hiring", text: "Reliable car rental for any journey." },
  { icon: Package, title: "Freight Forwarding", text: "Secure and efficient cargo delivery." },
  { icon: FileCheck, title: "Visa Processing", text: "We help with fast and secure visa applications." },
];

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i] ?? slides[0]!;

  return (
    <PageShell>
      <section className="relative mx-4 h-[75vh] min-h-[480px] overflow-hidden rounded-2xl md:mx-10">
        <img key={s.image} src={s.image} alt={s.title.join(" ")} className="animate-hero absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative flex h-full max-w-2xl flex-col justify-center px-8 text-brand-foreground md:px-16">
          {s.title.map((t) => (
            <h1 key={t} className="text-4xl font-bold tracking-wide md:text-6xl">{t}</h1>
          ))}
          <p className="mt-4 text-lg text-brand-foreground/85">{s.text}</p>
          <div className="mt-6 flex gap-2">
            {slides.map((_, n) => (
              <button key={n} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-brand-foreground" : "w-2 bg-brand-foreground/50"}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mt-12 scroll-mt-24 bg-brand py-16 text-brand-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Why Travel With Us?</h2>
            <p className="mt-2 text-lg">Unforgettable experiences, expert guidance, and world-class destinations — all in one place.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Globe, t: "Global Reach", d: "We take you anywhere in the world — from Paris to Patagonia, we’ve got you covered." },
              { icon: Star, t: "Top-Rated Service", d: "Rated 5 stars by thousands of happy travelers who love our personal touch." },
              { icon: Clock, t: "24/7 Support", d: "Travel with peace of mind knowing we’re here for you — any time, any place." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl bg-card p-6 text-center text-card-foreground shadow-sm">
                <Icon className="mx-auto h-10 w-10 text-primary" />
                <h5 className="mt-3 text-lg font-bold">{t}</h5>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary">Top Travel Destinations</h2>
          <p className="mb-8 mt-2 text-center text-muted-foreground">Explore some of our most popular travel spots around the world.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((d) => (
              <div key={d.name} className="group relative h-64 overflow-hidden rounded-xl shadow">
                <img src={d.image} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/55 p-4 text-center text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <h5 className="text-lg font-bold">{d.name}</h5>
                  <p className="mt-1">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-primary">Our Services</h2>
            <p className="mt-2 text-muted-foreground">We offer everything you need to plan and enjoy your dream vacation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map(({ icon: Icon, title, text, to }) => {
              const card = (
                <div className="h-full rounded-xl bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="mx-auto h-10 w-10 text-primary" />
                  <h5 className="mt-3 text-lg font-bold">{title}</h5>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              );
              return (
                <div key={title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                  {to ? <Link to={to}>{card}</Link> : <Link to="/" hash="contact">{card}</Link>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">Travel Moments</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {moments.slice(0, 4).map((m) => (
              <Link key={m.id} to="/travelmoments/$id" params={{ id: m.id }} className="group relative block h-56 overflow-hidden rounded-xl shadow-sm">
                <img src={m.images[0]} alt={m.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-ink/60 p-3 text-ink-foreground">{m.title}</div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/travelmoments" className={buttonClass}>See More →</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-card shadow md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4 bg-brand-deep p-8 text-brand-foreground">
            <h4 className="text-xl font-bold">Connect With Us</h4>
            <a href={contact.whatsappUrl} className="flex items-center gap-2"><MessageCircle /> WhatsApp</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Instagram /> Instagram</a>
            <a href={contact.x} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Twitter /> X (Twitter)</a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2"><Mail /> Email Us</a>
            <a href={contact.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Music2 /> TikTok</a>
          </div>
          <form action={contact.formAction} method="POST" className="space-y-4 p-8 md:col-span-2">
            <h4 className="text-xl font-bold text-primary">Contact Us</h4>
            <input type="hidden" name="_captcha" value="false" />
            <label className="block">Your Name<input name="name" className={inputClass} placeholder="Enter your name" /></label>
            <label className="block">Email Address<input type="email" name="email" required className={inputClass} placeholder="Your Email" /></label>
            <label className="block">Message<textarea name="message" rows={4} required className={inputClass} placeholder="Your Message" /></label>
            <button type="submit" className={buttonClass}>Send Message</button>
          </form>
        </div>
      </section>

      <section id="booking" className="scroll-mt-24 bg-brand py-16 text-center text-brand-foreground">
        <h2 className="text-3xl font-bold">Ready to Plan Your Next Adventure?</h2>
        <p className="mb-6 mt-2 text-lg">Let us help you design the perfect getaway — stress-free and unforgettable.</p>
        <Link to="/flightbooking/booking" className="inline-block rounded-md bg-card px-6 py-3 text-lg font-semibold text-primary hover:bg-muted">Book Now</Link>
      </section>
    </PageShell>
  );
}
