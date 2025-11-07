import { Metadata } from "next"
import CivilisationPage from "@/components/page-components/books-page-components/CivilisationPage"

export const metadata: Metadata = {
  title: "Magazine Civilisation - Parkour & Voyage",
  description:
    "Découvrez le magazine 'Civilisation', création de design graphique dédiée au film de parkour et aventures du Wizzy Gang. Portfolio de design éditorial, mise en page créative et photographies d'action. Projet alliant direction artistique et univers urbain du parkour.",
  keywords: [
    "Magazine Civilisation",
    "design magazine parkour",
    "Wizzy Gang film",
    "magazine design graphique",
    "parkour adventures design",
    "design éditorial sport",
    "mise en page créative",
    "portfolio magazine",
    "photographie parkour",
    "design graphique Rennes",
    "création magazine sport",
    "direction artistique urbain",
    "magazine photographique",
    "design éditorial Bretagne",
    "sport urbain design",
  ],
  openGraph: {
    title: "Magazine Civilisation | Félix Orain - Design Parkour & Adventures",
    description:
      "Magazine 'Civilisation' : création complète alliant design graphique et univers parkour. Portfolio de design éditorial dédié au film d'aventures du Wizzy Gang.",
    images: [
      {
        url: "/images/Couvertures magazines/Civilisation Mag.jpg",
        width: 1200,
        height: 630,
        alt: "Magazine Civilisation - Design graphique parkour et aventures par Félix Orain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Civilisation | Design Parkour & Adventures",
    description:
      "Découvrez le magazine 'Civilisation' : création design graphique dédiée au parkour et aux aventures urbaines. Portfolio créatif complet.",
    images: ["/images/Couvertures magazines/Civilisation Mag.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/books/civilisation",
  },
}

export default function Page() {
  return <CivilisationPage />
}
