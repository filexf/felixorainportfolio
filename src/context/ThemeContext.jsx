"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Création du contexte de thème
export const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Fournisseur du contexte de thème
export const ThemeProvider = ({ children }) => {
  // Initialize with a default value (light mode)
  const [darkMode, setDarkMode] = useState(false);

  // Only run on client side
  useEffect(() => {
    // Vérifier si le thème est stocké dans localStorage
    const savedTheme = localStorage.getItem("theme");
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
  const toggleTheme = () => {
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
