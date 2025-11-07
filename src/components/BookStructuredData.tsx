interface BookStructuredDataProps {
  title: string
  description: string
  coverImage: string
  pageUrl: string
  images?: Array<{
    src: string
    title: string
  }>
  author?: string
  publisher?: string
  datePublished?: string
}

export default function BookStructuredData({
  title,
  description,
  coverImage,
  pageUrl,
  images = [],
  author = "Félix Orain",
  publisher = "Félix Orain",
  datePublished,
}: BookStructuredDataProps) {
  const bookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    description: description,
    url: pageUrl,
    image:
      images.length > 0
        ? [
            `https://www.felix-orain.com${coverImage}`,
            ...images.map((img) => `https://www.felix-orain.com${img.src}`),
          ]
        : `https://www.felix-orain.com${coverImage}`,
    author: {
      "@type": "Person",
      name: author,
      jobTitle: "Designer Graphique et Photographe",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rennes",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    license: "https://www.felix-orain.com",
    ...(datePublished && { datePublished }),
  }

  // Also create ImageGallery structured data for the pages
  const imageGalleryStructuredData =
    images.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${title} - Pages`,
          description: `Pages du magazine ${title}`,
          url: pageUrl,
          image: images.map((img) => ({
            "@type": "ImageObject",
            contentUrl: `https://www.felix-orain.com${img.src}`,
            name: img.title,
            description: img.title,
          })),
          creator: {
            "@type": "Person",
            name: author,
            jobTitle: "Designer Graphique et Photographe",
          },
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData) }}
      />
      {imageGalleryStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageGalleryStructuredData),
          }}
        />
      )}
    </>
  )
}
