export type ThemeType = "light" | "dark"

export type LanguageType = "fr" | "en" | "es"

export interface NavItem {
  name: string
  href: string
  current?: boolean
}
