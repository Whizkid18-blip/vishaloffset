import type { LucideIcon } from "lucide-react";
import {
  CreditCard, CalendarDays, FileText, BookOpen, Monitor, Layers,
  Sparkles, Database, Scissors, Printer, Package, Truck,
  Gift, Heart, Star, Crown, Cake, Briefcase,
} from "lucide-react";

// ─── PALETTE TOKENS ────────────────────────────────────────────────
export const COLORS = {
  bg:       "#100D08",
  bgWarm:   "#1A1209",
  cream:    "#F7F2EA",
  creamSoft:"#FAF7F1",
  gold:     "#B5882A",
  goldSoft: "#C9A45A",
  ink:      "#1A1209",
  muted:    "#8B7355",
  mutedAlt: "#5C4A2A",
};

// ─── NAVIGATION ────────────────────────────────────────────────────
export type NavLink = {
  label: string;
  href: string;     // /#hash for home sections, /route for pages
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services",     href: "/#services"      },
  { label: "Our Work",     href: "/#our-work"      },
  { label: "Custom Gifts", href: "/custom-giftings"},
  { label: "Legacy",       href: "/legacy"         },
  { label: "Process",      href: "/#process"       },
  { label: "Contact",      href: "/#contact"       },
];

// ─── SERVICES ──────────────────────────────────────────────────────
export type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  { num: "01", Icon: CreditCard,   title: "Business Card Printing",  desc: "Offset & digital cards with matte, gloss, soft-touch, and foil finish — crafted to make the first impression count." },
  { num: "02", Icon: CalendarDays, title: "Calendar Printing",       desc: "Wall, desk, and pocket calendars with vivid CMYK reproduction and premium paper stock options." },
  { num: "03", Icon: FileText,     title: "Pamphlets & Flyers",      desc: "Single and double-sided flyers on 90–170gsm stocks — ideal for events, promotions, and campaigns." },
  { num: "04", Icon: BookOpen,     title: "Brochures & Catalogues",  desc: "Folded brochures and perfect-bound catalogues that communicate your brand with authority and precision." },
  { num: "05", Icon: Monitor,      title: "Large Format Digital",    desc: "Banners, standees, hoarding prints, and flex boards from 4ft to 60ft wide with vibrant wide-format output." },
  { num: "06", Icon: Layers,       title: "Vinyl / Translite / Canvas", desc: "Backlit translites, vinyl wraps, and fine-art canvas prints for retail displays and exhibitions." },
  { num: "07", Icon: Sparkles,     title: "Specialty Media",         desc: "Gold foil, silver stamping, spot UV, and embossing on premium boards — for work that demands distinction." },
  { num: "08", Icon: Database,     title: "Variable Data Printing",  desc: "Personalised mailers, invoices, and certificates with individually unique data printed per copy." },
  { num: "09", Icon: Scissors,     title: "Post-Print Finishing",    desc: "Lamination, die-cutting, scoring, folding, and binding — all completed in-house under one roof." },
];

// ─── PORTFOLIO (with Unsplash backdrop seeds) ─────────────────────
export const PORTFOLIO = [
  { id: 1,  title: "Corporate Annual Report",      category: "Corporate",    type: "Perfect-Bound Booklet", tone: "#2C3340", spec: "48pp · 130gsm gloss text · Gold foil hardcover", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80&auto=format&fit=crop", description: "A 48-page annual report featuring full-bleed photography, financial infographics, and a gold foil hardcover — produced for a leading Vadodara conglomerate with a 2,000-copy run." },
  { id: 2,  title: "Exhibition Standee",            category: "Large Format", type: "Large Format Print",    tone: "#1A2A3A", spec: "6ft × 2.5ft · Eco-solvent on vinyl · Rollable base", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80&auto=format&fit=crop", description: "Premium eco-solvent standee printed on 440gsm frontlit vinyl for a pharmaceutical brand's national trade show. Vivid CMYK with UV-resistant lamination." },
  { id: 3,  title: "Gold Foil Business Cards",      category: "Specialty",    type: "Specialty Cards",       tone: "#2A2010", spec: "400gsm black board · Hot gold foil stamp · Matte lam", image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=900&q=80&auto=format&fit=crop", description: "Luxury business cards on 400gsm black cardstock with hot gold foil stamping and soft-touch matte lamination. Produced in a 500-card run for a boutique law firm." },
  { id: 4,  title: "Tri-fold Brochure",             category: "Collateral",   type: "Folded Brochure",       tone: "#1A2A20", spec: "A4 → 3 panels · 170gsm gloss · Soft-touch lam",    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=80&auto=format&fit=crop", description: "Full-colour tri-fold brochure on 170gsm gloss art paper with a premium soft-touch matte laminate finish. Designed and produced for a real estate developer's property launch." },
  { id: 5,  title: "Company Profile Booklet",       category: "Corporate",    type: "Saddle-Stitch Booklet", tone: "#1E1E32", spec: "24pp · 130gsm silk · Matte lam cover · A4",        image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&q=80&auto=format&fit=crop", description: "A 24-page company profile booklet on 130gsm silk paper with a 300gsm matte laminated cover. Produced in a 1,000-copy run with precision colour matching." },
  { id: 6,  title: "Outdoor Hoarding",              category: "Large Format", type: "Flex Hoarding",         tone: "#2A1A1A", spec: "40ft × 10ft · 510gsm flex · Solvent ink",          image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80&auto=format&fit=crop", description: "A 40×10ft outdoor hoarding for a real estate project launch, printed on 510gsm PVC frontlit flex using UV-resistant solvent inks for long-term outdoor durability." },
  { id: 7,  title: "Event Flyer Campaign",          category: "Collateral",   type: "Flyer · 5,000 Run",     tone: "#241A30", spec: "A5 · 130gsm gloss · Double-sided · 5,000 copies",  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&auto=format&fit=crop", description: "A 5,000-copy A5 flyer campaign for a cultural event — double-sided on 130gsm glossy art paper with vibrant full-colour offset printing and crisp text reproduction." },
  { id: 8,  title: "Silver Satin Invitation Suite", category: "Specialty",    type: "Invitation Cards",      tone: "#2A1820", spec: "350gsm board · Silver foil · Satin texture · Die-cut", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80&auto=format&fit=crop", description: "An elegant invitation suite with silver hot foil stamping on 350gsm textured board, finished with die-cut edges and a satin ribbon — produced for a corporate gala event." },
  { id: 9,  title: "Corporate Wall Calendar",       category: "Corporate",    type: "Spiral-Bound Calendar", tone: "#102028", spec: "13-leaf · 12×18in · 170gsm · Wiro-bound",          image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80&auto=format&fit=crop", description: "A 13-leaf wiro-bound wall calendar featuring original photography on 170gsm glossy art paper. 250 personalised copies produced for a corporate gifting programme." },
  { id: 10, title: "Product Catalogue",             category: "Collateral",   type: "Perfect-Bound Catalogue", tone: "#0E2020", spec: "36pp · A5 · 115gsm silk · Perfect-bound",        image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80&auto=format&fit=crop", description: "A 36-page A5 product catalogue on 115gsm silk paper with a UV-coated cover. Produced in a 2,500-copy run for a consumer goods distributor's annual trade catalogue." },
  { id: 11, title: "Translite Backlit Panel",       category: "Large Format", type: "Backlit Translite",     tone: "#201808", spec: "3ft × 5ft · 200mic backlit film · LED-compatible",   image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=900&q=80&auto=format&fit=crop", description: "A backlit translite panel on 200-micron backlit film for a retail showroom. Printed with light-optimised inks to ensure vibrant, evenly-lit display in LED lightbox frames." },
  { id: 12, title: "Spot UV Business Cards",        category: "Specialty",    type: "UV Specialty Cards",    tone: "#1A1028", spec: "350gsm · Matte lam base · Selective spot UV",     image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&q=80&auto=format&fit=crop", description: "Business cards with a full matte laminate base and selective spot UV coating to highlight the logo and key text — creating a tactile contrast that stands out in every handshake." },
];

export const CATEGORIES = ["All", "Corporate", "Large Format", "Collateral", "Specialty"];

// ─── TESTIMONIALS ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: "Mehul Shah",   company: "Shah Enterprises",     text: "The quality of our annual reports was outstanding — crisp printing, beautiful binding, delivered on time. Vishal Offset is our printer of choice." },
  { name: "Priya Desai",  company: "Desai Fashion House",  text: "Eight years of consistent excellence. Their attention to colour accuracy and finishing detail is something we haven't found elsewhere in Vadodara." },
  { name: "Rajesh Kumar", company: "RK Infrastructure",    text: "Our hoarding and standees for the project launch were perfectly executed — vibrant, accurate, and delivered ahead of schedule." },
  { name: "Anil Patel",   company: "Patel & Sons",         text: "The gold foil business cards they produced receive compliments at every client meeting. An investment that reflects the quality of our firm." },
];

// ─── EQUIPMENT ────────────────────────────────────────────────────
export const EQUIPMENT = [
  "Roland Eco-Solvent 5ft", "Multi-Colour Image Runner", "High-Speed Offset Press",
  "Small Offset Press", "Auto Insert Folding Machine", "Program Cutting Machine",
  "UV Coating Machine", "Lamination Machine", "Die Cutting & Creasing",
  "Spiral Binding Machine", "Saddle Stitching Unit", "Digital Wide-Format Printer",
];

// ─── PROCESS ──────────────────────────────────────────────────────
export const PROCESS = [
  { step: "01", Icon: FileText, title: "Submit Your Brief",  desc: "Share your requirement via the quote form — size, quantity, finish, and deadline. We review and respond within one business day." },
  { step: "02", Icon: Printer,  title: "Proof & Approval",   desc: "Receive a digital proof within 24 hours. We refine until every detail — colour, copy, and layout — meets your approval." },
  { step: "03", Icon: Package,  title: "Print & Finish",     desc: "Production runs on our offset or digital press. Every batch is quality-checked at prepress, during press, and post-finishing." },
  { step: "04", Icon: Truck,    title: "On-Time Delivery",   desc: "Packed, labelled, and delivered to your address — or ready for collection at our Ajwa Road facility in Baroda." },
];

// ─── CUSTOM GIFTINGS DATA ─────────────────────────────────────────
export type GiftCategory = {
  id: string;
  title: string;
  blurb: string;
  details: string;
  Icon: LucideIcon;
  image: string;
  tone: string;
  items: string[];
};

export const GIFT_CATEGORIES: GiftCategory[] = [
  {
    id: "corporate",
    title: "Corporate Gifting",
    blurb: "Branded gifts that carry your company story to clients, partners, and teams.",
    details: "From boxed welcome kits to anniversary editions — co-branded, foil-stamped, individually packaged, and delivered ready to gift. Minimum runs from 25 units.",
    Icon: Briefcase,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&auto=format&fit=crop",
    tone: "#2A2010",
    items: ["Welcome Kits", "Anniversary Sets", "Client Hampers", "Team Awards", "Custom Notebooks"],
  },
  {
    id: "festival",
    title: "Festival Hampers",
    blurb: "Diwali, Holi, New Year and seasonal gifting — curated and beautifully boxed.",
    details: "Seasonal hampers featuring custom-printed wrap, foil-stamped greeting cards, ribbon, and rigid presentation boxes. Bulk corporate festival runs our specialty.",
    Icon: Sparkles,
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1200&q=80&auto=format&fit=crop",
    tone: "#3A1F1A",
    items: ["Diwali Boxes", "Holi Hampers", "Raksha Bandhan Sets", "New Year Editions", "Eid Gift Boxes"],
  },
  {
    id: "personalized",
    title: "Personalized Gifts",
    blurb: "One-of-one editions printed with names, dates, and dedications.",
    details: "Variable data printing lets us personalize hundreds of pieces — names embossed, photos integrated, messages individually printed — at production speed.",
    Icon: Heart,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80&auto=format&fit=crop",
    tone: "#2A1820",
    items: ["Photo Books", "Engraved Diaries", "Custom Calendars", "Anniversary Memories", "Birthday Editions"],
  },
  {
    id: "wedding",
    title: "Wedding Stationery",
    blurb: "Invitations, save-the-dates, and bespoke wedding kits printed to perfection.",
    details: "Foil-stamped invites, laser-cut overlays, satin envelopes, and embossed RSVPs. Full sets from save-the-date through thank-you card, in matched palettes.",
    Icon: Crown,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&auto=format&fit=crop",
    tone: "#2A1A1A",
    items: ["Foil Invitations", "Laser-Cut Cards", "Custom Envelopes", "Welcome Boxes", "Thank-You Notes"],
  },
  {
    id: "merchandise",
    title: "Branded Merchandise",
    blurb: "Promotional products printed with your brand — beyond the everyday.",
    details: "Custom diaries, totes, journals, branded packaging — printed and finished in-house with control over every detail. Perfect for launches and event giveaways.",
    Icon: Star,
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=1200&q=80&auto=format&fit=crop",
    tone: "#1A2A20",
    items: ["Branded Diaries", "Custom Journals", "Print Totes", "Launch Kits", "Event Giveaways"],
  },
  {
    id: "premium",
    title: "Premium Packaging",
    blurb: "Rigid boxes, sleeves, and presentation cases that elevate any product.",
    details: "Hand-finished rigid boxes with magnetic closures, satin liners, foil printing, and ribbon inserts. The unboxing experience is part of the gift.",
    Icon: Gift,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=80&auto=format&fit=crop",
    tone: "#102028",
    items: ["Rigid Gift Boxes", "Magnetic Cases", "Sleeve Packaging", "Satin Liners", "Luxe Sleeves"],
  },
];

// ─── LEGACY / TEAM DATA ───────────────────────────────────────────
export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  since: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: "VN",
    name: "Mr. Vishal Nimbalkar",
    role: "Founder & Master Printer",
    bio: "Founded the press in 1998 after a decade learning offset craft under Baroda's senior printers. Still personally inspects every premium run and oversees every aspect of the business — from the first proof to the final dispatch.",
    since: "Since 1998",
  },
];

export const TIMELINE = [
  { year: "1998", title: "The Press is Founded",          desc: "Mr. Vishal Nimbalkar establishes Vishal Offset on Ajwa Road with a single small-format press and a commitment to craft." },
  { year: "2007", title: "Production Scales Up",          desc: "Demand from corporate clients drives an upgrade to a high-speed offset press and a comprehensive finishing setup." },
  { year: "2014", title: "Digital Wide-Format Added",     desc: "Roland eco-solvent and digital wide-format added — opening the door to hoardings, standees, and translites." },
  { year: "2019", title: "Specialty Finishes In-House",   desc: "Hot foil stamping, UV coating, and die-cutting brought in-house. Every premium finish now under one roof." },
  { year: "2024", title: "25+ Years of Print Craft",      desc: "Over half a million prints delivered. The press has evolved — the founding standards remain unchanged." },
];

export const VALUES = [
  { title: "Craft Above All",       desc: "Every job receives the same care a portfolio piece would. No shortcuts on stock, ink, or finishing." },
  { title: "Deadline Integrity",    desc: "Your timeline becomes ours. Express turnarounds available when the calendar demands it." },
  { title: "Transparent Pricing",   desc: "Detailed quotations with no hidden costs. You see exactly what you're paying for and why." },
  { title: "Long-Term Partnership", desc: "Most of our clients have worked with us for over a decade. We invest in the relationship, not the transaction." },
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

// ─── PARTICLES (stable positions to avoid hydration mismatch) ────
export const PARTICLES = [
  { x: "12%",  y: "22%",  s: 3,   d: 4.2 },
  { x: "84%",  y: "14%",  s: 2,   d: 5.5 },
  { x: "26%",  y: "74%",  s: 2,   d: 3.8 },
  { x: "71%",  y: "58%",  s: 2.5, d: 6.1 },
  { x: "53%",  y: "31%",  s: 1.5, d: 4.6 },
  { x: "39%",  y: "84%",  s: 2,   d: 5.2 },
  { x: "90%",  y: "44%",  s: 1.5, d: 3.6 },
  { x: "8%",   y: "54%",  s: 2,   d: 4.8 },
];
