"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface LanguageSwitcherProps {
  currentLanguage?: string;
  onLanguageChange: (lang: string) => void;
}

interface Language {
  code: string;
  flag: string;
}

interface Languages {
  [key: string]: Language;
}

export default function LanguageSwitcher({
  currentLanguage = "en",
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { darkMode } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Langues disponibles avec leur code et drapeau
  const languages: Languages = {
    en: { code: "EN", flag: "🇬🇧" },
    fr: { code: "FR", flag: "🇫🇷" },
    es: { code: "ES", flag: "🇪🇸" },
  };

  // Ferme le menu déroulant si l'utilisateur clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Gère la sélection d'une langue
  const handleLanguageSelect = (lang: string): void => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal avec la langue actuelle et le drapeau */}
      <button
        className={`flex items-center justify-center gap-1 rounded-full sm:gap-2 ${isOpen ? "ring-opacity-50 ring-2" : ""} px-2 py-1 transition-all duration-300 hover:shadow-md sm:px-3 sm:py-1.5`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.05)",
          borderColor: darkMode
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.1)",
          color: darkMode ? "var(--text-primary)" : "var(--text-secondary)",
        }}
      >
        <span className="mr-0.5 text-base sm:text-lg">
          {languages[currentLanguage].flag}
        </span>
        <span className="text-xs font-semibold sm:text-sm">
          {languages[currentLanguage].code}
        </span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 sm:h-3.5 sm:w-3.5 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Menu déroulant avec animation */}
      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-1 w-24 origin-top-right transform overflow-hidden rounded-lg shadow-lg transition-all duration-200 ease-out sm:mt-1.5 sm:w-28"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="py-0.5">
            {Object.keys(languages).map((lang) => (
              <button
                key={lang}
                className={`flex w-full items-center px-2 py-2 text-xs transition-colors duration-150 sm:px-3 sm:py-2.5 sm:text-sm ${
                  lang === currentLanguage
                    ? "bg-opacity-10 bg-slate-400 font-semibold"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                onClick={() => handleLanguageSelect(lang)}
                disabled={lang === currentLanguage}
              >
                <span className="mr-2 text-base sm:mr-2.5 sm:text-lg">
                  {languages[lang].flag}
                </span>
                {languages[lang].code}
                {lang === currentLanguage && (
                  <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-sky-500 sm:h-2 sm:w-2"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
