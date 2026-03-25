import { cookies } from "next/headers"
import { getRequestConfig } from "next-intl/server"
import { LOCALE_COOKIE_NAME, type Locale, resolveLocale } from "./locales"

export default getRequestConfig(async () => {
  const locale: Locale = resolveLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)

  // Import all translation files for the locale
  const layouts = (await import(`../messages/${locale}/layouts.json`)).default
  const homepage = (await import(`../messages/${locale}/homepage.json`)).default
  const photos = (await import(`../messages/${locale}/photos.json`)).default
  const books = (await import(`../messages/${locale}/books.json`)).default
  const applications = (await import(`../messages/${locale}/applications.json`)).default
  const contact = (await import(`../messages/${locale}/contact.json`)).default

  // Combine all translations into a single object
  const messages = {
    ...layouts,
    ...homepage,
    ...photos,
    ...books,
    ...applications,
    ...contact,
  }

  return {
    locale,
    messages,
  }
})
