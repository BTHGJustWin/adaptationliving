"use client";

import React from "react";
import Image from "next/image";

/**
 * Adaptation Living LLC
 * About Section
 * -----------------------------------------------
 * Smooth parallax dawn background + professional
 * narrative about Brandon Bible & Adaptation Living.
 * -----------------------------------------------
 */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f5] text-black"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/media/Sunrise-and-Sunset-in-Tempe-1-of-2.png"
          alt="Tempe Sunrise Background"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#eaeaea]/80 backdrop-blur-[2px]" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-10 md:p-20 gap-10">
        {/* --- IMAGE PANEL --- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/media/brandon-profile.jpg"
            alt="Brandon Bible, Founder of Adaptation Living LLC"
            width={500}
            height={700}
            className="rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.35)] object-cover"
          />
        </div>

        {/* --- TEXT PANEL --- */}
        <div className="w-full md:w-1/2 text-center md:text-left font-[Inter] leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-[Lexend] uppercase tracking-[0.25em] mb-6 text-black/80">
            About Adaptation Living
          </h2>
          <p className="text-lg mb-6">
            <strong>Adaptation Living LLC</strong> was built on the belief that digital
            design should breathe, react, and evolve. Founded by{" "}
            <strong>Brandon Bible</strong>, this company merges human creativity with
            intelligent AI systems to craft living, adaptive business ecosystems.
          </p>
          <p className="text-lg mb-6">
            Every project is approached with meticulous attention to detail and a deep
            understanding of design intelligence — resulting in creations that feel
            alive and responsive to their environment.
          </p>
          <p className="text-lg mb-6">
            Brandon’s philosophy: <em>“We don’t design templates — we create intelligent
            digital foundations that adapt, learn, and grow.”</em>
          </p>
          <p className="text-lg">
            This is not just a business. It’s the intersection of art, code, and
            consciousness — where innovation meets precision.
          </p>
        </div>
      </div>
    </section>
  );
}
