"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, ExternalLink,
  ArrowUp, MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/lib/data";

/** Compact row used inside the contact column. */
function ContactRow({ Icon, label, children }: { Icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div
        className="w-8 h-8 flex items-center justify-center shrink-0"
        style={{ border: "1px solid rgba(181,136,42,0.22)", color: "#B5882A" }}
      >
        <Icon className="w-3.5 h-3.5" />
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
 * Slim 2-column footer:  [ Map ]  [ Contact column ]
 * Below: small attribution strip.
 * Plus: floating WhatsApp / Call / Top buttons.
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
      {/* ── MAP + CONTACT (the only footer block now) ──────────────── */}
      <section
        id="visit"
        className="relative overflow-hidden"
        style={{ background: "#100D08", borderTop: "1px solid rgba(181,136,42,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Map (left, 7/12) */}
            <div className="lg:col-span-7">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16 / 10", background: "#1A1209" }}
              >
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
                <div
                  aria-hidden
                  className="absolute inset-3 pointer-events-none"
                  style={{ border: "1px solid rgba(181,136,42,0.22)" }}
                />
              </div>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.25em] uppercase transition-colors"
                style={{ color: "#B5882A" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A45A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
              >
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Contact column (right, 5/12) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                  Visit Our Press
                </p>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                    fontWeight: 400, color: "#F7F2EA", lineHeight: 1.1,
                  }}
                >
                  Find us on<br />
                  <em style={{ fontStyle: "italic", color: "#C9A45A" }}>Ajwa Road</em>
                </h2>

                <div className="space-y-4">
                  <ContactRow Icon={MapPin} label="Address">
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block whitespace-pre-line transition-colors hover:text-[#C9A45A]"
                      style={{ color: "rgba(247,242,234,0.65)" }}
                    >
                      {`${CONTACT.address1}\n${CONTACT.address2}`}
                    </a>
                  </ContactRow>

                  <ContactRow Icon={Phone} label="Phone">
                    <a
                      href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                      className="block transition-colors hover:text-[#C9A45A]"
                      style={{ color: "rgba(247,242,234,0.65)" }}
                    >
                      {CONTACT.phone1}
                    </a>
                    <a
                      href={`tel:${CONTACT.phone2.replace(/\s|-/g, "")}`}
                      className="block transition-colors hover:text-[#C9A45A]"
                      style={{ color: "rgba(247,242,234,0.65)" }}
                    >
                      {CONTACT.phone2}
                    </a>
                  </ContactRow>

                  <ContactRow Icon={Mail} label="Email">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="block transition-colors hover:text-[#C9A45A] break-all"
                      style={{ color: "rgba(247,242,234,0.65)" }}
                    >
                      {CONTACT.email}
                    </a>
                  </ContactRow>

                  <ContactRow Icon={Clock} label="Hours">
                    <p
                      className="whitespace-pre-line"
                      style={{ color: "rgba(247,242,234,0.65)", fontWeight: 300 }}
                    >
                      {`${CONTACT.hours}\n${CONTACT.hoursAlt}`}
                    </p>
                  </ContactRow>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom attribution strip */}
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(181,136,42,0.08)" }}
        >
          <Link href="/" className="inline-flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.svg" alt="Vishal Offset" style={{ height: 28, width: "auto", opacity: 0.7 }} />
          </Link>
          <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(247,242,234,0.22)" }}>
            © {new Date().getFullYear()} Vishal Offset · Vadodara
          </p>
        </div>

        {/* Anchor for legacy contact links */}
        <span id="contact" aria-hidden style={{ position: "absolute", bottom: 0, opacity: 0 }} />
      </section>

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
