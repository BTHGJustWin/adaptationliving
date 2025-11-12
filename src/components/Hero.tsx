'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // Explicit video refs
  const heroBgRef = useRef<HTMLVideoElement>(null);     // /media/hero-bg.mp4
  const heroBgAltRef = useRef<HTMLVideoElement>(null);  // /media/hero-bg-alt.mp4
  const logoVideoRef = useRef<HTMLVideoElement>(null);  // /media/FrontPageLogoVid.mp4

  // cross-fade between the two timelapse videos
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

  // loop the animated logo
  useEffect(() => {
    const logo = logoVideoRef.current;
    if (!logo) return;
    logo.play().catch(() => {});
    const onEnd = () => { logo.currentTime = 0; logo.play().catch(() => {}); };
    logo.addEventListener('ended', onEnd);
    return () => logo.removeEventListener('ended', onEnd);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND TIME-LAPSE (full viewport) */}
      <video
        ref={heroBgRef}
        src="/media/hero-bg.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-1000 z-0"
        autoPlay muted playsInline preload="auto"
      />
      <video
        ref={heroBgAltRef}
        src="/media/hero-bg-alt.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 z-0"
        autoPlay muted playsInline preload="auto"
      />

      {/* subtle legibility overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black/70" />

      {/* CENTERED ANIMATED LOGO (HARD CAP 800×400) */}
      <div className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className="relative mx-auto"
          style={{ width: 'min(90vw, 800px)' }}
        >
          <video
            ref={logoVideoRef}
            src="/media/FrontPageLogoVid.mp4"
            className="w-full h-auto object-contain rounded-xl shadow-xl bg-white/85"
            muted playsInline autoPlay preload="auto"
            style={{ maxHeight: 400 }}
          />
          {/* soft glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay" />
        </div>

        {/* ACTION BUTTON */}
        <div className="mt-10">
          <button
            onClick={() => router.push('/packages')}
            className="px-8 py-3 border border-white/70 rounded-md text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Options
          </button>
        </div>
      </div>

      {/* bottom spacer to avoid mobile address-bar overlap */}
      <div className="h-24" />
    </section>
  );
}
