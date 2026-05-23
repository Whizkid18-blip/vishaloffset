"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** parallax intensity 0–1; 0 disables parallax */
  parallax?: number;
  /** aspect ratio CSS (e.g. "16/9", "1/1") */
  aspect?: string;
  /** dark tint overlay color (e.g. "#100D08") */
  tint?: string;
  tintOpacity?: number;
};

/**
 * Reveals an image with a wipe-up mask as it enters view, then applies
 * a subtle parallax shift while it's on-screen. Pure presentational —
 * keep it inside layout containers that own its size (use `aspect`).
 */
export default function ImageReveal({
  src, alt, className = "", style = {}, parallax = 0.15, aspect = "4/3",
  tint, tintOpacity = 0.3,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // image translates Y inverse to scroll
  const y = useTransform(scrollYProgress, [0, 1], [`${parallax * 30}%`, `${-parallax * 30}%`]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      {/* Reveal mask — slides up off the image */}
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: "-101%" }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 0.15 }}
        viewport={{ once: true, margin: "-10%" }}
        className="absolute inset-0 z-20"
        style={{ background: "#B5882A" }}
      />

      {/* Parallax-shifted image */}
      <motion.div
        style={{ y, position: "absolute", inset: "-15% 0", width: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ display: "block" }}
        />
      </motion.div>

      {/* Optional tint overlay */}
      {tint && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: tint, opacity: tintOpacity, mixBlendMode: "multiply" }}
        />
      )}
    </div>
  );
}
