import { Metadata } from "next"
import SportPhotoPage from "@/components/page-components/photos-page-components/SportPage"

export const metadata: Metadata = {
  title: "Photographe Sport & Parkour",
  description:
    "Photographe spécialisé dans le sport et le parkour à Rennes et en Bretagne. Captation de l'action, mouvements dynamiques, performances athlétiques et adrénaline pure. Portfolio professionnel de photographie sportive avec des tarifs compétitifs.",
  keywords: [
    "photographe sport Rennes",
    "photographe parkour Bretagne",
    "photographie sportive",
    "photos action sport",
    "portfolio sport",
    "photographe athlétisme",
    "photographie parkour",
    "Félix Orain photographe sport",
    "photographe professionnel sport",
    "photographie mouvement",
    "photos sport dynamiques",
    "reportage sportif Rennes",
  ],
  openGraph: {
    title: "Photographe Sport & Parkour à Rennes | Félix Orain",
    description:
      "Capturez l'intensité et la beauté du sport et du parkour à Rennes et en Bretagne. Photographies d'action professionnelles et dynamiques.",
    images: [
      {
        url: "/images/Photos-sport/Photo_dub_roofgap.jpg",
        width: 1200,
        height: 630,
        alt: "Photographie de sport et parkour par Félix Orain à Rennes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Sport & Parkour à Rennes | Félix Orain",
    description:
      "Capturez l'adrénaline et les performances sportives en Bretagne avec des photographies d'action professionnelles.",
    images: ["/images/Photos-sport/sport-parkour-preview.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/sport",
  },
}

export default function Page() {
  return <SportPhotoPage />
}
