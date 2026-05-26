import type { LucideIcon } from "lucide-react";
import {
  CreditCard, CalendarDays, FileText, BookOpen, Monitor, Layers,
  Sparkles, Database, Scissors,
  Gift, Mail as MailIcon,
} from "lucide-react";

// ─── PALETTE TOKENS ────────────────────────────────────────────────
// Two colors. Black & cream alternating. Gold only on craft moments.
export const COLORS = {
  bg:       "#100D08",   // warm black — sections in black
  bgWarm:   "#1A1209",   // a touch lighter for the press card
  cream:    "#F7F2EA",   // ivory cream — sections in cream
  creamSoft:"#FAF7F1",
  gold:     "#B5882A",   // foil moments + emphasis only
  goldSoft: "#C9A45A",   // foil highlight
  ink:      "#1A1209",
  muted:    "#8B7355",
  mutedAlt: "#5C4A2A",
};

// ─── NAVIGATION ────────────────────────────────────────────────────
// Minimum-viable nav. Four links. Portfolio reachable by scrolling home.
export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services"  },
  { label: "Sajavvat", href: "/sajavvat"  },
  { label: "Legacy",   href: "/legacy"    },
  { label: "Contact",  href: "/#contact"  },
];

// ─── SERVICES ──────────────────────────────────────────────────────
export type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  { num: "01", Icon: CreditCard,   title: "Business Cards",          desc: "Matte, gloss, soft-touch, foil — built to make the first impression count." },
  { num: "02", Icon: CalendarDays, title: "Calendars",               desc: "Wall, desk, and pocket calendars on premium stocks." },
  { num: "03", Icon: FileText,     title: "Pamphlets & Flyers",      desc: "Single and double-sided on 90–170gsm stocks." },
  { num: "04", Icon: BookOpen,     title: "Brochures & Catalogues",  desc: "Folded brochures and perfect-bound catalogues." },
  { num: "05", Icon: Monitor,      title: "Large Format",            desc: "Banners, standees, hoardings, flex — 4ft to 60ft." },
  { num: "06", Icon: Layers,       title: "Vinyl & Translite",       desc: "Backlit translites, vinyl wraps, fine-art canvas." },
  { num: "07", Icon: Sparkles,     title: "Specialty Finishes",      desc: "Gold foil, silver stamping, spot UV, embossing." },
  { num: "08", Icon: Database,     title: "Variable Data",           desc: "Personalised mailers, invoices, certificates." },
  { num: "09", Icon: Scissors,     title: "Post-Print Finishing",    desc: "Lamination, die-cutting, scoring, folding, binding." },
];

// ─── PORTFOLIO — 6 pieces, no categories ──────────────────────────
export type PortfolioItem = {
  id: number;
  title: string;
  spec: string;
  tone: string;
  image: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: "Gold Foil Business Cards", spec: "400gsm black · hot gold foil · matte lam",      tone: "#2A2010", image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=900&q=80&auto=format&fit=crop" },
  { id: 2, title: "Corporate Annual Report",   spec: "48pp · 130gsm gloss · gold foil hardcover",    tone: "#2C3340", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80&auto=format&fit=crop" },
  { id: 3, title: "Silver Satin Invitations",  spec: "350gsm board · silver foil · satin · die-cut", tone: "#2A1820", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80&auto=format&fit=crop" },
  { id: 4, title: "Tri-fold Brochure",         spec: "A4 → 3 panels · 170gsm gloss · soft-touch",    tone: "#1A2A20", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=80&auto=format&fit=crop" },
  { id: 5, title: "Outdoor Hoarding",          spec: "40ft × 10ft · 510gsm flex · solvent ink",      tone: "#2A1A1A", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80&auto=format&fit=crop" },
  { id: 6, title: "Translite Backlit Panel",   spec: "3ft × 5ft · 200mic film · LED-compatible",     tone: "#201808", image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=900&q=80&auto=format&fit=crop" },
];

// ─── TESTIMONIALS — only one quote shows on home now ───────────────
export const TESTIMONIALS = [
  { name: "Mehul Shah",   company: "Shah Enterprises",     text: "The quality of our annual reports was outstanding — crisp printing, beautiful binding, delivered on time. Vishal Offset is our printer of choice." },
  { name: "Priya Desai",  company: "Desai Fashion House",  text: "Eight years of consistent excellence. Their attention to colour accuracy and finishing detail is something we haven't found elsewhere in Vadodara." },
  { name: "Anil Patel",   company: "Patel & Sons",         text: "The gold foil business cards they produced receive compliments at every client meeting. An investment that reflects the quality of our firm." },
];

// ─── SAJAVVAT ─────────────────────────────────────────────────────
export const SAJAVVAT = {
  name: "Sajavvat",
  tagline: "A creative wing of Vishal Offset",
  short: "Custom envelopes, decor, and gifting — printed for the moments that deserve it.",
  occasions: ["Weddings", "Birthdays", "Corporate", "Hampers"],
};

export type SajavvatCategory = {
  id: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  image: string;
  tone: string;
};

export const SAJAVVAT_CATEGORIES: SajavvatCategory[] = [
  {
    id: "envelopes",
    title: "Custom Envelopes",
    blurb: "Foil-stamped, embossed, wax-sealed. Personalised to the occasion they carry.",
    Icon: MailIcon,
    image: "/sajavvat/envelopes.jpg",
    tone: "#2A1A1A",
  },
  {
    id: "decor",
    title: "Decor Pieces",
    blurb: "Signage, table-numbers, place-cards, monograms — printed to hold up to the camera.",
    Icon: Sparkles,
    image: "/sajavvat/decor.jpg",
    tone: "#2A2010",
  },
  {
    id: "gifting",
    title: "Gifting",
    blurb: "Hampers, gift packs, rigid presentation boxes. The unboxing is part of the gift.",
    Icon: Gift,
    image: "/sajavvat/gifting.jpg",
    tone: "#1E1E32",
  },
];

// ─── LEGACY / THREE GENERATIONS ───────────────────────────────────
export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  generation: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: "JN",
    name: "Jaisingh Nimbalkar",
    role: "Co-Founder · First Generation",
    generation: "1st Generation",
    bio: "Co-founded the press in 1998 with his son Vishal. The discipline he set on the press floor still runs the press today.",
  },
  {
    initials: "VN",
    name: "Mr. Vishal Nimbalkar",
    role: "Co-Founder & Master Printer · Second Generation",
    generation: "2nd Generation",
    bio: "Co-founded in 1998 with his father Jaisingh. Still personally inspects every premium run and oversees every aspect — from the first proof to the final dispatch.",
  },
  {
    initials: "DN",
    name: "Durva Nimbalkar",
    role: "Third Generation",
    generation: "3rd Generation",
    bio: "The third generation now joining the press — carrying the craft forward and leading Sajavvat, the creative wing.",
  },
];

// ─── CONTACT INFO ─────────────────────────────────────────────────
export const CONTACT = {
  address1: "C-1, Sardar Estate, Road No-1,",
  address2: "Ajwa Road, Baroda – 390 019",
  phone1:   "+91 98980 10552",
  phone2:   "0265-2560194",
  email:    "vvishalooffset@gmail.com",
  hours:    "Mon–Sat: 10:30 AM – 7:00 PM",
  hoursAlt: "Closed Sundays",
  mapsQuery: "Sardar Estate, Ajwa Road, Vadodara, Gujarat 390019",
  whatsapp: "https://wa.me/919898010552",
};
