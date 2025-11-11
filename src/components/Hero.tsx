'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const logoVid = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [accent, setAccent] = useState('rgba(255,255,255,0.35)');

  // Crossfade loop between background videos (kept from your version)
  useEffect(() => {
    const v1 = video1.current;
    const v2 = video2.current;
    if (!v1 || !v2) return;

    v1.playbackRate = 0.5;
    v2.playbackRate = 0.5;

    v1.style.opacity = '1';
    v2.style.opacity = '0';
    let showingV1 = true;

    const swap = () => {
      if (showingV1) {
        v1.pause();
        v2.currentTime = 0;
        v2.play().catch(() => {});
        v1.style.opacity = '0';
        v2.style.opacity = '1';
      } else {
        v2.pause();
        v1.currentTime = 0;
        v1.play().catch(() => {});
        v2.style.opacity = '0';
        v1.style.opacity = '1';
      }
      showingV1 = !showingV1;
    };

    v1.addEventListener('ended', swap);
    v2.addEventListener('ended', swap);
    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener('ended', swap);
      v2.removeEventListener('ended', swap);
    };
  }, []);

  // Loop the animated logo
  useEffect(() => {
    const lv = logoVid.current;
    if (!lv) return;
    lv.play().catch(() => {});
    const onEnd = () => { lv.currentTime = 0; lv.play().catch(() => {}); };
    lv.addEventListener('ended', onEnd);
    return () => lv.removeEventListener('ended', onEnd);
  }, []);

  // Sample current video color to tint the logo glow
  useEffect(() => {
    const v = video1.current || video2.current;
    const c = canvasRef.current;
    if (!v || !c) return;

    const ctx = c.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let timer: number | null = null;

    const sample = () => {
      try {
        const W = 64, H = 36; // tiny sample for performance
        c.width = W; c.height = H;
        ctx.drawImage(v, 0, 0, W, H);
        const data = ctx.getImageData(0, 0, W, H).data;
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i]; g += data[i + 1]; b += data[i + 2]; count++;
        }
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        // a touch more saturation and warmth looks nicer at sunrise
        const warmed = `rgba(${Math.min(255, r + 10)}, ${g}, ${Math.max(0, b - 5)}, 0.45)`;
        setAccent(warmed);
      } catch {}
    };

    // sample ~every 800ms while playing
    timer = window.setInterval(sample, 800) as unknown as number;
    sample();

    return () => { if (timer) window.clearInterval(timer); };
  }, []);

  const handleClick = (path: string) => router.push(path);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white font-[Lexend]">
      {/* Full-viewport background videos */}
      <video
        ref={video1}
        src="/media/hero-bg.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={video2}
        src="/media/hero-bg-alt.mp4"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      {/* Soft gradient for legibility */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black/70" />

      {/* NAV BAR (above everything) */}
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

      {/* CENTERED LOGO + TAGLINE */}
      <div className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        {/* dynamic glow plate behind logo */}
        <div
          aria-hidden
          className="absolute -inset-10 rounded-2xl blur-2xl"
          style={{ background: accent, filter: 'saturate(1.15)' }}
        />
        <div className="relative w-[min(72vw,900px)] max-w-[90vw] mx-auto drop-shadow-[0_10px_60px_rgba(0,0,0,0.6)]">
          <video
            ref={logoVid}
            src="/media/FrontPageLogoVid.mp4"
            className="w-full h-auto object-contain rounded-xl shadow-xl bg-white/85"
            muted
            playsInline
            autoPlay
            preload="auto"
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

      {/* Bottom link bar pinned over video */}
      <div className="fixed bottom-0 inset-x-0 bg-black/70 py-5 text-center text-[0.8rem] uppercase tracking-[0.3em] flex justify-center flex-wrap gap-6 border-t border-white/10 z-40">
        <button onClick={() => handleClick('/business')}>Business</button>
        <button onClick={() => handleClick('/design')}>Design</button>
        <button onClick={() => handleClick('/web')}>Web</button>
        <button onClick={() => handleClick('/ls2025')}>LS-2025</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>

      {/* hidden canvas for color sampling */}
      <canvas ref={canvasRef} width={64} height={36} className="hidden" />
    </section>
  );
}
