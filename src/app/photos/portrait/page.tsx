import { Metadata } from "next"
import PortraitPhotoPage from "@/components/page-components/photos-page-components/PortraitPage"

export const metadata: Metadata = {
  title: "Photographe Portrait",
  description:
    "Photographe spécialisé dans les portraits à Rennes et en Bretagne. Captation de la personnalité et de l'expression faciale. Portfolio professionnel de photographie portrait avec une approche artistique et créative.",
  keywords: [
    "photographe portrait Rennes",
    "photographie portrait Bretagne",
    "photos portrait authentiques",
    "portfolio portrait",
    "Félix Orain photographe",
    "photographe professionnel portrait",
    "photographie portrait artistique",
  ],
  openGraph: {
    title: "Photographe Portrait | Félix Orain",
    description:
      "Découvrez les portraits captivants de Félix Orain, photographe professionnel à Rennes. Portfolio de photographie portrait avec une approche artistique et créative.",
    images: ["/images/Photos-portraits/Photos-portraits-4.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Portrait | Félix Orain",
    description:
      "Découvrez les portraits captivants de Félix Orain, photographe professionnel à Rennes. Portfolio de photographie portrait avec une approche artistique et créative.",
    images: ["/images/Photos-portraits/Photos-portraits-4.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/portrait",
  },
}

export default function Page() {
  return <PortraitPhotoPage />
}
