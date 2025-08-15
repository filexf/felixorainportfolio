import WeddingPhotoPage from "@/components/page-components/photos-page-components/WeddingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photographe de Mariage",
  description:
    "Photographe spécialisé dans les mariages à Rennes et en Bretagne. Captation d'émotions authentiques, reportages élégants et naturels, souvenirs intemporels de votre journée unique. Je propose des prix abordables et pas chers. Découvrez mon portfolio et racontez-moi votre histoire d'amour.",
  keywords: [
    "photographe mariage Rennes",
    "photographe mariage Bretagne",
    "reportage mariage",
    "photos mariage authentiques",
    "portfolio mariage",
    "mariage en Bretagne",
    "photographe cérémonie",
    "Félix Orain photographe",
    "photographe professionnel mariage",
    "photographe mariage haut de gamme",
    "photographe mariage pas cher"
  ],
  openGraph: {
    title: "Photographe de Mariage à Rennes | Félix Orain",
    description:
      "Immortalisez les émotions de votre mariage à Rennes et en Bretagne avec des photographies authentiques et intemporelles. Portfolio et disponibilités.",
    images: [
      {
        url: "/images/wedding/mariage-rennes-preview.jpg",
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
    images: ["/images/wedding/mariage-rennes-preview.jpg"],
  },
  alternates: {
    canonical: "https://felix-orain.com/photos/wedding",
  },
};

export default function Page() {
  return <WeddingPhotoPage />;
}
