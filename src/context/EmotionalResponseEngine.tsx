'use client';

import { useEffect, useState, useContext } from 'react';
import { CognitiveContext } from './CognitiveCore';
import { ThemeContext } from './ThemeContext';
import { useMotionSync } from './NeuralMotionSync';

/**
 * EmotionalResponseEngine.tsx
 * Simulates adaptive emotional modulation of visuals and sounds
 * based on the combined influence of theme, cognitive awareness, and motion rhythm.
 */

export default function EmotionalResponseEngine() {
  const { mood, awareness } = useContext(CognitiveContext);
  const { theme } = useContext(ThemeContext);
  const { time } = useMotionSync();
  const [emotionLevel, setEmotionLevel] = useState(0);

  useEffect(() => {
    const moodIntensity = {
      focused: 0.8,
      cheerful: 1.0,
      mischievous: 1.2,
      bold: 1.1,
      neutral: 0.7,
    }[mood] || 1.0;

    setEmotionLevel(moodIntensity * (awareness / 100) * (1 + Math.sin(time * 0.5)));
  }, [mood, awareness, time, theme]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-all duration-700"
      style={{
        background:
          theme === 'halloween'
            ? `rgba(255, 140, 0, ${emotionLevel * 0.15})`
            : theme === 'christmas'
            ? `rgba(0, 255, 127, ${emotionLevel * 0.15})`
            : `rgba(0, 120, 255, ${emotionLevel * 0.15})`,
        mixBlendMode: 'soft-light',
      }}
    />
  );
}
