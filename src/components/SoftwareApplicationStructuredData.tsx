interface SoftwareApplicationStructuredDataProps {
  applications: Array<{
    name: string;
    description: string;
    url?: string;
    image: string;
    applicationCategory?: string;
    operatingSystem?: string;
    offers?: {
      price?: string;
      priceCurrency?: string;
    };
  }>;
  pageUrl: string;
  author?: string;
}

export default function SoftwareApplicationStructuredData({
  applications,
  pageUrl,
  author = "Félix Orain",
}: SoftwareApplicationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio d'applications web",
    description: "Collection d'applications web développées par Félix Orain",
    url: pageUrl,
    itemListElement: applications.map((app, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: app.name,
        description: app.description,
        url: app.url,
        image: `https://www.felix-orain.com${app.image}`,
        applicationCategory: app.applicationCategory || "WebApplication",
        operatingSystem: app.operatingSystem || "Web",
        author: {
          "@type": "Person",
          name: author,
          jobTitle: "Développeur Web Full-Stack",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rennes",
            addressRegion: "Bretagne",
            addressCountry: "FR",
          },
        },
        ...(app.offers && { offers: app.offers }),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
