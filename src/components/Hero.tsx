'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const logoVid = useRef<HTMLVideoElement>(null);

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
        v2.play();
        v1.style.opacity = '0';
        v2.style.opacity = '1';
      } else {
        v2.pause();
        v1.currentTime = 0;
        v1.play();
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

  useEffect(() => {
    const lv = logoVid.current;
    if (lv) {
      lv.play().catch(() => {});
      lv.addEventListener('ended', () => {
        lv.currentTime = 0;
        lv.play().catch(() => {});
      });
    }
  }, []);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col bg-black text-white font-[Lexend]">
      {/* --- BACKGROUND VIDEOS --- */}
      <video
        ref={video1}
        src="/media/hero-bg.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
      />
      <video
        ref={video2}
        src="/media/hero-bg-alt.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 z-0"
        autoPlay
        muted
        playsInline
      />

      {/* --- GRADIENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 z-10" />

      {/* --- NAVIGATION BAR --- */}
      <div className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-6 uppercase tracking-[0.25em] text-sm">
        <button
          onClick={() =>
            document.getElementById('mainMenu')?.classList.toggle('hidden')
          }
          className="text-2xl hover:opacity-70 transition-opacity"
        >
          ☰
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <Image
            src="/media/All Photos - 1 of 1.jpeg"
            alt="Adaptation Living Logo"
            width={70}
            height={70}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-2xl cursor-pointer hover:opacity-70 transition-opacity">🌐</div>
      </div>

      {/* --- DROPDOWN MENU --- */}
      <div
        id="mainMenu"
        className="hidden absolute top-0 left-0 w-full h-full bg-[#0b0b0b]/95 z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-light uppercase tracking-[0.25em]"
      >
        <button onClick={() => handleClick('/business')}>Business Services</button>
        <button onClick={() => handleClick('/design')}>Design Services</button>
        <button onClick={() => handleClick('/web')}>Website / Domain / Email</button>
        <button onClick={() => handleClick('/ls2025')}>LS-2025 Project</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>

      {/* --- CENTER LOGO --- */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-grow text-center">
        <div className="relative w-[300px] md:w-[420px] drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
          <video
            ref={logoVid}
            src="/media/FrontPageLogoVid.mp4"
            className="w-full rounded-xl shadow-xl bg-white/95"
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] animate-pulse-slow mix-blend-overlay pointer-events-none" />
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

      {/* --- BOTTOM LINKS --- */}
      <div className="w-full bg-black/80 py-5 text-center text-[0.8rem] uppercase tracking-[0.3em] flex justify-center flex-wrap gap-6 border-t border-white/10 z-30">
        <button onClick={() => handleClick('/business')}>Business</button>
        <button onClick={() => handleClick('/design')}>Design</button>
        <button onClick={() => handleClick('/web')}>Web</button>
        <button onClick={() => handleClick('/ls2025')}>LS-2025</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>
    </section>
  );
}
