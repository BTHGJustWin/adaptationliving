import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { CognitiveProvider } from '../context/CognitiveCore';
import { MotionProvider } from '../context/NeuralMotionSync';
import NeuralEnvironment from '../components/NeuralEnvironment';
import Navbar from '../components/Navbar';
import React from 'react';

/**
 * layout.tsx
 * ----------------------------------------------------
 * Adaptation Living LLC
 * Neural Integration Core v3
 * Unified orchestration of all AI subsystems:
 * - Theme & Cognitive Perception
 * - Language Adaptation
 * - Neural Motion Sync
 * - Environmental Intelligence
 * ----------------------------------------------------
 */

export const metadata = {
  title: 'Adaptation Living LLC',
  description: 'Living Design Intelligence — Adaptive, Intelligent Web Design Systems',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="luxury">
      <body
        className="min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden antialiased transition-colors duration-700"
        style={{ scrollBehavior: 'smooth' }}
      >
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
              <CognitiveProvider>
                <NeuralEnvironment>
                  <Navbar />
                  <main className="relative flex flex-col items-center justify-center w-full min-h-screen">
                    {children}
                  </main>
                </NeuralEnvironment>
              </CognitiveProvider>
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
