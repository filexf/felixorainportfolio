"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { GridBackground } from "./GridBackground";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
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
            <main className="w-full flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
