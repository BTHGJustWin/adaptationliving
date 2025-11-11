'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // Explicit, readable refs
  const heroBgRef = useRef<HTMLVideoElement>(null);       // /media/hero-bg.mp4
  const heroBgAltRef = useRef<HTMLVideoElement>(null);    // /media/hero-bg-alt.mp4
  const logoVideoRef = useRef<HTMLVideoElement>(null);    // /media/FrontPageLogoVid.mp4

  // Cross-fade between the two timelapse videos
  useEffect(() => {
    const primary = heroBgRef.current;
    const alternate = heroBgAltRef.current;
    if (!primary || !alternate) return;

    primary.playbackRate = 0.5;
    alternate.playbackRate = 0.5;

    primary.style.opacity = '1';
    alternate.style.opacity = '0';
    let showingPrimary = true;

    const swap = () => {
      if (showingPrimary) {
        primary.pause();
        alternate.currentTime = 0;
        alternate.play().catch(() => {});
        primary.style.opacity = '0';
        alternate.style.opacity = '1';
      } else {
        alternate.pause();
        primary.currentTime = 0;
        primary.play().catch(() => {});
        alternate.style.opacity = '0';
        primary.style.opacity = '1';
      }
      showingPrimary = !showingPrimary;
    };

    primary.addEventListener('ended', swap);
    alternate.addEventListener('ended', swap);
    primary.play().catch(() => {});

    return () => {
      primary.removeEventListener('ended', swap);
      alternate.removeEventListener('ended', swap);
    };
  }, []);

  // Loop the animated logo video
  useEffect(() => {
    const logo = logoVideoRef.current;
    if (!logo) return;
    logo.play().catch(() => {});
    const onEnd = () => { logo.currentTime = 0; logo.play().catch(() => {}); };
    logo.addEventListener('ended', onEnd);
    return () => logo.removeEventListener('ended', onEnd);
  }, []);

  const handleClick = (path: string) => router.push(path);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white font-[Lexend]"
    >
      {/* FULL-SCREEN TIME-LAPSE BACKGROUND */}
      <video
        ref={heroBgRef}
        src="/media/hero-bg.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={heroBgAltRef}
        src="/media/hero-bg-alt.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      {/* Subtle legibility overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* NAV BAR */}
      <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 uppercase tracking-[0.25em] text-sm">
        <button
          onClick={() => document.getElementById('mainMenu')?.classList.toggle('hidden')}
          className="text-2xl hover:opacity-70 transition-opacity"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Image
            src="/media/All Photos - 1 of 1.jpeg"
            alt="Adaptation Living Logo"
            width={70}
            height={70}
            className="rounded-full shadow-lg"
            priority
          />
        </div>

        <div className="text-2xl cursor-pointer hover:opacity-70 transition-opacity" aria-hidden>
          🌐
        </div>
      </div>

      {/* FULLSCREEN MENU */}
      <div
        id="mainMenu"
        className="hidden fixed inset-0 bg-[#0b0b0b]/95 z-60 flex flex-col items-center justify-center space-y-8 text-2xl font-light uppercase tracking-[0.25em]"
      >
        <button onClick={() => handleClick('/business')}>Business Services</button>
        <button onClick={() => handleClick('/design')}>Design Services</button>
        <button onClick={() => handleClick('/web')}>Website / Domain / Email</button>
        <button onClick={() => handleClick('/ls2025')}>LS-2025 Project</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>

      {/* CENTERED ANIMATED LOGO — HARD CAP 800×400 */}
      <div className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className="relative mx-auto drop-shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          style={{ width: 'min(90vw, 800px)' }}
        >
          <video
            ref={logoVideoRef}
            src="/media/FrontPageLogoVid.mp4"
            className="w-full h-auto object-contain rounded-xl shadow-xl bg-white/85"
            muted
            playsInline
            autoPlay
            preload="auto"
            style={{ maxHeight: 400 }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay"
          />
        </div>

        <p className="mt-8 text-lg md:text-xl tracking-[0.35em] text-white/90">
          LIVING DESIGN INTELLIGENCE
        </p>

        <button
          onClick={() => handleClick('/packages')}
          className="mt-12 px-8 py-3 border border-white/60 rounded-md text-sm tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-500"
        >
          Get Started
        </button>
      </div>

      {/* BOTTOM LINKS BAR */}
      <div className="fixed bottom-0 inset-x-0 bg-black/70 py-5 text-center text-[0.8rem] uppercase tracking-[0.3em] flex justify-center flex-wrap gap-6 border-t border-white/10 z-40">
        <button onClick={() => handleClick('/business')}>Business</button>
        <button onClick={() => handleClick('/design')}>Design</button>
        <button onClick={() => handleClick('/web')}>Web</button>
        <button onClick={() => handleClick('/ls2025')}>LS-2025</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>
    </section>
  );
}
