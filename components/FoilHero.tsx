"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * FoilHero — the centerpiece animation.
 *
 * Black 400gsm card, centered. On mount, three gold foil impressions land
 * in sequence (V → · → N) with a weighted press-thump feel — scale + blur
 * reveal plus a soft radial "press ring" pulse per impression. After all
 * three land, a slow gold sheen sweeps across the monogram once.
 *
 * Cursor-reactive: the card subtly tilts toward the cursor with heavy
 * damping (max 4°). Respects prefers-reduced-motion and touch devices.
 */
export default function FoilHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  // Cursor-reactive tilt (no React state — direct DOM via rAF)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reducedQ = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedQ) setReduced(true);
    if (isTouch || reducedQ) return;

    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let running = false;

    const tick = () => {
      const dx = tx - cx;
      const dy = ty - cy;
      if (Math.abs(dx) < 0.02 && Math.abs(dy) < 0.02) {
        cx = tx; cy = ty;
        card.style.transform = `perspective(1400px) rotateX(${-cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`;
        running = false;
        return;
      }
      cx += dx * 0.08;
      cy += dy * 0.08;
      card.style.transform = `perspective(1400px) rotateX(${-cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;
      // Max 4° tilt
      tx = (px - 0.5) * 2 * 4;
      ty = (py - 0.5) * 2 * 4;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      tx = 0; ty = 0;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Animation timing
  const IMPRESSION_GAP = 0.55; // seconds between impressions
  const startDelay = reduced ? 0 : 0.3;
  const impressions = [
    { ch: "V",  delay: startDelay + 0 * IMPRESSION_GAP },
    { ch: "·",  delay: startDelay + 1 * IMPRESSION_GAP },
    { ch: "N",  delay: startDelay + 2 * IMPRESSION_GAP },
  ];

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
      style={{ perspective: 1400 }}
    >
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto"
        style={{
          width: "min(86vw, 560px)",
          aspectRatio: "1.75 / 1",
          transformStyle: "preserve-3d",
          transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
          willChange: "transform",
        }}
      >
        {/* Card body — black 400gsm */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1A1209 0%, #100D08 50%, #0A0805 100%)",
            borderRadius: 4,
            boxShadow: `
              0 1px 0 rgba(247,242,234,0.04) inset,
              0 -1px 0 rgba(0,0,0,0.6) inset,
              0 30px 60px -20px rgba(0,0,0,0.7),
              0 8px 20px -8px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* Paper-fiber noise */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />
          {/* Subtle inner border ruled in gold (deboss feel) */}
          <div
            aria-hidden
            className="absolute"
            style={{
              inset: "6%",
              border: "1px solid rgba(181,136,42,0.08)",
              borderRadius: 2,
            }}
          />

          {/* Vignette */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 40%, rgba(247,242,234,0.04) 0%, transparent 50%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          {/* Monogram stack — centered, three impressions */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-baseline"
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#C9A45A",
                gap: "0.18em",
                lineHeight: 0.9,
              }}
            >
              {impressions.map((imp, i) => (
                <FoilImpression
                  key={imp.ch + i}
                  ch={imp.ch}
                  delay={imp.delay}
                  isDot={imp.ch === "·"}
                />
              ))}
            </div>
          </div>

          {/* Press-mark micro details — corner ticks (debossed) */}
          <CornerTicks />

          {/* Wordmark + tagline pinned to the bottom of the card */}
          <div
            className="absolute bottom-0 inset-x-0 px-6 pb-5 pt-3 flex items-end justify-between"
            style={{ color: "rgba(247,242,234,0.32)" }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                }}
              >
                Vishal Offset
              </div>
              <div
                className="mt-0.5"
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(181,136,42,0.45)",
                }}
              >
                Est. 1998
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "0.55rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(181,136,42,0.45)",
              }}
            >
              Three Generations
            </div>
          </div>

          {/* Gold sheen — sweeps once after all impressions land */}
          {!reduced && (
            <motion.div
              aria-hidden
              className="absolute inset-y-0 pointer-events-none"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 0.55, 0] }}
              transition={{
                delay: startDelay + 3 * IMPRESSION_GAP + 0.25,
                duration: 1.4,
                ease: "easeInOut",
              }}
              style={{
                width: "60%",
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,236,184,0.55) 50%, transparent 70%)",
                mixBlendMode: "screen",
                filter: "blur(2px)",
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

/**
 * One foil impression: scale + blur reveal + radial press-ring pulse.
 */
function FoilImpression({ ch, delay, isDot }: { ch: string; delay: number; isDot: boolean }) {
  return (
    <span className="relative inline-block">
      {/* Press-ring pulse */}
      <motion.span
        aria-hidden
        className="absolute pointer-events-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 2.2, opacity: [0, 0.45, 0] }}
        transition={{ delay, duration: 0.85, ease: "easeOut" }}
        style={{
          left: "50%",
          top: "50%",
          width: isDot ? 60 : 140,
          height: isDot ? 60 : 140,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,236,184,0.6) 0%, rgba(201,164,90,0.3) 35%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />

      {/* The letter itself */}
      <motion.span
        initial={{ opacity: 0, scale: 1.5, filter: "blur(6px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          delay,
          duration: 0.55,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        className="relative inline-block"
        style={{
          fontSize: isDot ? "clamp(2.5rem, 6vw, 4rem)" : "clamp(4.5rem, 11vw, 7rem)",
          background:
            "linear-gradient(135deg, #F2D88C 0%, #D4AC6B 30%, #C9A45A 50%, #B5882A 70%, #8A6520 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 1px 0 rgba(0,0,0,0.3)",
          // Drop-shadow gives the foil a debossed feel into the card
          filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.45)) drop-shadow(0 0 12px rgba(201,164,90,0.18))",
          transform: isDot ? "translateY(-0.22em)" : "none",
        }}
      >
        {ch}
      </motion.span>
    </span>
  );
}

/** Four small corner registration ticks on the card — quiet press detail. */
function CornerTicks() {
  const tick = (pos: "tl" | "tr" | "bl" | "br") => {
    const styles: Record<typeof pos, React.CSSProperties> = {
      tl: { top: 14, left: 14 },
      tr: { top: 14, right: 14 },
      bl: { bottom: 14, left: 14 },
      br: { bottom: 14, right: 14 },
    };
    return (
      <span
        aria-hidden
        style={{
          position: "absolute",
          width: 8, height: 8,
          color: "rgba(181,136,42,0.3)",
          ...styles[pos],
        }}
      >
        <span style={{
          position: "absolute", left: 0, top: pos.startsWith("t") ? 0 : "auto", bottom: pos.startsWith("b") ? 0 : "auto",
          width: 8, height: 1, background: "currentColor",
        }} />
        <span style={{
          position: "absolute", top: 0, left: pos.endsWith("l") ? 0 : "auto", right: pos.endsWith("r") ? 0 : "auto",
          width: 1, height: 8, background: "currentColor",
        }} />
      </span>
    );
  };
  return (
    <>
      {tick("tl")}
      {tick("tr")}
      {tick("bl")}
      {tick("br")}
    </>
  );
}
