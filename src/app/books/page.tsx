import BooksPage from "@/components/page-components/BooksPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livres & Magazines",
  description:
    "Découvrez mes créations de magazines et livres design : Civilisation Magazine et Wizzy en Asie. Portfolio de design graphique, mise en page créative et direction artistique à Rennes. Expertise en édition, typographie et identité visuelle.",
  keywords: [
    "design magazine Rennes",
    "création livre design",
    "mise en page créative",
    "graphisme éditorial",
    "portfolio design graphique",
    "direction artistique Bretagne",
    "Civilisation Magazine",
    "Wizzy en Asie magazine",
    "édition graphique",
    "typographie créative",
    "identité visuelle",
    "design éditorial Rennes",
    "maquettage professionnel",
    "création graphique Bretagne",
    "designer graphique freelance",
  ],
  openGraph: {
    title:
      "Livres & Magazines Design | Félix Orain - Designer Graphique Rennes",
    description:
      "Portfolio de design graphique et éditorial : magazines Civilisation et Wizzy en Asie. Création, mise en page et direction artistique professionnelle en Bretagne.",
    images: [
      {
        url: "/images/Couvertures magazines/Civilisation Mag.jpg",
        width: 1200,
        height: 630,
        alt: "Magazine Civilisation - Design graphique par Félix Orain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Graphique & Magazines | Félix Orain Rennes",
    description:
      "Découvrez mes créations de magazines et design éditorial : Civilisation et Wizzy en Asie. Portfolio design graphique professionnel.",
    images: ["/images/Couvertures magazines/Civilisation Mag.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/books",
  },
};

export default function Page() {
  return <BooksPage />;
}
