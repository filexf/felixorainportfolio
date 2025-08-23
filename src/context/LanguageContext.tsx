"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { t as translateFunction } from "@/i18n/i18n";

// Type pour les langues supportées
export type LanguageType = "fr" | "en" | "es";

// Interface pour le contexte de langue
interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

// Création du contexte avec une valeur par défaut undefined
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Fournisseur du contexte de langue
export function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  // Initialisation avec la langue par défaut
  const [language, setLanguage] = useState<LanguageType>("fr");

  // Exécuté uniquement côté client
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageType | null;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    } else {
      // Détection de la langue du navigateur
      const browserLanguage = navigator.language.split("-")[0];
      if (browserLanguage === "fr" || browserLanguage === "en" || browserLanguage === "es") {
        setLanguage(browserLanguage as LanguageType);
      }
      // Sinon, on garde la langue par défaut (fr)
    }
  }, []);

  // Sauvegarder la langue dans localStorage quand elle change
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Fonction de traduction utilisant la fonction t() de i18n.ts
  const t = (key: string): string => {
    return translateFunction(key, language);
  };

  // Valeur fournie au contexte
  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte de langue
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider");
  }

  return context;
}
