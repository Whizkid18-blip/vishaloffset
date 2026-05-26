"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import ImageReveal from "@/components/ImageReveal";
import { TEAM } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function LegacyPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
        style={{ background: "#100D08" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 45% at 30% 25%, rgba(181,136,42,0.08) 0%, transparent 60%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image — 5/12 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80&auto=format&fit=crop"
              alt="The press"
              aspect="4/5"
              tint="#100D08"
              tintOpacity={0.22}
              parallax={0.12}
            />
          </motion.div>

          {/* Copy — 7/12 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-8" style={{ color: "rgba(181,136,42,0.7)" }}>
              <motion.div
                initial={{ width: 0 }} animate={{ width: 28 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ height: 1, background: "#B5882A" }}
              />
              <span className="text-[10px] tracking-[0.3em] uppercase">
                Our Legacy
              </span>
            </div>

            <h1
              className="mb-10 leading-[0.95]"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(3rem, 7vw, 5.6rem)",
                fontWeight: 300,
                color: "#F7F2EA",
                letterSpacing: "-0.02em",
              }}
            >
              Three generations<br />
              <em style={{ fontStyle: "italic", color: "#C9A45A", fontWeight: 400 }}>
                at the press.
              </em>
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(247,242,234,0.55)", fontWeight: 300 }}
            >
              Co-founded in 1998 by Mr. Vishal Nimbalkar and his father Jaisingh.
              Now joined by the third generation — Durva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FAMILY STORY — J·V·D drop caps + 3 paragraphs ─────── */}
      <section className="py-28 lg:py-36" style={{ background: "#F7F2EA" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {/* J · V · D initials row */}
            <div className="flex items-center justify-center gap-6 mb-14">
              {[
                { letter: "J", name: "Jaisingh" },
                { letter: "V", name: "Vishal"   },
                { letter: "D", name: "Durva"    },
              ].map((g, i) => (
                <div key={g.letter} className="flex items-center gap-6">
                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontStyle: "italic",
                        fontSize: "3.2rem",
                        fontWeight: 400,
                        color: "#B5882A",
                        lineHeight: 1,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {g.letter}
                    </div>
                    <div className="mt-2 text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(181,136,42,0.65)" }}>
                      {g.name}
                    </div>
                  </div>
                  {i < 2 && (
                    <span aria-hidden style={{ width: 14, height: 1, background: "rgba(181,136,42,0.4)" }} />
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-7">
              <p
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "1.45rem",
                  lineHeight: 1.5,
                  color: "#1A1209",
                  fontWeight: 400,
                }}
              >
                In 1998, a father and son set up a press together on Ajwa Road.{" "}
                <strong style={{ fontWeight: 500 }}>
                  <span style={{ color: "#B5882A", fontWeight: 600 }}>J</span>aisingh Nimbalkar
                </strong>
                {" "}and his son{" "}
                <strong style={{ fontWeight: 500 }}>
                  Mr.&nbsp;<span style={{ color: "#B5882A", fontWeight: 600 }}>V</span>ishal Nimbalkar
                </strong>
                {" "}co-founded Vishal Offset — the first generation and the second, side by side at the same machine.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#5C4A2A", fontWeight: 300 }}>
                Twenty-five years on, Vishal still personally inspects every premium run,
                signs off every proof, and walks the press at the start and end of every shift —
                carrying forward the discipline he and his father built into the press from day one.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#5C4A2A", fontWeight: 300 }}>
                Today, the third generation has joined.{" "}
                <strong style={{ fontWeight: 500, color: "#1A1209" }}>
                  <span style={{ color: "#B5882A", fontWeight: 600 }}>D</span>urva Nimbalkar
                </strong>
                {" "}is carrying the family craft forward — and leading{" "}
                <em style={{ color: "#B5882A", fontStyle: "italic" }}>Sajavvat</em>, the creative wing
                built around envelopes, decor, and celebratory gifting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. THREE LINEAGE CARDS ────────────────────────────────── */}
      <section className="py-28 lg:py-36" style={{ background: "#FAF7F1" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-[10px] tracking-[0.28em] uppercase text-center mb-12"
            style={{ color: "#B5882A" }}
          >
            The Family
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid rgba(181,136,42,0.16)" }}
              >
                {/* Monogram panel */}
                <div
                  className="relative flex items-center justify-center py-14"
                  style={{
                    background: "linear-gradient(135deg, rgba(181,136,42,0.06) 0%, rgba(181,136,42,0.01) 100%)",
                    borderBottom: "1px solid rgba(181,136,42,0.1)",
                  }}
                >
                  {/* corner ticks */}
                  <span aria-hidden className="absolute top-3 left-3 w-4 h-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute top-3 left-3 h-4 w-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute top-3 right-3 w-4 h-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute top-3 right-3 h-4 w-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute bottom-3 left-3 w-4 h-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute bottom-3 left-3 h-4 w-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute bottom-3 right-3 w-4 h-px" style={{ background: "rgba(181,136,42,0.45)" }} />
                  <span aria-hidden className="absolute bottom-3 right-3 h-4 w-px" style={{ background: "rgba(181,136,42,0.45)" }} />

                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "4.5rem",
                        fontWeight: 300,
                        color: "#B5882A",
                        lineHeight: 1,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {m.initials}
                    </div>
                    <div className="w-7 h-px mx-auto my-3" style={{ background: "rgba(181,136,42,0.35)" }} />
                    <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(181,136,42,0.65)" }}>
                      {m.generation}
                    </div>
                  </div>
                </div>

                {/* Bio panel */}
                <div className="p-7">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "#1A1209",
                      lineHeight: 1.15,
                    }}
                  >
                    {m.name}
                  </h3>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-4" style={{ color: "#B5882A" }}>
                    {m.role}
                  </div>
                  <div className="w-5 h-px mb-4" style={{ background: "rgba(181,136,42,0.3)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#8B7355", fontWeight: 300 }}>
                    {m.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Single quiet CTA */}
          <div className="mt-16 text-center">
            <MagneticButton
              as="a" href="/#enquire"
              className="inline-flex items-center px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium border"
              style={{ borderColor: "#B5882A", color: "#B5882A" }}
            >
              Start a Project <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
