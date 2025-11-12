'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="group fixed top-0 inset-x-0 z-50">
      {/* contrast background appears only on interaction */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 bg-black/65 backdrop-blur-md" />

      <div className="relative mx-auto w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-xl tracking-widest font-semibold">
          ADAPTATION LIVING
        </h1>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.25em]">
          {links.map((l) => (
            <button
              key={l.name}
              onClick={() => router.push(l.href)}
              className="relative transition-opacity hover:opacity-90 focus:opacity-90"
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-black/85 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm uppercase tracking-[0.25em]">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => { setOpen(false); router.push(l.href); }}
                className="text-left py-1"
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
