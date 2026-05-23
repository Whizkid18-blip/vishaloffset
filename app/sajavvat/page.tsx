"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { SplitInline } from "@/components/SplitText";
import { SAJAVVAT, SAJAVVAT_CATEGORIES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

/**
 * Sajavvat — the creative wing of Vishal Offset.
 * Custom envelopes, decor pieces, and celebratory gifting.
 *
 * Photos: drop real shots into /public/sajavvat/ with these filenames:
 *   - hero.jpg
 *   - envelopes.jpg
 *   - decor.jpg
 *   - gifting.jpg
 *   - gallery-1..6.jpg
 * (Until the files exist the <img> just shows a broken icon — the gold
 *  tone block behind it keeps the layout intact.)
 */
export default function SajavvatPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── HERO — quiet, centered, generous whitespace ─────────── */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
        style={{ background: "#FAF7F1" }}
      >
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          {/* Small italic mark, centred */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
            style={{ color: "rgba(181,136,42,0.8)" }}
          >
            <span style={{ width: 24, height: 1, background: "#B5882A" }} />
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-[0.32em] uppercase">
              {SAJAVVAT.tagline}
            </span>
            <span style={{ width: 24, height: 1, background: "#B5882A" }} />
          </motion.div>

          <h1
            className="mb-8"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(4.5rem,11vw,9rem)",
              fontWeight: 400,
              color: "#1A1209",
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              fontStyle: "italic",
            }}
          >
            <SplitInline text={SAJAVVAT.name} stagger={0.14} delay={0.25} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#5C4A2A", fontWeight: 300 }}
          >
            {SAJAVVAT.short}
          </motion.p>

          {/* Occasions ribbon */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12"
          >
            {SAJAVVAT.occasions.map((occ) => (
              <span
                key={occ}
                className="text-[10px] tracking-[0.22em] uppercase"
                style={{ color: "rgba(139,115,85,0.7)" }}
              >
                {occ}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <MagneticButton
              as="a" href="/#contact-form"
              className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
              style={{ background: "#1A1209", color: "#F7F2EA" }}
            >
              Start an Enquiry <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── HERO BAND IMAGE (full-bleed placeholder) ──────────────── */}
      <section style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-28">
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "21/9", background: "#2A2010" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sajavvat/hero.jpg"
              alt="Sajavvat — custom envelopes, decor, gifting"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a tasteful Unsplash placeholder until real photo is dropped in
                const t = e.currentTarget as HTMLImageElement;
                if (!t.dataset.fallback) {
                  t.dataset.fallback = "1";
                  t.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1600&q=80&auto=format&fit=crop";
                }
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(10,7,4,0.35) 0%, rgba(10,7,4,0.15) 100%)" }}
            />
            <div className="absolute inset-3 pointer-events-none" style={{ border: "1px solid rgba(247,242,234,0.25)" }} />
          </div>
        </div>
      </section>

      {/* ── CATEGORIES — three quiet sections ─────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-20 lg:space-y-28">
          {SAJAVVAT_CATEGORIES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={c.id}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${flip ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/3", background: c.tone }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        if (!t.dataset.fallback) {
                          t.dataset.fallback = "1";
                          // Per-category Unsplash fallback
                          const fb: Record<string, string> = {
                            envelopes: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=80&auto=format&fit=crop",
                            decor:     "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&auto=format&fit=crop",
                            gifting:   "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&auto=format&fit=crop",
                          };
                          t.src = fb[c.id] || fb.gifting;
                        }
                      }}
                    />
                    <div className="absolute inset-2 pointer-events-none" style={{ border: "1px solid rgba(247,242,234,0.2)" }} />
                  </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: "#B5882A" }}>
                    0{i + 1} · Category
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 flex items-center justify-center"
                      style={{ border: "1px solid rgba(181,136,42,0.28)", color: "#B5882A" }}
                    >
                      <c.Icon className="w-4 h-4" />
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "2rem", fontWeight: 500, color: "#1A1209", lineHeight: 1.05,
                      }}
                    >
                      {c.title}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                    {c.blurb}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#8B7355", fontWeight: 300 }}>
                    {c.details}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="text-[10px] tracking-wider uppercase px-2.5 py-1"
                        style={{ background: "rgba(181,136,42,0.08)", color: "#8B7355" }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/#contact-form"
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors"
                    style={{ color: "#B5882A" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9A7230")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
                  >
                    Enquire <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── GALLERY PLACEHOLDERS — six slots, swap the files ────── */}
      <section className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              Selected Pieces
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.2rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              A small <em style={{ fontStyle: "italic", color: "#B5882A" }}>gallery</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.08 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
                style={{ aspectRatio: "1/1", background: "#2A2010" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/sajavvat/gallery-${n}.jpg`}
                  alt={`Sajavvat work ${n}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = "1";
                      // Rotating Unsplash placeholders
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
                <div className="absolute inset-1 pointer-events-none" style={{ border: "1px solid rgba(247,242,234,0.12)" }} />
              </motion.div>
            ))}
          </div>

          <p
            className="text-center text-[10px] tracking-[0.25em] uppercase mt-10"
            style={{ color: "rgba(139,115,85,0.55)" }}
          >
            More work shared on Instagram · @sajavvat_india
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#100D08" }}>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(1.9rem,4.2vw,3rem)",
              fontWeight: 400, color: "#F7F2EA", lineHeight: 1.2,
            }}
            className="mb-6"
          >
            Tell us about the<br />
            <em style={{ fontStyle: "italic", color: "#C9A45A" }}>occasion.</em>
          </motion.h2>
          <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: "rgba(247,242,234,0.45)", fontWeight: 300 }}>
            Share the date, the count, and the vibe. We&rsquo;ll respond with a quote and a
            sample-ready proof within one business day.
          </p>
          <MagneticButton
            as="a" href="/#contact-form"
            className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
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
