"use client";

import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

import { GridBackground } from './GridBackground'

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen w-full">
          {/* Fond de grille positionné en arrière-plan */}
          <div className="absolute inset-0 z-[-1]">
            <GridBackground />
          </div>

          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
