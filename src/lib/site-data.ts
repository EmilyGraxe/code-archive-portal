import safari from "@/assets/safari.jpg.asset.json";
import travel3 from "@/assets/travel3.webp.asset.json";
import travel4 from "@/assets/travel4.jpg.asset.json";
import zanzibar from "@/assets/zanzibar.jpg.asset.json";
import zanzibar2 from "@/assets/zanzibar2.jpg.asset.json";
import dubai from "@/assets/dubai.jpg.asset.json";
import dubai2 from "@/assets/dubai2.jpg.asset.json";
import france2 from "@/assets/france2.jpg.asset.json";
import paris from "@/assets/paris.jpg.asset.json";
import guesthouse from "@/assets/guesthouse.jpeg.asset.json";
import travelmoment from "@/assets/travelmoment.jpg.asset.json";
import desert from "@/assets/desrt.jpg.asset.json";
import travel2 from "@/assets/travel2.jpg.asset.json";

export const images = { safari, travel3, travel4, zanzibar, zanzibar2, dubai, dubai2, france2, paris, guesthouse, travelmoment, desert, travel2 };

export const contact = {
  email: "fyattraveltourlogistics@gmail.com",
  whatsapp: "+256 758 250 625",
  whatsappUrl: "https://wa.me/256758250625",
  phone: "+256 758 249 530",
  location: "Kampala, Uganda",
  instagram: "https://instagram.com/fyattraveltourltd",
  x: "https://x.com/Fyatltd",
  tiktok: "https://www.tiktok.com/@fyattraveltourltd",
  formAction: "https://formsubmit.co/johnsonbavurhe60@gmail.com",
};

export const destinations = [
  { name: "Zanzibar, Tanzania", text: "Soak up the sun on beaches and explore rich Swahili culture.", image: zanzibar2.url },
  { name: "Dubai, UAE", text: "From desert adventures to luxury shopping, Dubai has it all.", image: dubai2.url },
  { name: "Paris, France", text: "The city of romance and lights — explore art, culture, and fine cuisine.", image: france2.url },
];

export type Guesthouse = { id: string; name: string; location: string; price: number; bedrooms: number; images: string[] };
export const guesthouses: Guesthouse[] = [
  { id: "1", name: "Seaside Villa", location: "Nairobi", price: 120, bedrooms: 3, images: [guesthouse.url, zanzibar.url] },
  { id: "2", name: "Mountain Lodge", location: "Kampala", price: 150, bedrooms: 2, images: [travel2.url, safari.url] },
];
export const bedroomCounts = [1, 2, 3, 4];

export type Moment = { id: string; title: string; images: string[] };
export const moments: Moment[] = [
  { id: "1", title: "Safari Adventure", images: [safari.url, travelmoment.url] },
  { id: "2", title: "Beach Escape", images: [zanzibar.url, zanzibar2.url] },
  { id: "3", title: "Desert Adventures", images: [desert.url, dubai.url] },
  { id: "4", title: "City Lights", images: [paris.url, france2.url] },
];
