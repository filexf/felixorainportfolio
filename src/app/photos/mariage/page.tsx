import { Metadata } from "next"
import WeddingPhotoPage from "@/components/page-components/photos-page-components/WeddingPage"

export const metadata: Metadata = {
  title: "Photographe de Mariage en Bretagne",
  description:
    "Photographe professionnel spécialisé dans les mariages en Bretagne. Captation d'émotions authentiques, reportages élégants et naturels, souvenirs intemporels de votre journée unique. Je vous proposerais des prix abordables. Découvrez mon portfolio et racontez-moi votre histoire d'amour.",
  keywords: [
    "photographe mariage Bretagne",
    "mariage en Bretagne",
    "photographe mariage Rennes",
    "photographe mariage professionnel",
    "photographe mariage pas cher",
    "photographe cérémonie",
    "reportage mariage",
    "photos mariage authentiques",
    "portfolio mariage",
    "Félix Orain photographe",
    "photographe professionnel mariage",
    "photographe mariage haut de gamme",
  ],
  openGraph: {
    title: "Photographe de Mariage à Rennes | Félix Orain",
    description:
      "Immortalisez les émotions de votre mariage à Rennes et en Bretagne avec des photos authentiques et intemporelles.",
    images: [
      {
        url: "/images/Photos-wedding/Wedding_photos_14.jpg",
        width: 1200,
        height: 630,
        alt: "Photographie de mariage par Félix Orain à Rennes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe de Mariage à Rennes | Félix Orain",
    description:
      "Immortalisez les émotions de votre mariage en Bretagne avec des photographies authentiques.",
    images: ["/images/Photos-wedding/Wedding_photos_14.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/mariage",
  },
}

export default function Page() {
  return <WeddingPhotoPage />
}
