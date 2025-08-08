"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize with default language
  const [language, setLanguage] = useState("en");

  // Only run on client side
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
