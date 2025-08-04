"use client";

import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
