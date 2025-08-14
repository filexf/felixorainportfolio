import BooksPage from "../../components/page-components/BooksPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design",
  description: "Explorez mes publications et livres de photographie. Des ouvrages alliant narration visuelle et design éditorial, témoignant de mon regard unique sur le monde à travers des projets comme 'Civilisation' et 'Wizzy en Asie'.",
  openGraph: {
    title: "Publications & Livres | Félix Orain",
    description: "Explorez mes publications et livres de photographie. Des ouvrages alliant narration visuelle et design éditorial, témoignant de mon regard unique sur le monde.",
    images: [
      {
        url: "/images/Couvertures magazines/Civilisation Mag.jpg",
        width: 1200,
        height: 630,
        alt: "Livres et publications de Félix Orain",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications & Livres | Félix Orain",
    description: "Explorez mes publications et livres de photographie alliant narration visuelle et design éditorial.",
    images: ["/images/Couvertures magazines/Civilisation Mag.jpg"],
  },
  keywords: ["livres photo", "publications", "design éditorial", "livre Civilisation", "Wizzy en Asie", "photographe auteur", "narration visuelle"],
};

export default function Page() {
  return <BooksPage />;
}
