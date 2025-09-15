import PhotosPage from "@/components/page-components/PhotoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Photos",
  description:
    "Découvrez mon portfolio de photographie professionnelle : paysages époustouflants, sport dynamique, mariages authentiques, cityscapes urbains et créations artistiques. Photographe professionnel basé à Rennes, Bretagne, spécialisé dans la captation d'émotions et de moments uniques.",
  keywords: [
    "portfolio photographie Rennes",
    "photographe professionnel Bretagne",
    "photographie paysage",
    "photographe mariage Rennes",
    "photographie sport",
    "photos urbaines cityscape",
    "photographe événementiel",
    "photographie créative",
    "reportage photo Bretagne",
    "photographe Rennes portfolio",
    "photos professionnelles",
    "photographie artistique",
    "galerie photo Rennes",
    "photographe freelance Bretagne",
  ],
  openGraph: {
    title:
      "Portfolio Photographie | Félix Orain - Photographe Professionnel Rennes",
    description:
      "Explorez mon univers photographique : paysages, sport, mariages, cityscapes et créations artistiques. Portfolio professionnel de photographie en Bretagne.",
    images: [
      {
        url: "/images/Photos-landscape/Tests photos USA-147.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de photographie professionnelle de Félix Orain - Paysages et créations artistiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Photographie | Félix Orain Photographe Rennes",
    description:
      "Découvrez mon portfolio photo : paysages, sport, mariages et créations artistiques. Photographe professionnel en Bretagne.",
    images: ["/images/Photos-landscape/Tests photos USA-147.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos",
  },
};

export default function Page() {
  return <PhotosPage />;
}
