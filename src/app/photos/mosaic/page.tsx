import { Metadata } from "next"
import MosaicPhotoPage from "@/components/page-components/photos-page-components/MosaicPage"

export const metadata: Metadata = {
  title: "Photographe Mosaïques & Patterns",
  description:
    "Photographe spécialisé dans les mosaïques et motifs géométriques à Rennes et en Bretagne. Art urbain, textures architecturales, patterns créatifs et compositions abstraites. Portfolio artistique de photographie conceptuelle avec une approche moderne et créative.",
  keywords: [
    "photographe mosaïques Rennes",
    "photographie patterns Bretagne",
    "art urbain photographie",
    "photos textures architecturales",
    "portfolio mosaïques",
    "photographie abstraite",
    "motifs géométriques",
    "Félix Orain photographe créatif",
    "photographe professionnel art",
    "photographie conceptuelle",
    "compositions créatives",
    "art visuel Rennes",
  ],
  openGraph: {
    title: "Photographe Mosaïques & Patterns à Rennes | Félix Orain",
    description:
      "Explorez l'art des mosaïques et des motifs géométriques à travers une photographie créative et moderne à Rennes et en Bretagne.",
    images: [
      {
        url: "/images/Photos-mosaics/Photos_HK_chill-128.jpg",
        width: 1200,
        height: 630,
        alt: "Photographie de mosaïques et patterns par Félix Orain à Rennes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Mosaïques & Patterns à Rennes | Félix Orain",
    description:
      "Découvrez l'art urbain et les motifs créatifs en Bretagne à travers une photographie artistique et conceptuelle.",
    images: ["/images/Photos-mosaics/Photos_HK_chill-128.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/mosaic",
  },
}

export default function Page() {
  return <MosaicPhotoPage />
}
