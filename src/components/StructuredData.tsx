export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Félix Orain",
    jobTitle: "Développeur Web et Photographe",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rennes",
      addressRegion: "Bretagne",
      addressCountry: "FR",
    },
    telephone: "+33778764454",
    email: "felix.orain@gmail.com",
    url: "https://www.felixorain.com",
    sameAs: [
      "https://github.com/filexf",
      "https://www.linkedin.com/in/felix-orain/",
      "https://www.instagram.com/_filex_/",
    ],
    knowsAbout: [
      "Développement Web",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Photographie",
      "Ruby on Rails",
      "Photographie de mariage",
      "Photographie de sport",
      "Architecture web",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Rennes et région Bretagne",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Développeur Web Freelance et Photographe",
      occupationLocation: {
        "@type": "City",
        name: "Rennes",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
