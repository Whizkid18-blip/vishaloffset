"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, Globe, Share2, ExternalLink,
  ArrowUp, MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SERVICES, CONTACT } from "@/lib/data";

/** Row used inside the "Visit Our Press" contact block. */
function ContactRow({ Icon, label, children }: { Icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div
        className="w-9 h-9 flex items-center justify-center shrink-0"
        style={{ border: "1px solid rgba(181,136,42,0.22)", color: "#B5882A" }}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
        <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: "rgba(181,136,42,0.55)" }}>
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

/**
 * Map + Footer + Floating CTAs.
 * Self-contained — drop at the bottom of any page.
 */
export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── MAP + CONTACT SECTION ──────────────────────────────────── */}
      <section
        id="visit"
        className="relative overflow-hidden"
        style={{ background: "#100D08", borderTop: "1px solid rgba(181,136,42,0.12)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Map */}
          <div className="lg:col-span-3 relative h-[420px] lg:h-[520px]" style={{ background: "#1A1209" }}>
            <iframe
              title="Vishal Offset location — Ajwa Road, Vadodara"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.1850%2C22.3050%2C73.2350%2C22.3450&layer=mapnik&marker=22.3220%2C73.2090"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.45) contrast(1.05) brightness(0.85) sepia(0.18) hue-rotate(-12deg)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Decorative inner frame */}
            <div
              aria-hidden
              className="absolute inset-3 pointer-events-none"
              style={{ border: "1px solid rgba(181,136,42,0.2)" }}
            />
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 px-8 lg:px-12 py-14 lg:py-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                Visit Our Press
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(1.9rem,3.2vw,2.8rem)",
                  fontWeight: 400, color: "#F7F2EA", lineHeight: 1.1,
                }}
                className="mb-8"
              >
                Find us on<br />
                <em style={{ fontStyle: "italic", color: "#C9A45A" }}>Ajwa Road</em>
              </h2>

              <div className="space-y-5">
                {/* Address */}
                <ContactRow Icon={MapPin} label="Address">
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block whitespace-pre-line transition-colors hover:text-[#C9A45A]"
                    style={{ color: "rgba(247,242,234,0.7)" }}
                  >
                    {`${CONTACT.address1}\n${CONTACT.address2}`}
                  </a>
                </ContactRow>

                {/* Phones — both clickable tel: */}
                <ContactRow Icon={Phone} label="Phone">
                  <a
                    href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                    className="block transition-colors hover:text-[#C9A45A]"
                    style={{ color: "rgba(247,242,234,0.7)" }}
                  >
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2.replace(/\s|-/g, "")}`}
                    className="block transition-colors hover:text-[#C9A45A]"
                    style={{ color: "rgba(247,242,234,0.7)" }}
                  >
                    {CONTACT.phone2}
                  </a>
                </ContactRow>

                {/* Email — mailto: */}
                <ContactRow Icon={Mail} label="Email">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="block transition-colors hover:text-[#C9A45A] break-all"
                    style={{ color: "rgba(247,242,234,0.7)" }}
                  >
                    {CONTACT.email}
                  </a>
                </ContactRow>

                {/* Hours — plain text */}
                <ContactRow Icon={Clock} label="Hours">
                  <p
                    className="whitespace-pre-line"
                    style={{ color: "rgba(247,242,234,0.7)", fontWeight: 300 }}
                  >
                    {`${CONTACT.hours}\n${CONTACT.hoursAlt}`}
                  </p>
                </ContactRow>
              </div>

              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.2em] uppercase transition-colors"
                style={{ color: "#B5882A" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A45A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
              >
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer id="contact" style={{ background: "#0B0907" }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 py-14"
          style={{ borderBottom: "1px solid rgba(181,136,42,0.08)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-light.svg" alt="Vishal Offset" style={{ height: 42, width: "auto" }} />
              </Link>
              <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}>
                Precision offset printing for brands, businesses, and institutions
                across Gujarat. A legacy of craft and quality since 1998.
              </p>
              <div className="flex gap-3">
                {[Globe, Share2, ExternalLink].map((Icon, i) => (
                  <a
                    key={i} href="#"
                    className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                    style={{ border: "1px solid rgba(181,136,42,0.15)", color: "rgba(181,136,42,0.32)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#B5882A";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#B5882A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(181,136,42,0.15)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(181,136,42,0.32)";
                    }}
                    aria-label="Social link"
                  >
                    <Icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(181,136,42,0.5)" }}>
                Navigation
              </div>
              <div className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href} href={link.href}
                    className="block text-[12px] transition-colors"
                    style={{ color: "rgba(247,242,234,0.25)", fontWeight: 300 }}
                  >
                    <span
                      onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(247,242,234,0.65)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(247,242,234,0.25)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(181,136,42,0.5)" }}>
                Services
              </div>
              <div className="space-y-2.5">
                {SERVICES.slice(0, 6).map((s) => (
                  <div key={s.title} className="text-[12px]" style={{ color: "rgba(247,242,234,0.25)", fontWeight: 300 }}>
                    {s.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(181,136,42,0.5)" }}>
                Contact
              </div>
              <div className="space-y-4 text-[12px] leading-relaxed">
                <div className="flex gap-3">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "rgba(181,136,42,0.4)" }} />
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="whitespace-pre-line transition-colors hover:text-[#B5882A]"
                    style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}
                  >
                    {`${CONTACT.address1}\n${CONTACT.address2}`}
                  </a>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "rgba(181,136,42,0.4)" }} />
                  <div>
                    <a
                      href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                      className="block transition-colors hover:text-[#B5882A]"
                      style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}
                    >
                      {CONTACT.phone1}
                    </a>
                    <a
                      href={`tel:${CONTACT.phone2.replace(/\s|-/g, "")}`}
                      className="block transition-colors hover:text-[#B5882A]"
                      style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}
                    >
                      {CONTACT.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "rgba(181,136,42,0.4)" }} />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all transition-colors hover:text-[#B5882A]"
                    style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "rgba(181,136,42,0.4)" }} />
                  <p className="whitespace-pre-line" style={{ color: "rgba(247,242,234,0.28)", fontWeight: 300 }}>
                    {`${CONTACT.hours}\n${CONTACT.hoursAlt}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-wider" style={{ color: "rgba(247,242,234,0.12)", fontWeight: 300 }}>
            © {new Date().getFullYear()} Vishal Offset. All rights reserved.
          </p>
          <p className="text-[11px] tracking-wider" style={{ color: "rgba(181,136,42,0.2)" }}>
            C-1 Sardar Estate · Ajwa Road · Vadodara · Gujarat 390 019
          </p>
        </div>
      </footer>

      {/* ── FLOATING CTAs ──────────────────────────────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              style={{ background: "#25D366", borderRadius: "50%" }}
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
              className="w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              style={{ background: "#B5882A", borderRadius: "50%" }}
              title="Call Us"
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
            <button
              onClick={scrollTop}
              className="w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                border: "1px solid rgba(181,136,42,0.35)",
                background: "rgba(16,13,8,0.88)",
                backdropFilter: "blur(8px)",
                borderRadius: 0,
              }}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" style={{ color: "#B5882A" }} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
