"use client"

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, type Locale, resolveLocale } from "@/i18n/locales"

const cookieOpts = { path: "/", sameSite: "lax" as const, expires: 365 }

function saveLocaleCookie(locale: Locale) {
  Cookies.set(LOCALE_COOKIE_NAME, locale, cookieOpts)
}

const localeLabels: Record<Locale, { short: string; flag: string }> = {
  fr: { short: "FR", flag: "🇫🇷" },
  en: { short: "EN", flag: "🇬🇧" },
}

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(DEFAULT_LOCALE)
  const { darkMode } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const raw = Cookies.get(LOCALE_COOKIE_NAME)
    const resolved = resolveLocale(raw)
    setCurrentLocale(resolved)
    if (!raw) {
      saveLocaleCookie(resolved)
      router.refresh()
    }
  }, [router])

  /** Locale cible : l'opposée de la locale active */
  const targetLocale: Locale = currentLocale === "fr" ? "en" : "fr"
  const { flag, short } = localeLabels[targetLocale]

  const switchToTarget = () => {
    setCurrentLocale(targetLocale)
    saveLocaleCookie(targetLocale)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={switchToTarget}
      className={`flex items-center justify-center gap-1 rounded-full px-2 py-2 text-xs font-semibold shadow-sm transition-all duration-200 hover:shadow-md sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm ${
        darkMode
          ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
          : "bg-black/[0.06] text-slate-800 hover:bg-black/[0.1]"
      }`}
      aria-label={targetLocale === "fr" ? "Afficher le site en français" : "Show site in English"}
    >
      <span className="text-sm sm:text-base" aria-hidden>
        {flag}
      </span>
      <span>{short}</span>
    </button>
  )
}
