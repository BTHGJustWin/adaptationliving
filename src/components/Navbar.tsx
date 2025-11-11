'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  // Lock body scroll when the mobile drawer is open, close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-10 py-6 bg-gradient-to-b from-black/40 to-transparent">
      <h1 className="text-xl tracking-widest text-[#f5f5f5] font-semibold">
        ADAPTATION LIVING
      </h1>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-8 text-[#f5f5f5]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className="md:hidden cursor-pointer text-[#f5f5f5]"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        ☰
      </button>

      {/* Click-outside overlay (mobile only) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#f5f5f5]/95 backdrop-blur-md shadow-xl flex flex-col items-start justify-center space-y-8 px-8 z-40 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-black text-lg font-medium hover:text-gray-700 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
