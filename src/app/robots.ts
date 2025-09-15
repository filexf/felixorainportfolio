import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Vous pouvez ajouter des règles de disallow si vous avez des pages que vous ne voulez pas indexer
        disallow: [
          "/icons/",           // ✅ Bloque tous les dossiers d'icônes
          "/favicon.ico",      // ✅ Bloque le favicon principal
          // "/*.png$",           // ✅ Bloque tous les fichiers PNG
          "/*.ico$",           // ✅ Bloque tous les fichiers ICO
          // "/*.svg$",           // ✅ Bloque tous les fichiers SVG (si icônes)
        ],
      },
    ],
    sitemap: "https://www.felix-orain.com/sitemap.xml",
    host: "https://www.felix-orain.com",
  };
}
