import CityscapePage from "@/components/page-components/photos-page-components/CityscapePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photographe Urbain & Cityscape",
  description:
    "Photographe spécialisé dans la photographie urbaine et les cityscapes à Rennes et en Bretagne. Architecture moderne, skylines nocturnes, vie urbaine et ambiances métropolitaines. Portfolio professionnel de photographie urbaine avec une vision contemporaine et dynamique.",
  keywords: [
    "photographe urbain Rennes",
    "photographie cityscape Bretagne",
    "photos architecture urbaine",
    "skyline nocturne",
    "portfolio urbain",
    "photographe ville",
    "architecture moderne",
    "Félix Orain photographe urbain",
    "photographe professionnel ville",
    "photographie métropolitaine",
    "ambiances urbaines",
    "cityscapes Rennes",
  ],
  openGraph: {
    title: "Photographe Urbain & Cityscape à Rennes | Félix Orain",
    description:
      "Explorez l'architecture et les ambiances urbaines à travers une photographie contemporaine et dynamique à Rennes et en Bretagne.",
    images: [
      {
        url: "/images/Photos-cityscape/Photos HK chill-109.jpg",
        width: 1200,
        height: 630,
        alt: "Photographie urbaine et cityscape par Félix Orain à Rennes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Urbain & Cityscape à Rennes | Félix Orain",
    description:
      "Découvrez l'architecture et la vie urbaine en Bretagne à travers une photographie contemporaine et créative.",
    images: ["/images/Photos-cityscape/Photos HK chill-109.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/cityscape",
  },
};

export default function Page() {
  return <CityscapePage />;
}
