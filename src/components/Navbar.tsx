'use client';

import { useState } from 'react';
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

  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-10 py-6 bg-gradient-to-b from-black/40 to-transparent">
      <h1 className="text-xl tracking-widest text-[#f5f5f5] font-semibold">
        ADAPTATION LIVING
      </h1>

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
      <div
        className="md:hidden cursor-pointer text-[#f5f5f5]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#f5f5f5]/95 backdrop-blur-md shadow-xl flex flex-col items-start justify-center space-y-8 px-8 z-40"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
