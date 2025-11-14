// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import NeuralEnvironment from "../components/NeuralEnvironment";

import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { MotionProvider } from "../context/NeuralMotionSync";
import { CognitiveProvider } from "../context/CognitiveCore";

export const metadata: Metadata = {
  title: "Adaptation Living LLC",
  description: "Living Design Intelligence — cinematic adaptive web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0f1a] text-[#f5f5f5]">
        <CognitiveProvider>
          <LanguageProvider>
            <MotionProvider>
              <ThemeProvider>
                <NeuralEnvironment>
                  {/* Global navbar on top of everything */}
                  <Navbar />
                  <main className="pt-14 min-h-screen overflow-x-hidden">
                    {children}
                  </main>
                </NeuralEnvironment>
              </ThemeProvider>
            </MotionProvider>
          </LanguageProvider>
        </CognitiveProvider>
      </body>
    </html>
  );
}
