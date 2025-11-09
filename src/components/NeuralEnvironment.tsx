'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useMotionSync } from '../context/NeuralMotionSync';

export default function NeuralEnvironment(props: { children?: React.ReactNode }) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { time } = useMotionSync();
  const [ambientColor, setAmbientColor] = useState('rgba(0,0,0,0)');

  useEffect(() => {
    // Dynamic environment color based on active theme
    if (theme === 'urban') setAmbientColor('rgba(0, 0, 0, 0.4)');
    else if (theme === 'luxe') setAmbientColor('rgba(255, 215, 0, 0.3)');
    else if (theme === 'christmas') setAmbientColor('rgba(0, 255, 127, 0.25)');
    else if (theme === 'halloween') setAmbientColor('rgba(255, 69, 0, 0.25)');
    else setAmbientColor('rgba(0,0,0,0.1)');
  }, [theme, time]);

  return (
    <div
      style={{
        backgroundColor: ambientColor,
        transition: 'background-color 0.5s ease',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
}
