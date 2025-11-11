'use client';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import PackagesSection from '../components/PackagesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MotionLighting from '../components/MotionLighting';
import AmbientSoundEngine from '../components/AmbientSoundEngine';
import ReactiveParallax from '../components/ReactiveParallax';

export default function Page() {
  return (
    <>
      {/* Audio / Visual Effects */}
      <AmbientSoundEngine />
      <MotionLighting />
      <ReactiveParallax />

      {/* Main Layout */}
      <Navbar />
      <Hero />

      <main className="bg-black text-white">
        <AboutSection />
        <PackagesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
