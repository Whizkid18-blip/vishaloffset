"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { SAJAVVAT, SAJAVVAT_CATEGORIES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

/**
 * Sajavvat — the creative wing of Vishal Offset.
 * Custom envelopes, decor pieces, and celebratory gifting.
 *
 * Drop real photos into /public/sajavvat/ with these filenames to override
 * the Unsplash fallbacks:
 *   envelopes.jpg · decor.jpg · gifting.jpg
 *   gallery-1.jpg ... gallery-6.jpg
 */
export default function SajavvatPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 lg:pt-52 lg:pb-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
            style={{ color: "rgba(181,136,42,0.75)" }}
          >
            <span style={{ width: 20, height: 1, background: "#B5882A" }} />
            <Sparkles className="w-3 h-3" />
            <span className="text-[10px] tracking-[0.32em] uppercase">{SAJAVVAT.tagline}</span>
            <span style={{ width: 20, height: 1, background: "#B5882A" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontStyle: "italic",
              fontSize: "clamp(4.5rem, 12vw, 9rem)",
              fontWeight: 400,
              color: "#1A1209",
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
            }}
          >
            {SAJAVVAT.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 text-base lg:text-lg leading-relaxed max-w-md mx-auto"
            style={{ color: "#5C4A2A", fontWeight: 300 }}
          >
            {SAJAVVAT.short}
          </motion.p>
        </div>
      </section>

      {/* ── 2. THREE CATEGORIES — alternating, 7/5 asymmetric ─────── */}
      <section className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-24 lg:space-y-36">
          {SAJAVVAT_CATEGORIES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={c.id}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${flip ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image — 7/12 */}
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "5 / 4", background: c.tone }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] hover:scale-105"
                      style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        if (!t.dataset.fallback) {
                          t.dataset.fallback = "1";
                          const fb: Record<string, string> = {
                            envelopes: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=80&auto=format&fit=crop",
                            decor:     "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&auto=format&fit=crop",
                            gifting:   "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&auto=format&fit=crop",
                          };
                          t.src = fb[c.id] || fb.gifting;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Copy — 5/12 */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="text-[10px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                    0{i + 1}
                  </div>
                  <h2
                    className="mb-5"
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 400,
                      color: "#1A1209",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                    {c.blurb}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 3. GALLERY — 6 tiles, no chrome ───────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-[10px] tracking-[0.28em] uppercase text-center mb-12"
            style={{ color: "#B5882A" }}
          >
            Selected Pieces
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.07, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "1 / 1", background: "#2A2010" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/sajavvat/gallery-${n}.jpg`}
                  alt={`Sajavvat piece ${n}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = "1";
                      const fbs = [
                        "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=900&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=900&q=80&auto=format&fit=crop",
                      ];
                      t.src = fbs[(n - 1) % fbs.length];
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. QUIET CONTACT STRIP ────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#100D08" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "#F7F2EA",
              lineHeight: 1.3,
            }}
            className="mb-8"
          >
            Tell us about the occasion.
          </motion.p>
          <MagneticButton
            as="a" href="/#enquire"
            className="inline-flex items-center px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ background: "#B5882A", color: "#fff" }}
          >
            Start an Enquiry <ArrowRight className="w-3.5 h-3.5 ml-3" />
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
