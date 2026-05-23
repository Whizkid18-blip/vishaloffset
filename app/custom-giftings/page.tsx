"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import ImageReveal from "@/components/ImageReveal";
import { SplitInline } from "@/components/SplitText";
import { GIFT_CATEGORIES, PARTICLES } from "@/lib/data";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function CustomGiftingsPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
        style={{ background: "#100D08" }}
      >
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(181,136,42,0.14) 0%, transparent 60%)" }}
        />
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: "#C9A45A" }}
              animate={{ y: [-10, 10, -10], opacity: [0.08, 0.22, 0.08] }}
              transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.38 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8" style={{ color: "rgba(181,136,42,0.75)" }}>
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] tracking-[0.3em] uppercase">
                Custom Giftings · Crafted in Vadodara
              </span>
            </div>
            <h1
              className="mb-8 leading-[0.95]"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(3rem,7.5vw,6.5rem)",
                fontWeight: 300,
                color: "#F7F2EA",
                letterSpacing: "-0.02em",
              }}
            >
              <SplitInline text="Gifts that" stagger={0.12} delay={0.2} />
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A45A", fontWeight: 400 }}>
                <SplitInline text="leave a mark." stagger={0.12} delay={0.5} />
              </em>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(247,242,234,0.55)", fontWeight: 300 }}
            >
              Bespoke corporate gifting, wedding stationery, and personalised editions —
              printed, finished, and packaged in-house. Whether you need 25 boxes or 5,000,
              the same craft holds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticButton
                as="a"
                href="/#contact-form"
                className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ background: "#B5882A", color: "#fff" }}
              >
                Request Gift Catalogue <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </MagneticButton>
              <a
                href="#categories"
                className="text-[11px] tracking-[0.2em] uppercase border px-8 py-3.5 transition-all"
                style={{ borderColor: "rgba(247,242,234,0.22)", color: "rgba(247,242,234,0.55)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(247,242,234,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F7F2EA";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(247,242,234,0.22)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247,242,234,0.55)";
                }}
              >
                Browse Categories
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="lg:col-span-5"
          >
            <TiltCard max={6} scale={1.02}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80&auto=format&fit=crop"
                alt="Custom gift packaging"
                aspect="4/5"
                tint="#100D08"
                tintOpacity={0.15}
                parallax={0.18}
              />
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO STRIP ────────────────────────────────────────────── */}
      <section style={{ background: "#1A1209", borderTop: "1px solid rgba(181,136,42,0.12)", borderBottom: "1px solid rgba(181,136,42,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: "25+",  l: "Minimum Order" },
            { v: "48hr", l: "Proof Turnaround" },
            { v: "100%", l: "In-house Finishing" },
            { v: "Pan-Gujarat", l: "Delivery" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "2rem", fontWeight: 300, color: "#C9A45A", lineHeight: 1,
                }}
              >
                {s.v}
              </div>
              <div className="mt-2 text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(247,242,234,0.4)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────────────────── */}
      <section id="categories" className="py-28 lg:py-36" style={{ background: "#F7F2EA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              Gifting Categories
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.2rem,5vw,3.8rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              Six worlds of
              <em style={{ fontStyle: "italic", color: "#B5882A" }}> custom gifting</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GIFT_CATEGORIES.map((g, i) => (
              <motion.div
                key={g.id}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
              >
                <TiltCard max={8} scale={1.025}>
                  <div
                    className="relative overflow-hidden group cursor-pointer"
                    style={{ background: g.tone, aspectRatio: "4/5" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.image}
                      alt={g.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(10,7,4,0.95) 0%, rgba(10,7,4,0.6) 40%, rgba(10,7,4,0.2) 70%, transparent 100%)" }}
                    />
                    <div className="absolute inset-3 pointer-events-none" style={{ border: "1px solid rgba(181,136,42,0.22)" }} />

                    {/* Icon top-left */}
                    <div className="absolute top-5 left-5 z-10">
                      <div
                        className="w-10 h-10 flex items-center justify-center backdrop-blur"
                        style={{ background: "rgba(16,13,8,0.5)", border: "1px solid rgba(181,136,42,0.32)", color: "#C9A45A" }}
                      >
                        <g.Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-6 lg:p-7">
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "var(--font-cormorant, Georgia, serif)",
                          fontSize: "1.6rem", fontWeight: 500, color: "#F7F2EA", lineHeight: 1.15,
                        }}
                      >
                        {g.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(247,242,234,0.68)", fontWeight: 300 }}>
                        {g.blurb}
                      </p>
                      {/* Reveal-on-hover details */}
                      <div className="overflow-hidden">
                        <div
                          className="max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out"
                          style={{ transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)" }}
                        >
                          <div className="pt-3" style={{ borderTop: "1px solid rgba(181,136,42,0.22)" }}>
                            <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                              {g.items.map((it) => (
                                <li
                                  key={it}
                                  className="text-[10px] tracking-wider uppercase"
                                  style={{ color: "rgba(201,164,90,0.85)" }}
                                >
                                  · {it}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/#contact-form"
                        className="inline-flex items-center gap-2 mt-2 text-[10px] tracking-[0.22em] uppercase transition-colors"
                        style={{ color: "#C9A45A" }}
                      >
                        Enquire <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED HIGHLIGHTS ────────────────────────────────────── */}
      <section className="py-28 lg:py-36" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
                Why Vishal Offset
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.2rem,5vw,3.8rem)",
                  fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
                }}
              >
                <em style={{ fontStyle: "italic", color: "#B5882A" }}>End-to-end</em><br />
                custom gifting
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                Design, print, foil, emboss, die-cut, fold, box, ribbon, and dispatch — every
                step happens under one roof, so your gift is consistent from the first run to the last.
              </p>

              <div className="space-y-3">
                {[
                  "Custom-printed wrap, boxes, and ribbon",
                  "Hot foil stamping & embossing in-house",
                  "Variable data for individual personalisation",
                  "Co-branded with your logo & messaging",
                  "Hand-finished and quality checked",
                  "Pan-Gujarat dispatch with tracking",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(181,136,42,0.12)", color: "#B5882A" }}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm" style={{ color: "#5C4A2A", fontWeight: 300 }}>{point}</span>
                  </div>
                ))}
              </div>

              <MagneticButton
                as="a"
                href="/#contact-form"
                className="inline-flex items-center mt-10 px-7 py-3 text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ background: "#1A1209", color: "#F7F2EA" }}
              >
                Start Your Gift Project <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </MagneticButton>
            </motion.div>

            <div className="lg:col-span-7 space-y-10">
              {GIFT_CATEGORIES.map((g, i) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ border: "1px solid rgba(181,136,42,0.28)", color: "#B5882A" }}
                    >
                      <g.Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                        <h3
                          style={{
                            fontFamily: "var(--font-cormorant, Georgia, serif)",
                            fontSize: "1.6rem", fontWeight: 500, color: "#1A1209", lineHeight: 1.1,
                          }}
                        >
                          {g.title}
                        </h3>
                        <span className="text-[10px] tracking-[0.22em] uppercase" style={{ color: "#B5882A" }}>
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "#8B7355", fontWeight: 300 }}>
                        {g.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((it) => (
                          <span
                            key={it}
                            className="text-[10px] tracking-wider uppercase px-2.5 py-1"
                            style={{ background: "rgba(181,136,42,0.08)", color: "#8B7355" }}
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < GIFT_CATEGORIES.length - 1 && (
                    <div className="mt-8" style={{ borderBottom: "1px solid rgba(181,136,42,0.1)" }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#100D08" }}
      >
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "50vw", height: "50vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(181,136,42,0.08) 0%, transparent 70%)",
            top: "-20%", left: "-10%",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2rem,4.5vw,3.4rem)",
              fontWeight: 400, color: "#F7F2EA", lineHeight: 1.15,
            }}
            className="mb-6"
          >
            Have a gifting brief?<br />
            <em style={{ fontStyle: "italic", color: "#C9A45A" }}>Let&rsquo;s talk craft.</em>
          </motion.h2>
          <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: "rgba(247,242,234,0.5)", fontWeight: 300 }}>
            Share your timeline, quantity, and idea. We&rsquo;ll respond with a detailed quote
            and sample-ready proof within one business day.
          </p>
          <MagneticButton
            as="a"
            href="/#contact-form"
            className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
            style={{ background: "#B5882A", color: "#fff" }}
          >
            Request a Quote <ArrowRight className="w-3.5 h-3.5 ml-3" />
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
