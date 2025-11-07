interface ImageGalleryStructuredDataProps {
  title: string;
  description?: string;
  images: Array<{
    src: string;
    title: string;
  }>;
  pageUrl: string;
}

export default function ImageGalleryStructuredData({
  title,
  description,
  images,
  pageUrl,
}: ImageGalleryStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: title,
    description: description || `Galerie de photographies : ${title}`,
    url: pageUrl,
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `https://www.felix-orain.com${img.src}`,
      name: img.title,
      description: img.title,
    })),
    creator: {
      "@type": "Person",
      name: "Félix Orain",
      jobTitle: "Photographe Professionnel",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rennes",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
    },
    copyrightHolder: {
      "@type": "Person",
      name: "Félix Orain",
    },
    license: "https://www.felix-orain.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
