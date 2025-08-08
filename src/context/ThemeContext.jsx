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
  // Initialize with a default value
  const [darkMode, setDarkMode] = useState(false);

  // Only run on client side
  useEffect(() => {
    // Vérifier si le thème est stocké dans localStorage, sinon utiliser la préférence du système
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Si aucune préférence n'est enregistrée, vérifier la préférence du système
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Appliquer le thème au chargement et lors des changements
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
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
