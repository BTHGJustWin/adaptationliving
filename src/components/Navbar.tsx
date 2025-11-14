// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-sm md:text-base tracking-[0.35em] uppercase font-semibold text-[#f5f5f5]"
        >
          Adaptation Living
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em]">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-100 hover:text-white hover:opacity-80 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-xs tracking-[0.25em] uppercase border border-white/40 rounded-full px-3 py-1 text-slate-100"
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <ul className="flex flex-col px-4 py-3 gap-3 text-xs uppercase tracking-[0.25em]">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
