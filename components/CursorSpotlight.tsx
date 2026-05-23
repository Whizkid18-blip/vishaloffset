"use client";

import { useEffect, useRef } from "react";

/**
 * Soft gold glow that follows the cursor.
 * Uses direct DOM manipulation + only runs rAF while position is settling.
 * Pauses (stops the loop) once the position has reached its target so the
 * page goes idle. Disabled on touch / reduced-motion.
 */
export default function CursorSpotlight() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const node = elRef.current;
    if (!node) return;

    let raf = 0;
    let running = false;
    let targetX = -500, targetY = -500;
    let curX = -500, curY = -500;
    let visible = false;

    const tick = () => {
      const dx = targetX - curX;
      const dy = targetY - curY;
      // Settled? stop the loop.
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        curX = targetX;
        curY = targetY;
        node.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
        running = false;
        return;
      }
      curX += dx * 0.18;
      curY += dy * 0.18;
      node.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        node.style.opacity = "1";
      }
      start();
    };
    const leave = () => {
      visible = false;
      node.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60]"
      style={{
        width: 520,
        height: 520,
        transform: "translate3d(-500px, -500px, 0) translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(201,164,90,0.18) 0%, rgba(181,136,42,0.10) 28%, rgba(181,136,42,0.03) 55%, transparent 70%)",
        mixBlendMode: "screen",
        opacity: 0,
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
