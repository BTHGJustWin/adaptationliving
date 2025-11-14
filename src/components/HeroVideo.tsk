// src/components/HeroVideo.tsx
"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const logoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    let current = 1;

    v1.playbackRate = 0.5;
    v2.playbackRate = 0.5;

    const swap = () => {
      if (current === 1) {
        v2.currentTime = 0;
        v2.play().catch(() => {});
        v1.style.opacity = "0";
        v2.style.opacity = "1";
        current = 2;
      } else {
        v1.currentTime = 0;
        v1.play().catch(() => {});
        v2.style.opacity = "0";
        v1.style.opacity = "1";
        current = 1;
      }
    };

    v1.addEventListener("ended", swap);
    v2.addEventListener("ended", swap);

    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener("ended", swap);
      v2.removeEventListener("ended", swap);
    };
  }, []);

  // Loop logo video forever
  useEffect(() => {
    const lv = logoRef.current;
    if (!lv) return;
    const handleEnded = () => {
      lv.currentTime = 0;
      lv.play().catch(() => {});
    };
    lv.play().catch(() => {});
    lv.addEventListener("ended", handleEnded);
    return () => lv.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background videos */}
      <video
        ref={video1Ref}
        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-[2000ms]"
        src="/media/hero-bg.mp4"
        autoPlay
        muted
        loop={false}
        playsInline
      />
      <video
        ref={video2Ref}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[2000ms]"
        src="/media/hero-bg-alt.mp4"
        autoPlay
        muted
        loop={false}
        playsInline
      />

      {/* Dark gradient so content is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      {/* Centered logo video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="relative w-[260px] md:w-[340px] aspect-video rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.9)]">
          <video
            ref={logoRef}
            src="/media/FrontPageLogoVid.mp4"
            className="w-full h-full object-cover mix-blend-screen"
            muted
            playsInline
          />
          {/* Color-reactive overlay: lets video colors bleed into logo box */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-pink-500/25 to-sky-500/20 mix-blend-color dodge pointer-events-none" />
        </div>

        <div className="mt-10 space-y-3">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-slate-200">
            Adaptation Living LLC
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-[0.3em] uppercase">
            Living Design Intelligence
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-slate-200">
            Cinematic environments built to react to your world — light, motion,
            and intent woven into every pixel.
          </p>
          <a
            href="#packages"
            className="inline-flex items-center justify-center mt-4 rounded-full border border-white/80 px-8 py-3 text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}
