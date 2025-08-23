import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Utiliser une locale par défaut si undefined
  const defaultLocale = locale || "fr";

  return {
    locale: defaultLocale, // ⚠️ IMPORTANT : retourner la locale
    messages: (await import(`../src/messages/${defaultLocale}.json`)).default,
  };
});
