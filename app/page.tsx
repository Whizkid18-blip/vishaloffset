"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoilHero from "@/components/FoilHero";
import MagneticButton from "@/components/MagneticButton";
import { PORTFOLIO } from "@/lib/data";

type FormState = {
  name: string; email: string; phone: string; what: string; when: string;
};
const EMPTY_FORM: FormState = { name: "", email: "", phone: "", what: "", when: "" };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function HomePage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="home" />

      {/* ── 1. FOIL HERO ──────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#100D08" }}
      >
        {/* Quiet noise */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Soft single-source glow above the card */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(181,136,42,0.08) 0%, transparent 60%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-14"
            style={{ color: "rgba(181,136,42,0.7)" }}
          >
            <span style={{ width: 20, height: 1, background: "#B5882A" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase">
              Est. 1998 · Vadodara, Gujarat
            </span>
            <span style={{ width: 20, height: 1, background: "#B5882A" }} />
          </motion.div>

          {/* THE CARD */}
          <FoilHero />

          {/* One italic line — the H1 in spirit */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
            className="mt-14 mb-10"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 400,
              color: "rgba(247,242,234,0.78)",
              letterSpacing: "0.005em",
            }}
          >
            Prints worth keeping.
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              as="a" href="#work"
              className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ background: "#B5882A", color: "#fff" }}
            >
              See Our Work <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </MagneticButton>
            <MagneticButton
              as="a" href="/sajavvat"
              className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium border"
              style={{ borderColor: "rgba(247,242,234,0.22)", color: "rgba(247,242,234,0.7)" }}
            >
              Sajavvat
            </MagneticButton>
          </motion.div>
        </div>

        {/* Subtle scroll cue */}
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}
        >
          <span className="text-[9px] tracking-[0.32em] uppercase" style={{ color: "rgba(247,242,234,0.18)" }}>Scroll</span>
          <motion.div
            className="w-px h-9"
            style={{ background: "linear-gradient(to bottom, rgba(181,136,42,0.45), transparent)" }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── 2. PORTFOLIO ─────────────────────────────────────────── */}
      <section id="work" className="py-28 lg:py-36" style={{ background: "#F7F2EA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Title column — 5/12 */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <p className="text-[10px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                Selected Work
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  fontWeight: 400,
                  color: "#1A1209",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Six pieces<br />
                <em style={{ fontStyle: "italic", color: "#B5882A" }}>worth showing.</em>
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                Foil, fold, and finish, brought together under one roof — for clients who notice the difference.
              </p>
              <MagneticButton
                as="a" href="#enquire"
                className="inline-flex items-center px-6 py-2.5 text-[11px] tracking-[0.22em] uppercase font-medium border"
                style={{ borderColor: "#B5882A", color: "#B5882A" }}
              >
                Enquire <ChevronRight className="w-3 h-3 ml-2" />
              </MagneticButton>
            </motion.div>

            {/* Grid column — 7/12, 3×2 */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PORTFOLIO.map((item, i) => (
                <motion.a
                  key={item.id}
                  href="#enquire"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: "1 / 1", background: item.tone }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                  />
                  {/* Tone tint */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${item.tone}55 0%, ${item.tone}B5 75%, ${item.tone}E5 100%)`,
                      mixBlendMode: "multiply",
                    }}
                  />
                  {/* Always-visible caption at the bottom — quiet */}
                  <div className="absolute bottom-0 inset-x-0 p-4 transition-all duration-500 group-hover:p-5">
                    <h3
                      className="leading-tight transition-colors"
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#F7F2EA",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[10px] tracking-wide mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ color: "rgba(201,164,90,0.85)" }}
                    >
                      {item.spec}
                    </p>
                  </div>
                  {/* Inner gold frame — appears on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ border: "1px solid rgba(181,136,42,0.32)" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THREE-GENERATION STRIP ────────────────────────────── */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "#100D08" }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(181,136,42,0.05) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* J · V · D initials */}
            <div className="flex items-center justify-center gap-5 mb-10">
              {["J", "V", "D"].map((g, i) => (
                <span key={g} className="flex items-center gap-5">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontStyle: "italic",
                      fontSize: "2.2rem",
                      fontWeight: 400,
                      color: "#C9A45A",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {g}
                  </span>
                  {i < 2 && (
                    <span aria-hidden style={{ width: 14, height: 1, background: "rgba(181,136,42,0.4)" }} />
                  )}
                </span>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                lineHeight: 1.55,
                color: "#F7F2EA",
                fontWeight: 400,
              }}
              className="mb-3"
            >
              Co-founded in 1998 by{" "}
              <em style={{ color: "#C9A45A", fontStyle: "italic" }}>Mr. Vishal Nimbalkar</em>
              {" "}and his father{" "}
              <em style={{ color: "#C9A45A", fontStyle: "italic" }}>Jaisingh Nimbalkar</em>.
              Now joined by the third generation, <em style={{ color: "#C9A45A", fontStyle: "italic" }}>Durva</em>.
            </p>

            <p className="text-sm leading-relaxed max-w-md mx-auto mb-10" style={{ color: "rgba(247,242,234,0.45)", fontWeight: 300 }}>
              Three generations. One press. Twenty-five years of standing behind every job.
            </p>

            <a
              href="/legacy"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase transition-colors"
              style={{ color: "#B5882A" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A45A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
            >
              Read the story <ChevronRight className="w-3 h-3" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 4. QUOTE FORM (slim) ──────────────────────────────────── */}
      <section id="enquire" className="py-28 lg:py-36" style={{ background: "#F7F2EA" }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              Start an Enquiry
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 400,
                color: "#1A1209",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Tell us about the<br />
              <em style={{ fontStyle: "italic", color: "#B5882A" }}>job.</em>
            </h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
              style={{ border: "1px solid rgba(181,136,42,0.2)" }}
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "3rem", color: "#B5882A", lineHeight: 1, marginBottom: "1rem" }}
              >
                ✓
              </motion.div>
              <h3
                className="mb-2"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.7rem", fontWeight: 400, color: "#1A1209" }}
              >
                Received.
              </h3>
              <p className="text-sm mb-6" style={{ color: "#8B7355", fontWeight: 300 }}>
                We&rsquo;ll respond within one business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                className="text-[10px] tracking-[0.25em] uppercase px-5 py-2 border transition-all"
                style={{ borderColor: "rgba(181,136,42,0.3)", color: "#B5882A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#B5882A";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#B5882A";
                }}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-7"
            >
              {([
                { name: "name",  label: "Name",     type: "text",  placeholder: "Your name" },
                { name: "email", label: "Email",    type: "email", placeholder: "you@company.com" },
                { name: "phone", label: "Phone",    type: "tel",   placeholder: "+91 XXXXX XXXXX" },
                { name: "what",  label: "What",     type: "text",  placeholder: "e.g. 500 foil business cards" },
                { name: "when",  label: "When",     type: "text",  placeholder: "e.g. by 15 December" },
              ] as const).map((f) => (
                <div key={f.name}>
                  <label className="block text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: "#8B7355" }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.name === "name" || f.name === "email" || f.name === "phone" || f.name === "what"}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                    className="w-full py-2.5 text-base outline-none transition-all duration-200 bg-transparent"
                    style={{
                      borderBottom: "1px solid rgba(181,136,42,0.2)",
                      color: "#1A1209",
                      fontWeight: 300,
                      fontFamily: "var(--font-inter)",
                    }}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "#B5882A")}
                    onBlur={(e)  => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "rgba(181,136,42,0.2)")}
                  />
                </div>
              ))}

              <div className="pt-6 flex items-center justify-between flex-wrap gap-4">
                <p className="text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(139,115,85,0.7)" }}>
                  Reply within 1 business day
                </p>
                <MagneticButton
                  type="submit"
                  className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-medium"
                  style={{ background: "#1A1209", color: "#F7F2EA" }}
                >
                  Send <Send className="w-3.5 h-3.5 ml-3" />
                </MagneticButton>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
