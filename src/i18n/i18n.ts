import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

export type SupportedLanguage = "en" | "fr" | "es";

interface Translations {
  [key: string]: any;
}

const translations: Record<SupportedLanguage, Translations> = { en, fr, es };

export function t(key: string, lang: SupportedLanguage = "en"): string {
  const keys = key.split(".");
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value || key;
}
