'use client';

import { useEffect, useRef } from 'react';

interface ParticlesProps {
  theme?: string;
}

export default function Particles({ theme = 'default' }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const particles: { x: number; y: number; size: number; speed: number }[] = [];

    const colors: Record<string, string[]> = {
      default: ['#60a5fa', '#a5b4fc', '#c084fc'],
      luxe: ['#c0b283', '#f8f4e3', '#e0c097'],
      urban: ['#0ea5e9', '#0284c7', '#38bdf8'],
      christmas: ['#16a34a', '#dc2626', '#fbbf24'],
      halloween: ['#f97316', '#84cc16', '#facc15'],
    };

    const activeColors = colors[theme] || colors.default;

    // Set up particles
    const initParticles = () => {
      const num = 80;
      particles.length = 0;
      for (let i = 0; i < num; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = activeColors[Math.floor(Math.random() * activeColors.length)];
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-70"
    />
  );
}
