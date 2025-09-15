import WizzyEnAsiePage from "@/components/page-components/books-page-components/WizzyEnAsiePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizzy en Asie - Magazine Voyage",
  description:
    "Découvrez le magazine 'Wizzy en Asie', création de design graphique et photographie par Félix Orain. Portfolio de design éditorial, mise en page créative et photographies de voyage en Asie.",
  keywords: [
    "Wizzy en Asie magazine",
    "design magazine voyage",
    "photographie Asie",
    "magazine design graphique",
    "reportage photo Asie",
    "design éditorial voyage",
    "mise en page créative",
    "portfolio magazine",
    "photographie de voyage",
    "design graphique Rennes",
    "création magazine Asie",
    "direction artistique voyage",
    "magazine photographique",
    "design éditorial Bretagne",
  ],
  openGraph: {
    title: "Wizzy en Asie Magazine | Félix Orain - Design & Photographie",
    description:
      "Magazine 'Wizzy en Asie' : création complète alliant design graphique et photographie de voyage. Portfolio de design éditorial et reportage photographique en Asie.",
    images: [
      {
        url: "/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg",
        width: 1200,
        height: 630,
        alt: "Magazine Wizzy en Asie - Design graphique et photographie par Félix Orain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wizzy en Asie Magazine | Design & Photo Voyage",
    description:
      "Découvrez le magazine 'Wizzy en Asie' : création design graphique et photographies de voyage. Portfolio créatif complet.",
    images: ["/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/books/wizzyenasie",
  },
};

export default function Page() {
  return <WizzyEnAsiePage />;
}
