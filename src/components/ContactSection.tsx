"use client";

import React from "react";

/**
 * Adaptation Living LLC
 * Contact Section / Footer CTA
 * -------------------------------------------------------
 * Clean contact call-to-action with adaptive lighting,
 * simple form, and footer links.
 * -------------------------------------------------------
 */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black text-white text-center overflow-hidden"
    >
      {/* --- Ambient Lighting --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] animate-pulse-slow mix-blend-overlay" />

      {/* --- Header --- */}
      <div className="relative z-10 mb-10 px-6">
        <h2 className="text-4xl md:text-5xl font-[Lexend] uppercase tracking-[0.25em] mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Let’s build something extraordinary. Your first consultation is free,
          and we can create your custom plan in as little as 20 minutes.
        </p>
      </div>

      {/* --- Contact Form --- */}
      <form
        className="relative z-10 flex flex-col w-[90%] md:w-[600px] text-left space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Full Name"
          className="bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
        />
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className="bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all resize-none"
        ></textarea>
        <button
          type="submit"
          className="mt-6 px-8 py-3 border border-white/60 rounded-md uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-black transition-all duration-500 self-center"
        >
          Send Message
        </button>
      </form>

      {/* --- Footer Links --- */}
      <div className="relative z-10 mt-16 text-sm tracking-[0.2em] text-gray-400 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-6 w-full max-w-4xl">
        <a href="/business" className="hover:text-white transition-colors">
          Business Services
        </a>
        <a href="/design" className="hover:text-white transition-colors">
          Design Services
        </a>
        <a href="/web" className="hover:text-white transition-colors">
          Web Design
        </a>
        <a href="/ls2025" className="hover:text-white transition-colors">
          LS-2025
        </a>
        <a href="/contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <p className="relative z-10 mt-8 text-xs tracking-[0.25em] text-gray-600">
        © {new Date().getFullYear()} Adaptation Living LLC — Living Design Intelligence
      </p>
    </section>
  );
}
