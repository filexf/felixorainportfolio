"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeType } from "@/types";

// Type pour le contexte
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Création du contexte de thème
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme doit être utilisé à l'intérieur d'un ThemeProvider");
  }
  return context;
};

// Fournisseur du contexte de thème
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with a default value (light mode)
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Only run on client side
  useEffect(() => {
    // Vérifier si le thème est stocké dans localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Par défaut, utiliser le mode clair
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  // Appliquer le thème au chargement et lors des changements
  useEffect(() => {
    // Force overriding any browser default
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Fonction pour basculer le thème
  const toggleTheme = (): void => {
    setDarkMode(!darkMode);
  };

  // Valeurs à fournir dans le contexte
  const value = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
