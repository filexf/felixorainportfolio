import ApplicationsPage from "../../components/page-components/ApplicationsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications",
  description: "Découvrez mon portfolio de développement web : applications React/Next.js, projets full-stack et solutions interactives. Un savoir-faire technique combinant innovation, performance et design soigné pour des expériences utilisateur exceptionnelles.",
  openGraph: {
    title: "Applications & Développement Web | Félix Orain",
    description: "Découvrez mon portfolio de développement web : applications React/Next.js, projets full-stack et solutions interactives optimisées pour l'expérience utilisateur.",
    images: [
      {
        url: "/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio développement web de Félix Orain",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications & Développement Web | Félix Orain",
    description: "Découvrez mon portfolio de développement web : applications React/Next.js, projets full-stack et solutions interactives.",
    images: ["/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg"],
  },
  keywords: ["développement web", "React", "Next.js", "full-stack", "applications web", "portfolio développeur", "projets tech", "interfaces utilisateur", "expérience utilisateur", "UI/UX"],
};

export default function Page() {
  return <ApplicationsPage />;
}
