import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Vous pouvez ajouter des règles de disallow si vous avez des pages que vous ne voulez pas indexer
        // disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: "https://felix-orain.com/sitemap.xml",
    host: "https://felix-orain.com",
  };
}
