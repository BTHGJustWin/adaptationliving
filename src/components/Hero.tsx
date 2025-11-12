'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // explicit refs
  const heroBgRef = useRef<HTMLVideoElement>(null);     // /public/media/hero-bg.mp4
  const heroBgAltRef = useRef<HTMLVideoElement>(null);  // /public/media/hero-bg-alt.mp4
  const logoVideoRef = useRef<HTMLVideoElement>(null);  // /public/media/FrontPageLogoVid.mp4

  // cross-fade background videos
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
    // The hero itself occupies exactly the viewport and never adds height
    <section className="fixed inset-0 w-full h-[100svh] overflow-hidden">
      {/* FULL-SCREEN TIME-LAPSE (behind everything) */}
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
