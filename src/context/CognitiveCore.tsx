'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';
import { useMotionSync } from './NeuralMotionSync';

interface CognitiveContextValue {
  mood: string;
  awareness: number;
  setMood: (m: string) => void;
}

export const CognitiveContext = createContext<CognitiveContextValue>({
  mood: 'neutral',
  awareness: 0,
  setMood: () => {},
});

export function CognitiveProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { time } = useMotionSync();
  const [mood, setMood] = useState('neutral');
  const [awareness, setAwareness] = useState(0);

  useEffect(() => {
    let newMood = 'neutral';
    if (theme === 'luxe') newMood = 'focused';
    if (theme === 'christmas') newMood = 'cheerful';
    if (theme === 'halloween') newMood = 'mischievous';
    if (theme === 'urban') newMood = 'bold';
    setMood(newMood);
  }, [theme, language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAwareness(Math.abs(Math.sin(time * 0.3)) * 100);
    }, 200);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <CognitiveContext.Provider value={{ mood, awareness, setMood }}>
      {children}
    </CognitiveContext.Provider>
  );
}

export const useCognitiveCore = () => useContext(CognitiveContext);
