import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex h-10 w-10 transition-all hover:shadow-md items-center justify-center rounded-full duration-300 ${
        darkMode
          ? "bg-slate-700 hover:bg-slate-600"
          : "bg-sky-100 hover:bg-sky-200"
      }`}
      aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {darkMode ? (
        // Icône soleil pour passer au mode clair
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-0 text-yellow-300 transition-transform duration-500 hover:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Icône lune pour passer au mode sombre
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-0 text-slate-800 transition-transform duration-500 hover:-rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
