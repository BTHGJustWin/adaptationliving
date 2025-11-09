'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { motion, useAnimation } from 'framer-motion';

/**
 * AIThemeEngine — the adaptive visual intelligence core.
 * Reacts in real time to selected themes and morphs the environment accordingly.
 */

export default function AIThemeEngine() {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();

  // Define AI-reactive visual mapping
  const themeMap = {
    luxe: {
      background: 'radial-gradient(circle at 25% 25%, #e9d8a6, #1a120b)',
      particleColor: '#fdf6e3',
      glow: 'rgba(255, 239, 180, 0.6)',
      blur: 10,
    },
    urban: {
      background: 'linear-gradient(135deg, #0f172a, #1e293b, #000000)',
      particleColor: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.3)',
      blur: 6,
    },
    christmas: {
      background: 'linear-gradient(115deg, #165b33, #bb2528, #f8b229)',
      particleColor: '#ffffff',
      glow: 'rgba(255, 255, 255, 0.4)',
      blur: 12,
    },
    halloween: {
      background: 'radial-gradient(circle at center, #ff7518, #2e0b00)',
      particleColor: '#ffb347',
      glow: 'rgba(255, 102, 0, 0.45)',
      blur: 8,
    },
  };

  useEffect(() => {
    const { background, particleColor, glow, blur } =
      themeMap[theme as keyof typeof themeMap] || themeMap.luxe;

    // Sync CSS vars for particles, glow, and blur across site
    document.body.style.background = background;
    document.documentElement.style.setProperty('--particle-color', particleColor);
    document.documentElement.style.setProperty('--glow', glow);
    document.documentElement.style.setProperty('--blur', `${blur}px`);

    // Animate smooth environment transitions
    controls.start({
      opacity: [0, 1],
      scale: [1.02, 1],
      transition: { duration: 1.8, ease: 'easeInOut' },
    });
  }, [theme, controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 -z-20 transition-all duration-1000"
      style={{
        background:
          themeMap[theme as keyof typeof themeMap]?.background ||
          themeMap.luxe.background,
        filter: `blur(${themeMap[theme as keyof typeof themeMap]?.blur}px)`,
      }}
    />
  );
}
