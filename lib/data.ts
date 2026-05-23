import type { LucideIcon } from "lucide-react";
import {
  CreditCard, CalendarDays, FileText, BookOpen, Monitor, Layers,
  Sparkles, Database, Scissors, Printer, Package, Truck,
  Gift, Mail as MailIcon,
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
  href: string;
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services"     },
  { label: "Our Work", href: "/#our-work"    },
  { label: "Sajavvat", href: "/sajavvat"     },
  { label: "Legacy",   href: "/legacy"       },
  { label: "Contact",  href: "/#contact"     },
];

// ─── SERVICES ──────────────────────────────────────────────────────
export type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  { num: "01", Icon: CreditCard,   title: "Business Card Printing",     desc: "Offset & digital cards in matte, gloss, soft-touch and foil — crafted to make the first impression count." },
  { num: "02", Icon: CalendarDays, title: "Calendar Printing",          desc: "Wall, desk, and pocket calendars with vivid CMYK reproduction and premium paper stocks." },
  { num: "03", Icon: FileText,     title: "Pamphlets & Flyers",         desc: "Single and double-sided flyers on 90–170gsm stocks — ideal for events, promotions, and campaigns." },
  { num: "04", Icon: BookOpen,     title: "Brochures & Catalogues",     desc: "Folded brochures and perfect-bound catalogues that communicate your brand with authority and precision." },
  { num: "05", Icon: Monitor,      title: "Large Format Digital",       desc: "Banners, standees, hoarding prints, and flex boards from 4ft to 60ft wide." },
  { num: "06", Icon: Layers,       title: "Vinyl / Translite / Canvas", desc: "Backlit translites, vinyl wraps, and fine-art canvas prints for retail displays and exhibitions." },
  { num: "07", Icon: Sparkles,     title: "Specialty Media",            desc: "Gold foil, silver stamping, spot UV, and embossing on premium boards — for work that demands distinction." },
  { num: "08", Icon: Database,     title: "Variable Data Printing",     desc: "Personalised mailers, invoices, and certificates with individually unique data printed per copy." },
  { num: "09", Icon: Scissors,     title: "Post-Print Finishing",       desc: "Lamination, die-cutting, scoring, folding, and binding — completed in-house under one roof." },
];

// ─── PORTFOLIO ─────────────────────────────────────────────────────
export const PORTFOLIO = [
  { id: 1,  title: "Corporate Annual Report",      category: "Corporate",    type: "Perfect-Bound Booklet",   tone: "#2C3340", spec: "48pp · 130gsm gloss text · Gold foil hardcover",  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80&auto=format&fit=crop", description: "A 48-page annual report featuring full-bleed photography, financial infographics, and a gold foil hardcover — produced for a leading Vadodara conglomerate with a 2,000-copy run." },
  { id: 2,  title: "Exhibition Standee",            category: "Large Format", type: "Large Format Print",      tone: "#1A2A3A", spec: "6ft × 2.5ft · Eco-solvent on vinyl · Rollable base", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80&auto=format&fit=crop", description: "Premium eco-solvent standee printed on 440gsm frontlit vinyl for a pharmaceutical brand's national trade show. Vivid CMYK with UV-resistant lamination." },
  { id: 3,  title: "Gold Foil Business Cards",      category: "Specialty",    type: "Specialty Cards",         tone: "#2A2010", spec: "400gsm black board · Hot gold foil stamp · Matte lam", image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=900&q=80&auto=format&fit=crop", description: "Luxury business cards on 400gsm black cardstock with hot gold foil stamping and soft-touch matte lamination. Produced in a 500-card run for a boutique law firm." },
  { id: 4,  title: "Tri-fold Brochure",             category: "Collateral",   type: "Folded Brochure",         tone: "#1A2A20", spec: "A4 → 3 panels · 170gsm gloss · Soft-touch lam",     image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=80&auto=format&fit=crop", description: "Full-colour tri-fold brochure on 170gsm gloss art paper with a premium soft-touch matte laminate finish — for a real estate property launch." },
  { id: 5,  title: "Company Profile Booklet",       category: "Corporate",    type: "Saddle-Stitch Booklet",   tone: "#1E1E32", spec: "24pp · 130gsm silk · Matte lam cover · A4",         image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&q=80&auto=format&fit=crop", description: "A 24-page company profile booklet on 130gsm silk paper with a 300gsm matte laminated cover. 1,000-copy run with precision colour matching." },
  { id: 6,  title: "Outdoor Hoarding",              category: "Large Format", type: "Flex Hoarding",           tone: "#2A1A1A", spec: "40ft × 10ft · 510gsm flex · Solvent ink",           image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80&auto=format&fit=crop", description: "A 40×10ft outdoor hoarding for a real estate project, printed on 510gsm PVC frontlit flex with UV-resistant solvent inks." },
  { id: 7,  title: "Event Flyer Campaign",          category: "Collateral",   type: "Flyer · 5,000 Run",       tone: "#241A30", spec: "A5 · 130gsm gloss · Double-sided · 5,000 copies",   image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&auto=format&fit=crop", description: "A 5,000-copy A5 flyer campaign for a cultural event — double-sided on 130gsm glossy art paper with vibrant full-colour offset." },
  { id: 8,  title: "Silver Satin Invitation Suite", category: "Specialty",    type: "Invitation Cards",        tone: "#2A1820", spec: "350gsm board · Silver foil · Satin · Die-cut",      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80&auto=format&fit=crop", description: "Invitation suite with silver hot foil stamping on 350gsm textured board, finished with die-cut edges and a satin ribbon for a corporate gala." },
  { id: 9,  title: "Corporate Wall Calendar",       category: "Corporate",    type: "Spiral-Bound Calendar",   tone: "#102028", spec: "13-leaf · 12×18in · 170gsm · Wiro-bound",           image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80&auto=format&fit=crop", description: "A 13-leaf wiro-bound wall calendar with original photography on 170gsm glossy art paper. 250 personalised copies for a corporate gifting programme." },
  { id: 10, title: "Product Catalogue",             category: "Collateral",   type: "Perfect-Bound Catalogue", tone: "#0E2020", spec: "36pp · A5 · 115gsm silk · Perfect-bound",           image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80&auto=format&fit=crop", description: "A 36-page A5 product catalogue on 115gsm silk paper with a UV-coated cover. 2,500-copy run for a consumer goods distributor." },
  { id: 11, title: "Translite Backlit Panel",       category: "Large Format", type: "Backlit Translite",       tone: "#201808", spec: "3ft × 5ft · 200mic backlit film · LED-compatible",  image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=900&q=80&auto=format&fit=crop", description: "A backlit translite panel on 200-micron film for a retail showroom — light-optimised inks for vibrant, evenly-lit LED lightbox display." },
  { id: 12, title: "Spot UV Business Cards",        category: "Specialty",    type: "UV Specialty Cards",      tone: "#1A1028", spec: "350gsm · Matte lam base · Selective spot UV",       image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&q=80&auto=format&fit=crop", description: "Cards with a full matte laminate base and selective spot UV to highlight the logo and key text — tactile contrast that stands out in every handshake." },
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
  "Auto Insert Folding Machine", "Program Cutting Machine",
  "UV Coating Machine", "Lamination Machine", "Die Cutting & Creasing",
  "Spiral Binding Machine", "Saddle Stitching Unit", "Digital Wide-Format Printer",
];

// ─── PROCESS ──────────────────────────────────────────────────────
export const PROCESS = [
  { step: "01", Icon: FileText, title: "Submit Your Brief",  desc: "Share your requirement — size, quantity, finish, and deadline. We respond within one business day." },
  { step: "02", Icon: Printer,  title: "Proof & Approval",   desc: "Receive a digital proof within 24 hours. We refine until every detail meets your approval." },
  { step: "03", Icon: Package,  title: "Print & Finish",     desc: "Production runs on our offset or digital press, quality-checked at every stage." },
  { step: "04", Icon: Truck,    title: "On-Time Delivery",   desc: "Packed, labelled, and delivered — or collected at our Ajwa Road facility in Baroda." },
];

// ─── SAJAVVAT (creative wing) ─────────────────────────────────────
export const SAJAVVAT = {
  name: "Sajavvat",
  tagline: "A creative wing of Vishal Offset",
  short:
    "Custom envelopes, decor pieces, and celebratory gifting — designed and produced on the same press, for the moments that deserve them.",
  occasions: ["Weddings", "Birthdays", "Corporate Events", "Hampers", "Gift Packs", "Festivals"],
};

export type SajavvatCategory = {
  id: string;
  title: string;
  blurb: string;
  details: string;
  Icon: LucideIcon;
  image: string;        // place /sajavvat/<file>.jpg locally to override
  tone: string;
  items: string[];
};

// Placeholder images live under /public/sajavvat/. Until you drop real photos
// there, these Unsplash URLs serve as visual placeholders the same size.
export const SAJAVVAT_CATEGORIES: SajavvatCategory[] = [
  {
    id: "envelopes",
    title: "Custom Envelopes",
    blurb: "Personalised envelopes that set the tone before the card is opened.",
    details: "Foil-stamped, embossed, die-cut, or block-printed envelopes in any size and stock. Sealed with wax, wrapped in ribbon, or simply laid in clean type — built around the occasion they carry.",
    Icon: MailIcon,
    image: "/sajavvat/envelopes.jpg",
    tone: "#2A1A1A",
    items: ["Foil-stamped", "Embossed & Debossed", "Wax-Sealed", "Die-cut Liners", "Custom Sizes"],
  },
  {
    id: "decor",
    title: "Decor Pieces",
    blurb: "Printed decor that sets the scene for the day.",
    details: "Signage, table-numbers, place-cards, themed printables, monogrammed accents, and bespoke event collateral — printed on heavyweight stocks with finishing that holds up to the camera.",
    Icon: Sparkles,
    image: "/sajavvat/decor.jpg",
    tone: "#2A2010",
    items: ["Signage & Welcome Boards", "Table Numbers", "Place Cards", "Themed Printables", "Monograms"],
  },
  {
    id: "gifting",
    title: "Gifting",
    blurb: "Hampers, gift packs, and bespoke boxes for the moments that matter.",
    details: "Rigid presentation boxes, festival hampers, anniversary editions, and curated client kits — printed wrap, foil-stamped lids, satin liners, ribbon inserts. The unboxing is part of the gift.",
    Icon: Gift,
    image: "/sajavvat/gifting.jpg",
    tone: "#1E1E32",
    items: ["Hampers", "Gift Packs", "Rigid Boxes", "Anniversary Editions", "Client Kits"],
  },
];

// ─── LEGACY / FAMILY (three generations) ──────────────────────────
export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  generation: string;
  bio: string;
  since: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: "JN",
    name: "Jaisingh Nimbalkar",
    role: "Founder · First Generation",
    generation: "1st Generation",
    bio: "Brought the family into print. The discipline he set on the press floor — patience, precision, ownership over every job — has carried through to every generation that followed.",
    since: "First Generation",
  },
  {
    initials: "VN",
    name: "Mr. Vishal Nimbalkar",
    role: "Owner & Master Printer · Second Generation",
    generation: "2nd Generation",
    bio: "Took the press into its modern form in 1998 and has run it personally ever since. Still inspects every premium run and oversees every aspect of the business — from the first proof to the final dispatch.",
    since: "Since 1998",
  },
  {
    initials: "DN",
    name: "Durva Nimbalkar",
    role: "Third Generation",
    generation: "3rd Generation",
    bio: "The third generation now joining the press — carrying the family craft forward and leading Sajavvat, the creative wing built around envelopes, decor, and gifting.",
    since: "Third Generation",
  },
];

export const TIMELINE = [
  { year: "Before",  title: "The First Generation",      desc: "Jaisingh Nimbalkar brings the family into print. The standard set on the press floor in those years still runs the press today." },
  { year: "1998",    title: "Vishal Takes the Press",    desc: "Mr. Vishal Nimbalkar formalises operations on Ajwa Road and turns the press into a full-service offset house." },
  { year: "2007",    title: "Production Scales Up",      desc: "Demand from corporate clients drives an upgrade to a high-speed offset press and a comprehensive finishing setup." },
  { year: "2014",    title: "Digital Wide-Format Added", desc: "Roland eco-solvent and digital wide-format added — opening the door to hoardings, standees, and translites." },
  { year: "2019",    title: "Specialty Finishes In-House", desc: "Hot foil stamping, UV coating, and die-cutting brought in-house. Every premium finish now under one roof." },
  { year: "Today",   title: "Third Generation Joins",    desc: "Durva Nimbalkar joins as the third generation, leading Sajavvat — the press's creative wing for envelopes, decor, and gifting." },
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

// ─── PARTICLES (reduced for minimal POV) ──────────────────────────
export const PARTICLES = [
  { x: "15%",  y: "28%",  s: 2,   d: 5.8 },
  { x: "82%",  y: "18%",  s: 2,   d: 6.2 },
  { x: "68%",  y: "62%",  s: 2,   d: 7.1 },
  { x: "30%",  y: "78%",  s: 1.5, d: 5.4 },
];

