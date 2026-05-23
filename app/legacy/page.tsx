"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Shield, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import ImageReveal from "@/components/ImageReveal";
import CountUp from "@/components/CountUp";
import { SplitInline } from "@/components/SplitText";
import { TEAM, TIMELINE, VALUES, PARTICLES } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const VALUE_ICONS = [Award, Heart, Shield, Handshake];

export default function LegacyPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}>
      <Navbar variant="subpage" />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
        style={{ background: "#100D08" }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 45% at 30% 20%, rgba(181,136,42,0.1) 0%, transparent 60%)" }}
        />
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <TiltCard max={5} scale={1.015}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80&auto=format&fit=crop"
                alt="Vishal Offset press floor heritage"
                aspect="4/5"
                tint="#100D08"
                tintOpacity={0.25}
                parallax={0.15}
              />
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-8" style={{ color: "rgba(181,136,42,0.7)" }}>
              <motion.div
                initial={{ width: 0 }} animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ height: 1, background: "#B5882A" }}
              />
              <span className="text-[11px] tracking-[0.3em] uppercase">
                Our Legacy · Three Generations
              </span>
            </div>
            <h1
              className="mb-8 leading-[0.95]"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(3rem,7vw,6rem)",
                fontWeight: 300,
                color: "#F7F2EA",
                letterSpacing: "-0.02em",
              }}
            >
              <SplitInline text="Three generations" stagger={0.1} delay={0.2} />
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A45A", fontWeight: 400 }}>
                <SplitInline text="at the press." stagger={0.12} delay={0.55} />
              </em>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(247,242,234,0.5)", fontWeight: 300 }}
            >
              Co-founded in 1998 by Mr. Vishal Nimbalkar and his father Jaisingh Nimbalkar — and
              now joined by the third generation. The same press, the same standards, three
              generations of the same family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-10"
            >
              {[
                { num: 3,   suffix: "",   label: "Generations" },
                { num: 25,  suffix: "+",  label: "Years on Ajwa Road" },
                { num: 500, suffix: "+",  label: "Long-Term Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontSize: "2.4rem", fontWeight: 300, color: "#C9A45A", lineHeight: 1,
                    }}
                  >
                    <CountUp to={s.num} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(247,242,234,0.3)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FAMILY STORY ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#F7F2EA" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              The Family Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              The press the <em style={{ fontStyle: "italic", color: "#B5882A" }}>Nimbalkars built</em>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {/* J · V · D initials row */}
            <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
              {[
                { letter: "J", name: "Jaisingh" },
                { letter: "V", name: "Vishal"  },
                { letter: "D", name: "Durva"   },
              ].map((g, i) => (
                <div key={g.letter} className="flex items-center gap-6">
                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "3.6rem",
                        lineHeight: 1,
                        fontWeight: 400,
                        color: "#B5882A",
                        letterSpacing: "0.02em",
                        fontStyle: "italic",
                      }}
                    >
                      {g.letter}
                    </div>
                    <div className="mt-2 text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(181,136,42,0.65)" }}>
                      {g.name}
                    </div>
                  </div>
                  {i < 2 && (
                    <span className="w-8 h-px" style={{ background: "rgba(181,136,42,0.4)" }} />
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <p style={{ fontSize: "1.35rem", lineHeight: 1.5, color: "#1A1209", fontWeight: 400, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>
                In 1998, a father and son set up a press together on Ajwa Road.{" "}
                <strong style={{ fontWeight: 500 }}>
                  <span style={{ color: "#B5882A", fontWeight: 600 }}>J</span>aisingh Nimbalkar
                </strong>
                {" "}and his son{" "}
                <strong style={{ fontWeight: 500 }}>
                  Mr.&nbsp;<span style={{ color: "#B5882A", fontWeight: 600 }}>V</span>ishal Nimbalkar
                </strong>
                {" "}co-founded Vishal Offset — the first generation and the second, side by side
                at the same machine.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#5C4A2A", fontWeight: 300 }}>
                Twenty-five years on, Vishal still personally inspects every premium run, signs off
                every proof, and walks the press at the start and end of every shift — carrying
                forward the discipline he and his father built into the press from day one.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#5C4A2A", fontWeight: 300 }}>
                Today, the third generation is joining the press.{" "}
                <strong style={{ fontWeight: 500, color: "#1A1209" }}>
                  <span style={{ color: "#B5882A", fontWeight: 600 }}>D</span>urva Nimbalkar
                </strong>
                {" "}is carrying the family craft forward — and leading{" "}
                <em style={{ color: "#B5882A", fontStyle: "italic" }}>Sajavvat</em>, the creative
                wing built around custom envelopes, decor, and celebratory gifting.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#5C4A2A", fontWeight: 300 }}>
                We&rsquo;ve printed for Vadodara&rsquo;s biggest conglomerates and its smallest
                start-ups. The work that leaves our door is the same in either case — because the
                press doesn&rsquo;t know who you are. It only knows what you asked for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#100D08" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              Milestones
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                fontWeight: 400, color: "#F7F2EA", lineHeight: 1.05,
              }}
            >
              The press <em style={{ fontStyle: "italic", color: "#C9A45A" }}>through time</em>
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-[12px] lg:left-1/2 top-0 bottom-0 w-px origin-top -translate-x-px"
              style={{ background: "linear-gradient(to bottom, rgba(181,136,42,0.6), rgba(181,136,42,0.1))" }}
            />

            <div className="space-y-12 lg:space-y-20">
              {TIMELINE.map((t, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={t.year + t.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16"
                  >
                    <div
                      className="absolute left-0 lg:left-1/2 top-2 w-[26px] h-[26px] rounded-full -translate-x-1/2 flex items-center justify-center"
                      style={{ background: "#100D08", border: "1px solid rgba(181,136,42,0.4)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#B5882A", boxShadow: "0 0 12px rgba(181,136,42,0.7)" }}
                      />
                    </div>

                    <div className={`pl-12 lg:pl-0 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}`}>
                      <div
                        style={{
                          fontFamily: "var(--font-cormorant, Georgia, serif)",
                          fontSize: "2.2rem", fontWeight: 300, color: "#C9A45A", lineHeight: 1,
                        }}
                      >
                        {t.year}
                      </div>
                      <h3
                        className="mt-2 mb-3"
                        style={{
                          fontFamily: "var(--font-cormorant, Georgia, serif)",
                          fontSize: "1.35rem", fontWeight: 500, color: "#F7F2EA",
                        }}
                      >
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(247,242,234,0.5)", fontWeight: 300, ...(isLeft ? { marginLeft: "auto" } : {}) }}>
                        {t.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 GENERATIONS — lineage cards ──────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              The Family
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              Three generations,<br />
              <em style={{ fontStyle: "italic", color: "#B5882A" }}>one press</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              >
                <TiltCard max={6} scale={1.02}>
                  <div
                    className="relative h-full overflow-hidden"
                    style={{ background: "#FFFFFF", border: "1px solid rgba(181,136,42,0.18)" }}
                  >
                    {/* Top — gold gradient panel with big monogram */}
                    <div
                      className="relative flex items-center justify-center py-12"
                      style={{
                        background: "linear-gradient(135deg, rgba(181,136,42,0.07) 0%, rgba(181,136,42,0.015) 100%)",
                        borderBottom: "1px solid rgba(181,136,42,0.12)",
                      }}
                    >
                      <span className="absolute top-3 left-3 w-5 h-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute top-3 left-3 h-5 w-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute top-3 right-3 w-5 h-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute top-3 right-3 h-5 w-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute bottom-3 left-3 w-5 h-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute bottom-3 left-3 h-5 w-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute bottom-3 right-3 w-5 h-px" style={{ background: "rgba(181,136,42,0.5)" }} />
                      <span className="absolute bottom-3 right-3 h-5 w-px" style={{ background: "rgba(181,136,42,0.5)" }} />

                      <div className="text-center">
                        <div
                          style={{
                            fontFamily: "var(--font-cormorant, Georgia, serif)",
                            fontSize: "5rem", fontWeight: 300, color: "#B5882A", lineHeight: 1,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {m.initials}
                        </div>
                        <div className="w-8 h-px mx-auto my-3" style={{ background: "rgba(181,136,42,0.35)" }} />
                        <div className="text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(181,136,42,0.65)" }}>
                          {m.generation}
                        </div>
                      </div>
                    </div>

                    {/* Bottom — name + role + bio */}
                    <div className="p-7 lg:p-8">
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "var(--font-cormorant, Georgia, serif)",
                          fontSize: "1.5rem", fontWeight: 500, color: "#1A1209", lineHeight: 1.15,
                        }}
                      >
                        {m.name}
                      </h3>
                      <div className="text-[10px] tracking-[0.22em] uppercase mb-4" style={{ color: "#B5882A" }}>
                        {m.role}
                      </div>
                      <div className="w-6 h-px mb-4" style={{ background: "rgba(181,136,42,0.3)" }} />
                      <p className="text-sm leading-relaxed" style={{ color: "#8B7355", fontWeight: 300 }}>
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#100D08" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              Our Values
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                fontWeight: 400, color: "#F7F2EA", lineHeight: 1.05,
              }}
            >
              Four things that<br />
              <em style={{ fontStyle: "italic", color: "#C9A45A" }}>never change</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i] || Award;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group p-8 transition-colors duration-300"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(181,136,42,0.1)" : "none",
                    borderTop: "1px solid rgba(181,136,42,0.1)",
                    borderBottom: "1px solid rgba(181,136,42,0.1)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "rgba(181,136,42,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "transparent")}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-[#B5882A]"
                    style={{ border: "1px solid rgba(181,136,42,0.22)", color: "#B5882A" }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(181,136,42,0.5)" }}>
                    0{i + 1}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontSize: "1.2rem", fontWeight: 500, color: "#F7F2EA",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(247,242,234,0.42)", fontWeight: 300 }}>
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FACILITY GALLERY ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: "#FAF7F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase mb-3" style={{ color: "#B5882A" }}>
              The Press Floor
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                fontWeight: 400, color: "#1A1209", lineHeight: 1.05,
              }}
            >
              Inside <em style={{ fontStyle: "italic", color: "#B5882A" }}>Vishal Offset</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7">
              <ImageReveal src="https://images.unsplash.com/photo-1601933470928-c5d9ad7e63d8?w=1400&q=80&auto=format&fit=crop" alt="Press floor" aspect="16/10" parallax={0.12} />
            </div>
            <div className="md:col-span-5">
              <ImageReveal src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=900&q=80&auto=format&fit=crop"  alt="Print close-up" aspect="16/10" parallax={0.1} />
            </div>
            <div className="md:col-span-5">
              <ImageReveal src="https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80&auto=format&fit=crop"  alt="Finished books" aspect="4/3" parallax={0.12} />
            </div>
            <div className="md:col-span-7">
              <ImageReveal src="https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1400&q=80&auto=format&fit=crop" alt="Finishing" aspect="4/3" parallax={0.1} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#100D08" }}
      >
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
            Come see the<br />
            <em style={{ fontStyle: "italic", color: "#C9A45A" }}>press in action.</em>
          </motion.h2>
          <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: "rgba(247,242,234,0.5)", fontWeight: 300 }}>
            Visit our facility on Ajwa Road, Vadodara. Walk the floor, meet the founder, and see
            what twenty-five years of craft looks like.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              as="a" href="/#visit"
              className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium"
              style={{ background: "#B5882A", color: "#fff" }}
            >
              See Our Location <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </MagneticButton>
            <MagneticButton
              as="a" href="/#contact-form"
              className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium border"
              style={{ borderColor: "rgba(247,242,234,0.22)", color: "rgba(247,242,234,0.7)" }}
            >
              Start a Project
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
