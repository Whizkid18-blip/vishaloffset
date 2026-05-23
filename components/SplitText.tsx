"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

type Props = {
  children: string;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -45, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] },
  },
};

/**
 * Word-stagger reveal. Splits children on spaces, animates each word
 * with a 3D-rotate + blur-out reveal. Wrap rich elements separately —
 * this component intentionally takes a plain string.
 */
export default function SplitText({
  children, className, style, stagger = 0.08, delay = 0, as = "h1",
}: Props) {
  const words = children.split(" ");
  const Tag = motion[as] as typeof motion.h1;

  return (
    <Tag
      className={className}
      style={style}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      animate="show"
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.12em" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block", transformOrigin: "50% 100%" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Inline variant — used inside an existing element (e.g., to split only
 * one half of a headline). Returns spans only, no wrapper tag.
 */
export function SplitInline({
  text, stagger = 0.08, delay = 0, className,
}: { text: string; stagger?: number; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      animate="show"
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.12em" }}>
          <motion.span variants={wordVariants} style={{ display: "inline-block", transformOrigin: "50% 100%" }}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

export type { ReactNode };
