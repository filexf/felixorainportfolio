export const SUPPORTED_LOCALES = ["fr", "en"] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "fr"

/** Clé du cookie partagée entre le client (LanguageSwitcher) et le serveur (request.ts) */
export const LOCALE_COOKIE_NAME = "MYNEXTAPP_LOCALE"

export function resolveLocale(value: string | undefined): Locale {
  const code = (value ?? "").slice(0, 2).toLowerCase()
  return SUPPORTED_LOCALES.find((l) => l === code) ?? DEFAULT_LOCALE
}
