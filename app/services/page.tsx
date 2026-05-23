"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { SplitInline } from "@/components/SplitText";
import { SERVICES, PARTICLES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
        style={{ background: "#100D08" }}
      >
        <div
          className="absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(181,136,42,0.09) 0%, transparent 65%)" }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: "#C9A45A" }}
              animate={{ y: [-8, 8, -8], opacity: [0.07, 0.18, 0.07] }}
              transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase mb-8"
            style={{ color: "rgba(181,136,42,0.7)" }}
          >
            What We Do
          </motion.div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(3rem,7.5vw,6rem)",
              fontWeight: 300,
              color: "#F7F2EA",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            <SplitInline text="Services" stagger={0.12} delay={0.2} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-base lg:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(247,242,234,0.45)", fontWeight: 300 }}
          >
            Nine offerings, one press, one set of standards — from a single business card to a
            full-scale campaign.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES — minimal list/grid ──────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ background: "#F7F2EA" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                className="group"
              >
                <div
                  className="mb-6 w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:border-[#B5882A]"
                  style={{ border: "1px solid rgba(181,136,42,0.22)", color: "#B5882A" }}
                >
                  <s.Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(181,136,42,0.55)" }}>
                  {s.num}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.55rem", fontWeight: 500, color: "#1A1209", lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B7355", fontWeight: 300 }}>
                  {s.desc}
                </p>
                <a
                  href="/#contact-form"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors"
                  style={{ color: "#B5882A" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9A7230")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
                >
                  Enquire <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#100D08" }}>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(1.9rem,4vw,3rem)",
              fontWeight: 400, color: "#F7F2EA", lineHeight: 1.2,
            }}
            className="mb-6"
          >
            Got a brief in mind?<br />
            <em style={{ fontStyle: "italic", color: "#C9A45A" }}>Let&rsquo;s price it out.</em>
          </motion.h2>
          <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: "rgba(247,242,234,0.45)", fontWeight: 300 }}>
            A detailed quote, ready in one business day.
          </p>
          <MagneticButton
            as="a" href="/#contact-form"
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
