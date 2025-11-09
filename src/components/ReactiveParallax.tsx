'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useMotionSync } from '../context/NeuralMotionSync';
import { motion } from 'framer-motion';

export default function ReactiveParallax() {
  const { theme } = useContext(ThemeContext);
  const { time } = useMotionSync();

  const getBackground = () => {
    switch (theme) {
      case 'luxe':
        return 'radial-gradient(circle at 50% 50%, #f0e6d2 0%, #1e1e1e 100%)';
      case 'urban':
        return 'linear-gradient(135deg, #111827, #374151, #1f2937)';
      case 'christmas':
        return 'linear-gradient(180deg, #165b33, #146b3a, #f8b229)';
      case 'halloween':
        return 'linear-gradient(180deg, #2d0a31, #5f0f40, #ff8e00)';
      default:
        return 'linear-gradient(180deg, #0f172a, #1e293b)';
    }
  };

  return (
    <motion.div
      className="absolute inset-0 -z-10 w-full h-full"
      style={{
        background: getBackground(),
        transform: `translateY(${Math.sin(time * 0.3) * 20}px)`,
        opacity: 0.9,
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
}
