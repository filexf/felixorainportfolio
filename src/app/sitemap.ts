import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.felix-orain.com";

  // Structure avec priorités et fréquences personnalisées
  const pages = [
    // Page d'accueil - priorité maximale
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },

    // Pages principales - Niveau 1
    {
      path: "/applications",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/photos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/books", priority: 0.9, changeFrequency: "monthly" as const },

    // Pages de photographie - Niveau 2
    {
      path: "/photos/landscape",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/photos/cityscape",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/photos/mosaic",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/photos/sport",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/photos/wedding",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    // Pages de livres - Niveau 2
    {
      path: "/books/civilisation",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/books/wizzyenasie",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    {
      path: "/contact",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    // Autres pages (ajoutez-en selon vos besoins)
    // { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  // Génération du sitemap avec les priorités et fréquences définies
  const sitemap: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return sitemap;
}
