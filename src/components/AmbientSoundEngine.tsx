'use client';

import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useMotionSync } from '../context/NeuralMotionSync';

export default function AmbientSoundEngine() {
  const { theme } = useContext(ThemeContext);
  const { time } = useMotionSync();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    switch (theme) {
      case 'christmas':
        audio.src = '/sounds/christmas-ambience.mp3';
        break;
      case 'halloween':
        audio.src = '/sounds/halloween-ambience.mp3';
        break;
      case 'luxe':
        audio.src = '/sounds/luxury-lounge.mp3';
        break;
      default:
        audio.src = '/sounds/default-space.mp3';
    }

    const fadeIn = setInterval(() => {
      if (audio.volume < 0.5) audio.volume += 0.01;
    }, 100);

    audio.loop = true;
    audio.play().catch(() => null);

    return () => {
      clearInterval(fadeIn);
      audio.pause();
    };
  }, [theme, time]);

  return <audio ref={audioRef} />;
}
