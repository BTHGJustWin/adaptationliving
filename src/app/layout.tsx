import type { Metadata } from 'next';
import './globals.css';

// Keep providers that actually exist in your repo:
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { CognitiveProvider } from '@/context/CognitiveCore';
import { MotionProvider } from '@/context/NeuralMotionSync';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Adaptation Living LLC',
  description: 'Adaptive, intelligent web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Hard black base so no light panes ever overlay the hero */}
      <body className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
              <CognitiveProvider>
                {/* REMOVE the NeuralEnvironment wrapper (it was likely painting surfaces) */}
                <Navbar />
                {children}
              </CognitiveProvider>
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
