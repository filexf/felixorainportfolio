import PhotosPage from "../../components/page-components/PhotoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "Découvrez mon portfolio de photographie : paysages, portraits, événements et photos urbaines. Une vision unique capturée à travers mon objectif de photographe passionné.",
  alternates: {
    canonical: "https://felix-orain.com/photos",
  },
  openGraph: {
    title: "Photographie | Félix Orain",
    description: "Découvrez mon portfolio de photographie : paysages, portraits, événements et photos urbaines. Une vision unique capturée à travers mon objectif de photographe passionné.",
    images: [
      {
        url: "/images/Photos-landscape/Tests photos USA-147.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de photographie de Félix Orain",
      },
    ],
  },
};

export default function Page() {
  return <PhotosPage />;
}
