"use client"

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import { DEFAULT_LOCALE, type Locale, resolveLocale, SUPPORTED_LOCALES } from "@/i18n/locales"

const COOKIE = "MYNEXTAPP_LOCALE"

const cookieOpts = { path: "/", sameSite: "lax" as const, expires: 365 }

function writeLocaleCookie(lang: Locale) {
  Cookies.set(COOKIE, lang, cookieOpts)
}

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale | "">("")
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const languages: Record<Locale, { code: string; flag: string }> = {
    en: { code: "EN", flag: "🇬🇧" },
    fr: { code: "FR", flag: "🇫🇷" },
    es: { code: "ES", flag: "🇪🇸" },
  }

  // Au 1er rendu client : lit le cookie → met à jour le drapeau. Sans cookie : on en écrit un (défaut "fr") puis refresh pour que next-intl charge les bons messages.
  useEffect(() => {
    const value = Cookies.get(COOKIE)
    const nextLocale = resolveLocale(value)
    setLocale(nextLocale)
    if (!value) {
      writeLocaleCookie(nextLocale)
      router.refresh()
    }
  }, [router])

  // Fermer le menu lors d'un clic extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Changer la langue et rafraîchir la page
  const changeLocale = (lang: Locale) => {
    setLocale(lang)
    writeLocaleCookie(lang)
    router.refresh()
    setIsOpen(false)
  }

  const active = locale || DEFAULT_LOCALE

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={`flex items-center justify-center gap-1 rounded-full sm:gap-2 ${
          isOpen ? "ring-opacity-50 ring-2" : ""
        } px-2 py-1 transition-all duration-300 hover:shadow-md sm:px-3 sm:py-1.5`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
          borderColor: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
          color: darkMode ? "var(--text-primary)" : "var(--text-secondary)",
        }}
      >
        <span className="mr-0.5 text-base sm:text-lg">{languages[active].flag}</span>
        <span className="text-xs font-semibold sm:text-sm">{languages[active].code}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 sm:h-3.5 sm:w-3.5 ${
            isOpen ? "rotate-180" : ""
          }`}
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

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-1 w-24 origin-top-right transform overflow-hidden rounded-lg shadow-lg transition-all duration-200 ease-out sm:mt-1.5 sm:w-28"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="py-0.5">
            {SUPPORTED_LOCALES.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`flex w-full items-center px-2 py-2 text-xs transition-colors duration-150 sm:px-3 sm:py-2.5 sm:text-sm ${
                  lang === active
                    ? "bg-opacity-10 bg-slate-400 font-semibold"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                onClick={() => changeLocale(lang)}
                disabled={lang === active}
              >
                <span className="mr-2 text-base sm:mr-2.5 sm:text-lg">{languages[lang].flag}</span>
                {languages[lang].code}
                {lang === active && (
                  <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-sky-500 sm:h-2 sm:w-2"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
