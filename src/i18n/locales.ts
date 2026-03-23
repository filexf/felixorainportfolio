export const SUPPORTED_LOCALES = ["en", "fr", "es"] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "fr"

export function resolveLocale(value: string | undefined): Locale {
  const code = (value ?? "").slice(0, 2).toLowerCase()
  return (SUPPORTED_LOCALES as readonly string[]).includes(code) ? (code as Locale) : DEFAULT_LOCALE
}
