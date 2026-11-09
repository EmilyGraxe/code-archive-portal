import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import navLogo from "@/assets/nav-logo.png.asset.json";
import logoText from "@/assets/logo-text.png.asset.json";
import { contact } from "@/lib/site-data";

const links = [
  { label: "Home", hash: "" },
  { label: "About Us", hash: "about" },
  { label: "Services", hash: "features" },
  { label: "Contact", hash: "contact" },
  { label: "Book Now", hash: "booking" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-sky/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={navLogo.url} alt="FYAT logo" className="h-14 w-auto" />
          <img src={logoText.url} alt="FYAT Travel Tour & Logistics" className="hidden h-8 w-auto sm:block" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.label} to="/" hash={l.hash || undefined} className="font-semibold text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/" hash="features" className="hidden rounded-full border-2 border-primary px-5 py-2 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:inline-block">
          Learn More
        </Link>
        <button className="lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.label} to="/" hash={l.hash || undefined} onClick={() => setOpen(false)} className="py-2 font-semibold">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-12 pb-6 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
        <div>
          <h5 className="font-bold uppercase">Fyat travel tour & logistics</h5>
          <p className="mt-2 text-ink-foreground/80">Your trusted partner for flights, hotels, visas, and adventures worldwide.</p>
        </div>
        <div>
          <h6 className="mb-3 font-bold uppercase">Quick Links</h6>
          <ul className="space-y-1">
            <li><Link to="/" hash="features">Services</Link></li>
            <li><Link to="/" hash="about">About Us</Link></li>
            <li><Link to="/" hash="contact">Contact</Link></li>
            <li><Link to="/" hash="booking">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-3 font-bold uppercase">Top Services</h6>
          <ul className="space-y-1">
            <li><Link to="/flightbooking">Flight Booking</Link></li>
            <li><Link to="/hotels">Hotel Reservations</Link></li>
            <li><Link to="/" hash="features">Visa Processing</Link></li>
            <li><Link to="/" hash="features">Car Hire</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h6 className="mb-3 font-bold uppercase">Contact</h6>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{contact.location}</p>
          <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0" />{contact.email}</p>
          <a href={contact.whatsappUrl} className="flex items-center gap-2"><MessageCircle className="h-4 w-4" />{contact.whatsapp}</a>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{contact.phone}</p>
        </div>
      </div>
      <hr className="mx-auto my-6 max-w-7xl border-ink-foreground/20" />
      <p className="text-center text-sm">&copy; 2025 Fyat travel &amp; tour logistics. All rights reserved.</p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

export const inputClass =
  "mt-1 w-full rounded-md border border-input bg-card px-3 py-2 outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";
export const buttonClass =
  "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-brand-deep";
