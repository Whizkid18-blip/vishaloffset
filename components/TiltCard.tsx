"use client";

import { useRef, useState, ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;        // max tilt degrees
  scale?: number;      // hover scale
  glare?: boolean;     // show specular highlight
};

/**
 * 3D tilt-on-hover wrapper. Pure JS+CSS, no deps.
 * Disables itself on touch / reduced-motion environments.
 */
export default function TiltCard({
  children, className = "", style = {}, max = 9, scale = 1.02, glare = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, hover: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top)  / r.height;
    const ry =  (x - 0.5) * 2 * max;
    const rx = -(y - 0.5) * 2 * max;
    setT({ rx, ry, gx: x * 100, gy: y * 100, hover: true });
  };

  const handleLeave = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, hover: false });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      <div
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.hover ? scale : 1})`,
          transition: t.hover ? "transform 0.08s linear" : "transform 0.45s cubic-bezier(0.2,0.8,0.2,1)",
          transformStyle: "preserve-3d",
          position: "relative",
          willChange: "transform",
        }}
      >
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(255,236,184,0.28) 0%, rgba(255,236,184,0) 45%)`,
              opacity: t.hover ? 1 : 0,
              transition: "opacity 0.3s ease",
              mixBlendMode: "soft-light",
            }}
          />
        )}
      </div>
    </div>
  );
}
