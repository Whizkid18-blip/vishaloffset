"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

type Props = {
  /** If on a sub-page (legacy/gifts), default visual treatment is the "scrolled" (light) one */
  variant?: "home" | "subpage";
};

export default function Navbar({ variant = "home" }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(variant === "subpage");
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      if (variant === "home") {
        setScrolled(scrollTop > 60);
      } else {
        setScrolled(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  // Active section detection (home only)
  useEffect(() => {
    if (variant !== "home") return;
    const ids = ["home", "services", "our-work", "process", "about", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [variant]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle nav click: on home → smooth scroll; on sub-page → navigate to home#hash
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // let the Link navigate to / with the hash; Next will trigger scroll
        // (browsers handle #hash automatically on full-page nav)
      }
    }
  };

  // Is a nav item currently "active"?
  const isActive = (href: string): boolean => {
    if (href.startsWith("/#") && pathname === "/") {
      return activeSection === href.replace("/#", "");
    }
    return pathname === href;
  };

  // Map old section labels to new behaviour
  const isOnSubpage = variant === "subpage";

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[70] h-[2px] pointer-events-none transition-all duration-75"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, #B5882A, #C9A45A, #E8C97A)",
          boxShadow: "0 0 8px rgba(201,164,90,0.6)",
        }}
      />

      {/* Navbar */}
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(250,247,241,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(181,136,42,0.16)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" aria-label="Vishal Offset — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scrolled ? "/logo.svg" : "/logo-light.svg"}
              alt="Vishal Offset"
              style={{ height: 40, width: "auto", transition: "all 0.4s" }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="relative text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300"
                  style={{ color: active ? "#B5882A" : scrolled ? "#5C4A2A" : "rgba(247,242,234,0.6)" }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "#B5882A" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick("/#contact", e)}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-300 border"
              style={{
                borderColor: scrolled ? "#B5882A" : "rgba(247,242,234,0.28)",
                color: scrolled ? "#B5882A" : "#F7F2EA",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#B5882A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#B5882A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#B5882A" : "#F7F2EA";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = scrolled ? "#B5882A" : "rgba(247,242,234,0.28)";
              }}
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1 transition-colors"
              style={{ color: scrolled ? "#1A1209" : "#F7F2EA" }}
              aria-label="Open menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(16,13,8,0.72)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 w-72 lg:hidden flex flex-col"
              style={{ background: "#1A1209", borderLeft: "1px solid rgba(181,136,42,0.14)" }}
            >
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(181,136,42,0.1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-light.svg" alt="Vishal Offset" style={{ height: 32, width: "auto" }} />
                <button onClick={() => setMenuOpen(false)} style={{ color: "rgba(247,242,234,0.45)" }} aria-label="Close menu">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 px-6 py-4 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className="block w-full text-left py-3.5 text-[12px] tracking-[0.18em] uppercase font-medium transition-colors"
                      style={{
                        color: isActive(link.href) ? "#C9A45A" : "rgba(247,242,234,0.45)",
                        borderBottom: "1px solid rgba(181,136,42,0.07)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 py-6 space-y-3" style={{ borderTop: "1px solid rgba(181,136,42,0.1)" }}>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick("/#contact", e)}
                  className="block w-full py-3 text-center text-[11px] tracking-[0.2em] uppercase font-medium transition-all"
                  style={{ background: "#B5882A", color: "#fff" }}
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+919898010552"
                  className="flex items-center justify-center gap-2 text-[11px] tracking-wider transition-colors"
                  style={{ color: "rgba(181,136,42,0.5)" }}
                >
                  <Phone className="w-3 h-3" />
                  +91 98980 10552
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
