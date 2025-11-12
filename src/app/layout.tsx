import type { Metadata } from 'next';
import './globals.css';

// Keep your context/provider structure intact if you’re using it elsewhere.
// If any of these aren’t in your repo, you can remove that import+wrapper.
import { ThemeProvider } from '@/src/context/ThemeContext';
import { LanguageProvider } from '@/src/context/LanguageContext';
import { CognitiveProvider } from '@/src/context/CognitiveCore';
import { MotionProvider } from '@/src/context/NeuralMotionSync';
import NeuralEnvironment from '@/src/components/NeuralEnvironment';
import Navbar from '@/src/components/Navbar';

export const metadata: Metadata = {
  title: 'Adaptation Living LLC',
  description: 'Living Design Intelligence — Adaptive, Intelligent Web Design Systems',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* IMPORTANT: dark, transparent-friendly base so the hero shows */}
      <body className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
              <CognitiveProvider>
                {/* Optional: if this injects ambient effects, keep it */}
                <NeuralEnvironment>
                  {/* Fixed transparent nav with contrast-on-hover */}
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
