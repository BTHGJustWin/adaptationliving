'use client';

import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, useScroll } from 'framer-motion';

/**
 * AmbientSound.tsx
 * Immersive reactive soundscape system — adapts to theme and scroll progression.
 */

export default function AmbientSound() {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Dynamic soundtrack map
  const tracks: Record<string, string> = {
    luxe: '/sounds/luxe.mp3',
    urban: '/sounds/urban.mp3',
    nature: '/sounds/nature.mp3',
    cyber: '/sounds/cyber.mp3',
  };

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.3;
    audio.loop = true;
    audio.play().catch(() => {});

    // Smooth theme transitions
    audio.src = tracks[theme] || tracks['luxe'];
    audio.load();
    audio.play().catch(() => {});
  }, [theme]);

  // Scroll-based reactive volume fade
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (audioRef.current) {
        const dynamicVol = Math.min(1, Math.max(0.15, 1 - v * 0.7));
        audioRef.current.volume = dynamicVol;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <audio ref={audioRef} src={tracks[theme]} preload="auto" />
    </motion.div>
  );
}
