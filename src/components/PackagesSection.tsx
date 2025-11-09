"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Adaptation Living LLC
 * Packages / Services Section
 * ---------------------------------------------------------
 * Central floating logo surrounded by four interactive
 * packages. 3D depth, ambient lighting, and smooth reveal.
 * ---------------------------------------------------------
 */

export default function PackagesSection() {
  const logoRef = useRef<HTMLDivElement>(null);

  // Parallax motion effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      logoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const packages = [
    {
      title: "Foundation Build",
      desc: "Custom one-page site — branding, SEO, and domain integration. Launch-ready in 5–7 days.",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-[120%]",
    },
    {
      title: "Digital Presence",
      desc: "3–5 page adaptive website with motion UI, analytics, and business email suite.",
      position: "left-0 top-1/2 -translate-y-1/2 -translate-x-[120%]",
    },
    {
      title: "Adaptation Enterprise",
      desc: "AI-integrated ecosystem — full CMS, database, SEO dashboard, LLC assistance.",
      position: "right-0 top-1/2 -translate-y-1/2 translate-x-[120%]",
    },
    {
      title: "AI & Business Services",
      desc: "Automation, branding strategy, and smart content systems that evolve with your business.",
      position: "bottom-0 left-1/2 translate-y-[120%] -translate-x-1/2",
    },
  ];

  return (
    <section
      id="packages"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <Image
        src="/media/Sunrise-and-Sunset-in-Tempe-8-of-9.png"
        alt="Tempe Sunset Background"
        fill
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* --- CENTER LOGO --- */}
      <div
        ref={logoRef}
        className="relative z-10 w-[260px] md:w-[340px] aspect-square flex items-center justify-center rounded-full shadow-[0_0_60px_rgba(255,255,255,0.15)]"
      >
        <Image
          src="/media/All Photos - 1 of 1.jpeg"
          alt="Adaptation Living LLC Logo"
          width={340}
          height={340}
          className="rounded-full object-cover drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] animate-pulse-slow mix-blend-overlay pointer-events-none" />
      </div>

      {/* --- PACKAGE CARDS --- */}
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={`absolute ${pkg.position} z-20 w-[250px] md:w-[300px] text-center bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-700`}
        >
          <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] uppercase mb-3 text-white">
            {pkg.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {pkg.desc}
          </p>
        </div>
      ))}

      {/* --- SECTION TITLE --- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-30">
        <h2 className="text-3xl md:text-5xl font-[Lexend] uppercase tracking-[0.25em] text-white/80">
          Packages & Services
        </h2>
      </div>
    </section>
  );
}
