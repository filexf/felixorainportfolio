import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function LanguageSwitcher({
  currentLanguage = "en",
  onLanguageChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();
  const dropdownRef = useRef(null);

  // Langues disponibles avec leur code et drapeau
  const languages = {
    en: { code: "EN", flag: "🇬🇧" },
    fr: { code: "FR", flag: "🇫🇷" },
    es: { code: "ES", flag: "🇪🇸" },
  };

  // Ferme le menu déroulant si l'utilisateur clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Gère la sélection d'une langue
  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal avec la langue actuelle et le drapeau */}
      <button
        className={`flex items-center justify-center gap-2 rounded-full ${isOpen ? "ring-opacity-50 ring-2" : ""} px-3 py-1.5 transition-all duration-300 hover:shadow-md`}
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
        <span className="mr-0.5 text-lg">
          {languages[currentLanguage].flag}
        </span>
        <span className="text-sm font-semibold">
          {languages[currentLanguage].code}
        </span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
          className="absolute right-0 z-50 mt-1.5 w-28 origin-top-right transform overflow-hidden rounded-lg shadow-lg transition-all duration-200 ease-out"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="py-0.5">
            {Object.keys(languages).map((lang) => (
              <button
                key={lang}
                className={`flex w-full items-center px-3 py-2.5 text-sm transition-colors duration-150 ${
                  lang === currentLanguage
                    ? "bg-opacity-10 bg-slate-400 font-semibold"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                onClick={() => handleLanguageSelect(lang)}
                disabled={lang === currentLanguage}
              >
                <span className="mr-2.5 text-lg">{languages[lang].flag}</span>
                {languages[lang].code}
                {lang === currentLanguage && (
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-sky-500"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
