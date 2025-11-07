import { Metadata } from "next"
import ApplicationsPage from "@/components/page-components/ApplicationsPage"

export const metadata: Metadata = {
  title: "Applications Web",
  description:
    "Découvrez mon portfolio de développement web à Rennes : applications React/Next.js, projets full-stack et solutions interactives. Développeur freelance spécialisé en technologies modernes, TypeScript et interfaces utilisateur performantes en Bretagne.",
  keywords: [
    "création de sites web",
    "création d'applications web",
    "création de sites internet",
    "création de sites vitrines",
    "création de sites e-commerce",
    "création de sites blog",
    "développement web Rennes",
    "développeur React Bretagne",
    "Next.js Rennes",
    "freelance développeur Bretagne",
    "TypeScript développeur",
    "full-stack developer Rennes",
    "projets web Bretagne",
    "développeur JavaScript Rennes",
    "interfaces utilisateur",
    "expérience utilisateur",
    "développement moderne",
    "web designer",
    "solutions web interactives",
    "développeur professionnel Rennes",
  ],
  openGraph: {
    title: "Portfolio Développement Web | Félix Orain - Développeur Rennes",
    description:
      "Explorez mes projets de développement web : applications React/Next.js, solutions full-stack et interfaces modernes. Développeur freelance professionnel en Bretagne.",
    images: [
      {
        url: "/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio développement web de Félix Orain - Applications React et Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Développement Web | Félix Orain Développeur Rennes",
    description:
      "Découvrez mes applications web modernes : React, Next.js, TypeScript. Portfolio développeur freelance en Bretagne.",
    images: ["/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/applications",
  },
}

export default function Page() {
  return <ApplicationsPage />
}
