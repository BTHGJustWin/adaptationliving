import type { Metadata } from 'next';
import './globals.css';

// ✅ Correct paths (your tsconfig maps @/* -> src/*)
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { CognitiveProvider } from '@/context/CognitiveCore';
import { MotionProvider } from '@/context/NeuralMotionSync';

import NeuralEnvironment from '@/components/NeuralEnvironment';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Adaptation Living LLC',
  description: 'Adaptive, intelligent web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Dark base so the hero video shows; no white pane over it */}
      <body className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
              <CognitiveProvider>
                <NeuralEnvironment>
                  {/* Fixed transparent nav; contrast background appears on hover/focus (Navbar handles it) */}
                  <Navbar />
                  {children}
                </NeuralEnvironment>
              </CognitiveProvider>
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
