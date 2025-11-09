'use client';

import { useEffect, useRef, createContext, useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface MotionContextValue {
  time: number;
  speed: number;
}

const MotionContext = createContext<MotionContextValue>({ time: 0, speed: 1 });
export const useMotionSync = () => useContext(MotionContext);

export default function NeuralMotionSync(props: { children?: React.ReactNode }) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const [time, setTime] = useState(0);
  const speedRef = useRef(1);

  useEffect(() => {
    switch (theme) {
      case 'luxe':
        speedRef.current = 0.8;
        break;
      case 'urban':
        speedRef.current = 1.0;
        break;
      case 'christmas':
        speedRef.current = 0.6;
        break;
      case 'halloween':
        speedRef.current = 1.3;
        break;
      default:
        speedRef.current = 1.0;
    }
  }, [theme]);

  useEffect(() => {
    let frame: number;
    const loop = (t: number) => {
      setTime(t * 0.001 * speedRef.current);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <MotionContext.Provider value={{ time, speed: speedRef.current }}>
      {children}
    </MotionContext.Provider>
  );
}

export const MotionProvider = NeuralMotionSync;

