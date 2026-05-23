"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Users, Award, Clock3, ArrowRight, Send,
  ChevronRight, ChevronLeft, ExternalLink, Paperclip,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import { SplitInline } from "@/components/SplitText";
import {
  SERVICES, PORTFOLIO, CATEGORIES, TESTIMONIALS, EQUIPMENT, PROCESS, PARTICLES,
} from "@/lib/data";

type FormState = {
  name: string; company: string; email: string;
  phone: string; service: string; quantity: string; description: string;
};
const EMPTY_FORM: FormState = {
  name: "", company: "", email: "",
  phone: "", service: "", quantity: "", description: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

export default function VishalOffsetPage() {
  const [activeCategory, setActiveCategory]     = useState("All");
  const [submitted, setSubmitted]               = useState(false);
  const [form, setForm]                         = useState<FormState>(EMPTY_FORM);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="home" />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#100D08" }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Single soft top glow — gentler than before */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(181,136,42,0.07) 0%, transparent 60%)" }}
        />

        {/* Minimalist particles — only 4 now */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: "#C9A45A" }}
              animate={{ y: [-8, 8, -8], opacity: [0.08, 0.18, 0.08] }}
              transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-28 w-full">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10" style={{ color: "rgba(181,136,42,0.7)" }}>
              <motion.div
                initial={{ width: 0 }} animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ height: 1, background: "#B5882A" }}
              />
              <span className="text-[11px] tracking-[0.3em] uppercase">
                Est. 1998 · Vadodara, Gujarat
              </span>
            </div>

            <h1
              className="mb-8 leading-[0.88]"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(4rem,11vw,9rem)",
                fontWeight: 300,
                color: "#F7F2EA",
                letterSpacing: "-0.02em",
              }}
            >
              <SplitInline text="Printing" stagger={0.12} delay={0.4} />
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A45A", fontWeight: 400 }}>
                <SplitInline text="That Speaks." stagger={0.12} delay={0.7} />
              </em>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mb-12 max-w-xl leading-relaxed"
              style={{ color: "rgba(247,242,234,0.42)", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.01em" }}
            >
              Precision offset printing for brands, businesses, and institutions
              across Gujarat — where craft meets deadline, every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticButton
                onClick={() => scrollToSection("our-work")}
                className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
                style={{ background: "#B5882A", color: "#fff" }}
              >
                View Our Work <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </MagneticButton>
              <MagneticButton
                as="a" href="/services"
                className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium border transition-all duration-300"
                style={{ borderColor: "rgba(247,242,234,0.22)", color: "rgba(247,242,234,0.55)" }}
              >
                Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 1.7 }}
            className="mt-24 flex flex-wrap gap-0"
          >
            {[
              { num: 25,  suffix: "+",  label: "Years of Excellence" },
              { num: 500, suffix: "+",  label: "Clients Served"      },
              { num: 10,  suffix: "M+", label: "Prints Delivered"    },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  borderRight: i < 2 ? "1px solid rgba(181,136,42,0.18)" : "none",
                  paddingRight: i < 2 ? "2.5rem" : 0,
                  paddingLeft:  i > 0 ? "2.5rem" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "clamp(2rem,4vw,3rem)",
                    fontWeight: 300, color: "#C9A45A", lineHeight: 1, letterSpacing: "-0.02em",
                  }}
                >
                  <CountUp to={s.num} suffix={s.suffix} delay={i * 150} />
                </div>
                <div className="mt-1.5 text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(247,242,234,0.25)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(247,242,234,0.2)" }}>Scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(181,136,42,0.5), transparent)" }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── SERVICES TEASER — slim link strip, not the full grid ── */}
      <section className="py-20 lg:py-28" style={{ background: "#F7F2EA" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
              Services
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,5vw,3.4rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.1,
              }}
            >
              Print solutions for <em style={{ fontStyle: "italic", color: "#B5882A" }}>every need</em>.
            </h2>
            <p className="text-sm lg:text-base leading-relaxed max-w-lg mx-auto mb-10" style={{ color: "#8B7355", fontWeight: 300 }}>
              Nine offerings — from business cards and brochures to large-format hoardings,
              specialty foils, and post-print finishing. All under one roof.
            </p>

            {/* Service names in a quiet inline list */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10 max-w-2xl mx-auto">
              {SERVICES.map((s) => (
                <span
                  key={s.title}
                  className="text-[10px] tracking-[0.22em] uppercase"
                  style={{ color: "rgba(139,115,85,0.7)" }}
                >
                  {s.title}
                </span>
              ))}
            </div>

            <MagneticButton
              as="a" href="/services"
              className="inline-flex items-center px-7 py-3 text-[11px] tracking-[0.2em] uppercase font-medium border"
              style={{ borderColor: "#B5882A", color: "#B5882A" }}
            >
              See All Services <ChevronRight className="w-3.5 h-3.5 ml-2" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────────── */}
      <section id="our-work" className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
                Portfolio
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.2rem,5vw,3.8rem)",
                  fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
                }}
              >
                Our Work
              </h2>
            </motion.div>
            <div className="flex flex-wrap items-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-200 border"
                  style={
                    activeCategory === cat
                      ? { background: "#1A1209", color: "#F7F2EA", borderColor: "#1A1209" }
                      : { background: "transparent", color: "#8B7355", borderColor: "rgba(181,136,42,0.25)" }
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#B5882A";
                      (e.currentTarget as HTMLButtonElement).style.color = "#B5882A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(181,136,42,0.25)";
                      (e.currentTarget as HTMLButtonElement).style.color = "#8B7355";
                    }
                  }}
                >
                  {cat}
                  <span className="ml-1.5 text-[10px] opacity-50">
                    {cat === "All" ? PORTFOLIO.length : PORTFOLIO.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28 }}
                >
                  <TiltCard className="block" max={7} scale={1.03}>
                    <div
                      className="aspect-square relative overflow-hidden group cursor-pointer"
                      style={{ background: item.tone }}
                      onClick={scrollToContact}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${item.tone}E8 0%, ${item.tone}B8 100%)`,
                          mixBlendMode: "multiply",
                        }}
                      />
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                      <div className="absolute top-3 left-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
                        <span
                          className="px-2 py-0.5 text-[10px] tracking-wider uppercase"
                          style={{ background: "rgba(0,0,0,0.45)", color: "rgba(247,242,234,0.7)", backdropFilter: "blur(4px)" }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "linear-gradient(to top, rgba(10,7,4,0.97) 0%, rgba(10,7,4,0.82) 50%, rgba(10,7,4,0.28) 100%)" }}
                      >
                        <div className="absolute inset-2 pointer-events-none" style={{ border: "1px solid rgba(181,136,42,0.28)" }} />
                        <div
                          className="relative p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400"
                          style={{ transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)" }}
                        >
                          <div className="text-[9px] tracking-[0.22em] uppercase mb-1.5" style={{ color: "#C9A45A" }}>
                            {item.type}
                          </div>
                          <h3
                            className="mb-2 leading-tight"
                            style={{
                              fontFamily: "var(--font-cormorant, Georgia, serif)",
                              fontSize: "1.05rem", fontWeight: 500, color: "#F7F2EA",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(247,242,234,0.58)" }}>
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 pt-2.5" style={{ borderTop: "1px solid rgba(181,136,42,0.2)" }}>
                            <span className="text-[10px] tracking-wide leading-relaxed" style={{ color: "rgba(201,164,90,0.7)" }}>
                              {item.spec}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
            <span className="text-[11px] tracking-wider" style={{ color: "#B5882A" }}>
              Showing {filtered.length} of {PORTFOLIO.length} projects
            </span>
            <MagneticButton
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium border transition-all"
              style={{ borderColor: "#B5882A", color: "#B5882A" }}
            >
              Enquire About a Project <ChevronRight className="w-3 h-3 ml-1" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ── PROCESS — minimalist ────────────────────────────────────── */}
      <section id="process" className="py-24 lg:py-32" style={{ background: "#100D08" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                How It Works
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 400, color: "#F7F2EA", lineHeight: 1.05,
                }}
              >
                From brief to
                <em style={{ fontStyle: "italic", color: "#C9A45A" }}> delivery</em>
              </h2>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-px mb-2 overflow-hidden" style={{ background: "rgba(181,136,42,0.08)" }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 origin-left"
              style={{ background: "linear-gradient(to right, #B5882A, rgba(201,164,90,0.35))" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group relative p-8 transition-all duration-300"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(181,136,42,0.1)" : "none",
                  borderBottom: "1px solid rgba(181,136,42,0.1)",
                  borderTop: "1px solid rgba(181,136,42,0.1)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "rgba(181,136,42,0.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "transparent")}
              >
                <div
                  className="hidden lg:block absolute -top-[5px] left-8 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#B5882A", boxShadow: "0 0 8px rgba(181,136,42,0.6)" }}
                />
                <div className="text-[11px] tracking-[0.22em] uppercase mb-5 mt-2" style={{ color: "rgba(181,136,42,0.45)" }}>
                  {p.step}
                </div>
                <p.Icon className="w-5 h-5 mb-5" style={{ color: "#B5882A" }} />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.25rem", fontWeight: 500, color: "#F7F2EA",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(247,242,234,0.38)", fontWeight: 300 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
              Client Reviews
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.2rem,5vw,3.6rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              What clients say
            </h2>
          </motion.div>

          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-center px-4 lg:px-16"
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "5rem", lineHeight: 0.6, color: "rgba(181,136,42,0.14)",
                    marginBottom: "1.25rem", userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="text-lg lg:text-xl leading-relaxed mb-7"
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    color: "#1A1209", fontWeight: 400, fontStyle: "italic",
                  }}
                >
                  {TESTIMONIALS[activeTestimonial].text}
                </p>
                <div className="w-6 h-px mx-auto mb-4" style={{ background: "#B5882A" }} />
                <div
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.05rem", color: "#1A1209", fontWeight: 500,
                  }}
                >
                  {TESTIMONIALS[activeTestimonial].name}
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: "#B5882A" }}>
                  {TESTIMONIALS[activeTestimonial].company}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setActiveTestimonial((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-8 h-8 flex items-center justify-center border transition-all duration-200"
              style={{ borderColor: "rgba(181,136,42,0.28)", color: "rgba(181,136,42,0.45)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#B5882A";
                (e.currentTarget as HTMLButtonElement).style.color = "#B5882A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(181,136,42,0.28)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(181,136,42,0.45)";
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? 20 : 5,
                    height: 5,
                    background: i === activeTestimonial ? "#B5882A" : "rgba(181,136,42,0.22)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length)}
              className="w-8 h-8 flex items-center justify-center border transition-all duration-200"
              style={{ borderColor: "rgba(181,136,42,0.28)", color: "rgba(181,136,42,0.45)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#B5882A";
                (e.currentTarget as HTMLButtonElement).style.color = "#B5882A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(181,136,42,0.28)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(181,136,42,0.45)";
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors"
              style={{ color: "rgba(181,136,42,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B5882A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(181,136,42,0.5)")}
            >
              Read on Google <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} className="lg:col-span-5"
            >
              <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
                About Us
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
                }}
              >
                A legacy of<br />
                <em style={{ fontStyle: "italic", color: "#B5882A" }}>craft & precision</em>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                Vishal Offset is a technically sound printing house based in Vadodara,
                Gujarat. Founded in 1998, the press has spent over 25 years building a
                reputation for measured craft, discipline, and unwavering output quality.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#5C4A2A", fontWeight: 300 }}>
                Now in its third generation, the press is overseen personally by
                Mr. Vishal Nimbalkar, with the discipline that only a hands-on owner brings.
              </p>

              <div className="space-y-6">
                {[
                  { v: "25+", l: "Years Active",       pct: 100 },
                  { v: "3",   l: "Generations of Craft", pct: 85  },
                  { v: "500+",l: "Clients",             pct: 90  },
                ].map((s, i) => (
                  <div key={s.l}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#8B7355" }}>{s.l}</span>
                      <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.4rem", fontWeight: 300, color: "#B5882A" }}>
                        <CountUp to={parseInt(s.v)} suffix={s.v.replace(/\d/g, "")} delay={i * 200} />
                      </span>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(181,136,42,0.12)" }}>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.1, delay: i * 0.15, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full origin-left"
                        style={{ width: `${s.pct}%`, background: "linear-gradient(to right, #B5882A, rgba(201,164,90,0.5))" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="lg:col-span-7 space-y-0"
            >
              <div className="mb-10 relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1400&q=80&auto=format&fit=crop"
                  alt="Vishal Offset press floor"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(16,13,8,0.55) 0%, rgba(16,13,8,0.25) 100%)" }}
                />
                <div className="absolute inset-3 pointer-events-none" style={{ border: "1px solid rgba(181,136,42,0.3)" }} />
              </div>

              {[
                { Icon: CheckCircle, title: "Consistent Output Quality", desc: "Every job is personally checked at prepress, press, and finishing before it leaves the facility." },
                { Icon: Award,       title: "Founder-Run Press",         desc: "Twenty-five years of hands-on offset craft — every job receives the founder's personal attention." },
                { Icon: Users,       title: "End-to-End Service",        desc: "Design, proofing, production, and delivery — one press, one roof, one point of accountability." },
                { Icon: Clock3,      title: "Deadline Integrity",        desc: "Your deadline is treated as ours. Express turnarounds available for time-critical requirements." },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  viewport={{ once: true }}
                  className="flex gap-6 py-6 group transition-colors"
                  style={{ borderBottom: "1px solid rgba(181,136,42,0.1)" }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:border-[#B5882A]"
                    style={{ border: "1px solid rgba(181,136,42,0.18)", color: "#B5882A" }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div
                      className="mb-1.5"
                      style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", fontWeight: 500, color: "#1A1209" }}
                    >
                      {title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#8B7355", fontWeight: 300 }}>
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT MARQUEE — single row, quieter ─────────────────── */}
      <section
        className="overflow-hidden"
        style={{ background: "#1A1209", borderTop: "1px solid rgba(181,136,42,0.12)", borderBottom: "1px solid rgba(181,136,42,0.12)" }}
      >
        <div className="py-4 flex gap-0 anim-marquee whitespace-nowrap">
          {[...EQUIPMENT, ...EQUIPMENT].map((eq, i) => (
            <span
              key={i}
              className="shrink-0 text-[10px] tracking-[0.22em] uppercase"
              style={{ color: "rgba(181,136,42,0.4)", padding: "0 1.75rem" }}
            >
              {eq}
              <span style={{ color: "rgba(181,136,42,0.18)", marginLeft: "1.75rem" }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── QUOTE FORM ─────────────────────────────────────────────── */}
      <section id="contact-form" className="py-24 lg:py-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#B5882A" }}>
              Get in Touch
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.2rem,5vw,3.6rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              Request a Quote
            </h2>
            <p className="text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "#8B7355", fontWeight: 300 }}>
              Describe your requirement and we will respond with a detailed
              quotation within one business day.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
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
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 400, color: "#1A1209" }}
              >
                Enquiry Received
              </h3>
              <p className="text-sm mb-8" style={{ color: "#8B7355", fontWeight: 300 }}>
                We will respond within one business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                className="text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 border transition-all"
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
                Submit Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="p-10 lg:p-14"
              style={{ background: "#FFFFFF", border: "1px solid rgba(181,136,42,0.16)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {(
                  [
                    { name: "name",    label: "Full Name",      placeholder: "Your name",         type: "text",  required: true  },
                    { name: "company", label: "Company",        placeholder: "Your company",      type: "text",  required: false },
                    { name: "email",   label: "Email",          placeholder: "email@company.com", type: "email", required: true  },
                    { name: "phone",   label: "Phone",          placeholder: "+91 XXXXX XXXXX",   type: "tel",   required: true  },
                  ] as const
                ).map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "#8B7355" }}>
                      {f.label}{f.required && <span style={{ color: "#B5882A" }}> *</span>}
                    </label>
                    <input
                      type={f.type} required={f.required} placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                      className="w-full py-2.5 text-sm outline-none transition-all duration-200 bg-transparent"
                      style={{ borderBottom: "1px solid rgba(181,136,42,0.2)", color: "#1A1209", fontWeight: 300 }}
                      onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "#B5882A")}
                      onBlur={(e)  => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "rgba(181,136,42,0.2)")}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "#8B7355" }}>
                    Service Required <span style={{ color: "#B5882A" }}>*</span>
                  </label>
                  <select
                    required value={form.service}
                    onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                    className="w-full py-2.5 text-sm outline-none transition-all duration-200 bg-transparent"
                    style={{ borderBottom: "1px solid rgba(181,136,42,0.2)", color: "#1A1209", fontWeight: 300 }}
                    onFocus={(e) => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = "#B5882A")}
                    onBlur={(e)  => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = "rgba(181,136,42,0.2)")}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    <option value="Sajavvat — Envelopes / Decor / Gifting">Sajavvat — Envelopes / Decor / Gifting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "#8B7355" }}>
                    Estimated Quantity
                  </label>
                  <input
                    type="text" placeholder="e.g. 500 pcs, 10,000 copies"
                    value={form.quantity}
                    onChange={(e) => setForm((p) => ({ ...p, quantity: e.target.value }))}
                    className="w-full py-2.5 text-sm outline-none transition-all duration-200 bg-transparent"
                    style={{ borderBottom: "1px solid rgba(181,136,42,0.2)", color: "#1A1209", fontWeight: 300 }}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "#B5882A")}
                    onBlur={(e)  => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = "rgba(181,136,42,0.2)")}
                  />
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "#8B7355" }}>
                  Job Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirement — size, paper, finish, deadline, etc."
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  className="w-full py-2.5 text-sm outline-none transition-all duration-200 bg-transparent resize-none"
                  style={{ borderBottom: "1px solid rgba(181,136,42,0.2)", color: "#1A1209", fontWeight: 300 }}
                  onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = "#B5882A")}
                  onBlur={(e)  => ((e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = "rgba(181,136,42,0.2)")}
                />
              </div>

              <div
                className="flex items-center justify-between gap-4 flex-wrap pt-6"
                style={{ borderTop: "1px solid rgba(181,136,42,0.1)" }}
              >
                <div className="flex items-center gap-2 text-[11px] tracking-wide" style={{ color: "#8B7355" }}>
                  <Paperclip className="w-3 h-3" />
                  Attach artwork via email after submission
                </div>
                <MagneticButton
                  type="submit"
                  className="px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300"
                  style={{ background: "#1A1209", color: "#F7F2EA" }}
                >
                  Send Enquiry <Send className="w-3.5 h-3.5 ml-3" />
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
