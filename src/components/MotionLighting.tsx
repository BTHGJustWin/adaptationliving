'use client';

import { useRef, useEffect } from 'react';
import { useMotionSync } from '../context/NeuralMotionSync';

interface MotionLightingProps {
  theme?: string;
}

export default function MotionLighting({ theme = 'default' }: MotionLightingProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { time } = useMotionSync();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors: Record<string, string[]> = {
      default: ['#38bdf8', '#6366f1'],
      luxe: ['#c0b283', '#f8f4e3'],
      urban: ['#0284c7', '#38bdf8'],
      christmas: ['#dc2626', '#16a34a'],
      halloween: ['#f97316', '#84cc16'],
    };

    const activeColors = colors[theme] || colors.default;

    const render = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);
      const gradient = ctx.createRadialGradient(
        w / 2 + Math.sin(time * 0.3) * 100,
        h / 2 + Math.cos(time * 0.4) * 100,
        100,
        w / 2,
        h / 2,
        w / 1.2
      );

      activeColors.forEach((c, i) => gradient.addColorStop(i / (activeColors.length - 1), c));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      requestAnimationFrame(render);
    };

    render();
  }, [theme, time]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-40 pointer-events-none z-0"
    />
  );
}
