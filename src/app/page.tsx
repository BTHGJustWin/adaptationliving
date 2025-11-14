// src/app/page.tsx
"use client";

import HeroVideo from "../components/HeroVideo";      // STYLE A (videos)
// import HeroPhoto from "../components/HeroPhoto";   // STYLE B (photo)
// import HeroGlass from "../components/HeroGlass";   // STYLE D (black-glass)

import PackagesSection from "../components/PackagesSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div id="home" className="bg-[#050710] text-[#f5f5f5]">
      {/* HERO (switch variant by changing the imported component above) */}
      <HeroVideo />
      {/* Or <HeroPhoto /> / <HeroGlass /> */}

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative z-10 bg-[#f5f5f5] text-[#020617] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase">
            About Adaptation Living
          </h2>
          <p className="text-lg leading-relaxed text-slate-800">
            Adaptation Living LLC merges human creativity with intelligent
            systems to design elite, fully functioning digital ecosystems. This
            site is not from a template — it is crafted with meticulous
            attention to detail, leveraging the most advanced AI systems
            available to build, refine, and launch experiences at{" "}
            <span className="font-semibold">100× the traditional speed</span>.
          </p>
          <p className="text-lg leading-relaxed text-slate-800">
            We specialize in cinematic websites, business foundations,
            automation, and adaptive environments that feel alive — reacting to
            motion, light, and mood in real time.
          </p>
        </div>
      </section>

      {/* PACKAGES / SERVICES */}
      <PackagesSection />

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="relative bg-[#020617] text-[#f5f5f5] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase text-center">
            Portfolio Lookbook
          </h2>
          <p className="max-w-3xl mx-auto text-center text-slate-200">
            A living gallery of environments, sunrise sequences, and adaptive
            interfaces. Each project is designed as a fully immersive
            experience, not just a web page.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Replace the src strings below with any of your sunrise images */}
            {[
              "/media/YOUR_SUNRISE_IMAGE_1.jpg",
              "/media/YOUR_SUNRISE_IMAGE_2.jpg",
              "/media/YOUR_SUNRISE_IMAGE_3.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/60"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-slate-100">
                  Adaptation Living — Scene {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative bg-[#f5f5f5] text-[#020617] py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase">
            Contact
          </h2>
          <p className="text-lg text-slate-800">
            First consultation is free. We can create your launch plan in as
            little as 20 minutes.
          </p>

          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-slate-300 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-900/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-slate-300 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-900/40"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-slate-300 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-900/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-black/80 px-8 py-3 text-sm font-semibold tracking-[0.25em] uppercase bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
