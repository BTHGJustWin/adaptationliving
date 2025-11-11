'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MotionLighting from '@/components/MotionLighting';

export default function Home() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/FrontPageLogoVid.mp4" type="video/mp4" />
        <source src="/media/hero-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Motion Lighting (sunrise tones) */}
      <MotionLighting />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 px-6 backdrop-blur-sm bg-black/30">
          <Hero />
          <AboutSection />
          <PackagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
