import LandscapePage from "@/components/page-components/photos-page-components/LandscapePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photographe Paysages & Nature",
  description:
    "Photographe spécialisé dans les paysages et la nature à Rennes et en Bretagne. Captation de la beauté naturelle, panoramas époustouflants, lumières dorées et atmosphères uniques. Portfolio professionnel de photographie de paysage avec une approche artistique et contemplative.",
  keywords: [
    "photographe paysage Rennes",
    "photographe nature Bretagne",
    "photographie paysage",
    "photos nature panoramiques",
    "portfolio paysages",
    "photographe extérieur",
    "paysages bretons",
    "Félix Orain photographe nature",
    "photographe professionnel paysage",
    "photographie contemplative",
    "lumières naturelles",
    "panoramas Bretagne",
  ],
  openGraph: {
    title: "Photographe Paysages & Nature à Rennes | Félix Orain",
    description:
      "Découvrez la beauté des paysages bretons et de la nature à travers une photographie contemplative et artistique à Rennes et en Bretagne.",
    images: [
      {
        url: "/images/Photos-landscape/Tests photos USA-147.jpg",
        width: 1200,
        height: 630,
        alt: "Photographie de paysage breton par Félix Orain à Rennes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Paysages & Nature à Rennes | Félix Orain",
    description:
      "Explorez la beauté naturelle de la Bretagne à travers une photographie de paysage artistique et contemplative.",
    images: ["/images/Photos-landscape/Tests photos USA-147.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/photos/landscape",
  },
};

export default function Page() {
  return <LandscapePage />;
}
