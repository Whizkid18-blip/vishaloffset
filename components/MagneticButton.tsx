"use client";

import { useRef, useState, ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number; // how much the element translates toward cursor (0–1)
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

/**
 * Magnetic button — translates toward cursor on hover for a tactile feel.
 * Falls back to a static button on touch devices.
 */
export default function MagneticButton({
  children, className = "", style = {}, strength = 0.32,
  onClick, as = "button", href, target, rel, type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, hover: false });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top  + r.height / 2;
    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
      hover: true,
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0, hover: false });

  const inner = (
    <div
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.hover ? "transform 0.08s linear" : "transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
        display: "inline-flex",
        alignItems: "center",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );

  const commonProps = {
    ref: ref as React.RefObject<HTMLDivElement & HTMLButtonElement & HTMLAnchorElement>,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
    style: { display: "inline-flex", alignItems: "center", ...style },
  };

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>{inner}</a>
    );
  }

  return (
    <button onClick={onClick} type={type} {...commonProps}>{inner}</button>
  );
}
