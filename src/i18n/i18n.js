import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const translations = { en, fr, es };

export function t(key, lang = "en") {
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
