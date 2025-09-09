# Messages Organization

This folder contains the internationalization (i18n) files for the portfolio, organized by page for better maintainability.

## Structure

```
src/messages/
├── en/           # English translations
├── fr/           # French translations
├── es/           # Spanish translations
└── [locale]/     # Other locales
    ├── layouts.json      # Navbar, footer, and Not Found page (404)
    ├── homepage.json     # Homepage content (hero, about, cards)
    ├── photos.json       # All photography pages and gallery content
    ├── applications.json # Applications page and project descriptions
    ├── books.json        # Books page and publication details
    └── contact.json      # Contact page and contact form
```

## How it works

The `src/i18n/request.ts` file automatically combines all these JSON files into a single messages object for next-intl to consume.

## Usage in components

You can still use the same next-intl hooks as before:

```tsx
import { useTranslations } from "next-intl";

// For navbar translations
const t = useTranslations("navbar");
const homeText = t("home");

// For homepage content
const tHome = useTranslations("heroSection");
const title = tHome("title");

// For photos content
const tPhotos = useTranslations("photospage");
const photoTitle = tPhotos("title");
```

## Benefits

1. **Better organization**: Each page has its own translation file
2. **Easier maintenance**: Find translations quickly by page
3. **Reduced merge conflicts**: Multiple people can work on different pages
4. **Cleaner structure**: Related translations are grouped together
5. **Scalability**: Easy to add new pages or sections

## Adding new translations

1. Add the key-value pairs to the appropriate JSON file(s)
2. The translations will be automatically available through next-intl
3. No need to modify the `request.ts` file unless adding new files

## Migration

The old single-file structure (`en.json`, `fr.json`, `es.json`) has been replaced with this new organized structure. All existing translation keys remain the same, so no component changes are needed.

## ‼️ To add new files (or new pages) ‼️

‼️ Just add a new json in all languages (so fr, en, es) and don't forget to put it in the request.ts as seen above ‼️
