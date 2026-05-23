"use client";

import { useState, useRef, useEffect } from "react";

export default function CountUp({
  to, suffix = "", delay = 0, duration = 1700,
}: {
  to: number; suffix?: string; delay?: number; duration?: number;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - t0) / duration, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(ease * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, delay, duration]);

  return <span ref={spanRef}>{val}{suffix}</span>;
}
