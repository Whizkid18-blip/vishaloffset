"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-28" style={{ background: "#F7F2EA" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.3em] uppercase mb-8"
            style={{ color: "#B5882A" }}
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 text-base lg:text-lg leading-relaxed max-w-md mx-auto"
            style={{ color: "#5C4A2A", fontWeight: 300 }}
          >
            Nine offerings. One press. One set of standards.
          </motion.p>
        </div>
      </section>

      {/* ── 2. TYPOGRAPHIC LIST ───────────────────────────────────── */}
      <section className="pb-32 lg:pb-44" style={{ background: "#F7F2EA" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline py-7 lg:py-9 group"
              style={{
                borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(181,136,42,0.18)" : "none",
              }}
            >
              {/* Number */}
              <div
                className="col-span-2 sm:col-span-1 text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(181,136,42,0.5)", paddingTop: "0.5rem" }}
              >
                {s.num}
              </div>

              {/* Title */}
              <h3
                className="col-span-10 sm:col-span-5 transition-colors duration-300 group-hover:text-[#B5882A]"
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#1A1209",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="col-span-12 sm:col-span-6 text-sm leading-relaxed"
                style={{ color: "#5C4A2A", fontWeight: 300 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}

          {/* Single CTA at the bottom */}
          <div className="mt-20 text-center">
            <MagneticButton
              as="a" href="/#enquire"
              className="inline-flex items-center px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ background: "#1A1209", color: "#F7F2EA" }}
            >
              Enquire <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
