'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ fontFamily: "'Lexend', sans-serif" }}
      className="px-6 md:px-10 py-10 border-t border-white/10 bg-[#0b0b0b] text-[#f5f5f5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm opacity-80">© {year} Adaptation Living — All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm">
          <a className="opacity-80 hover:opacity-100 transition" href="/">Home</a>
          <a className="opacity-80 hover:opacity-100 transition" href="/about">About</a>
          <a className="opacity-80 hover:opacity-100 transition" href="/packages">Packages</a>
          <a className="opacity-80 hover:opacity-100 transition" href="/portfolio">Portfolio</a>
          <a className="opacity-80 hover:opacity-100 transition" href="/contact">Contact</a>
        </nav>
        <div className="text-sm">
          <a className="opacity-80 hover:opacity-100 transition underline underline-offset-4" href="mailto:hello@adaptationliving.com">
            hello@adaptationliving.com
          </a>
        </div>
      </div>
    </footer>
  );
}
