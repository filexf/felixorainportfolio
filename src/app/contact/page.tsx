// src/app/contact/page.tsx

import { Metadata } from "next"
import ContactPage from "@/components/page-components/ContactPage"

export const metadata: Metadata = {
  title: "Contact - Devis Gratuit",
  description:
    "Contactez Félix Orain pour vos projets de développement web et photographie à Rennes, Bretagne. Devis gratuit, conseils personnalisés et réponse rapide garantie. Spécialiste Next.js, React et photographie événementielle.",
  keywords: [
    "contact Félix Orain",
    "devis gratuit développement web",
    "photographe Rennes contact",
    "développeur web Bretagne",
    "projet Next.js Rennes",
    "photographie événementielle contact",
    "freelance développeur Rennes",
    "contact photographe professionnel",
    "devis site web Bretagne",
    "consultation développement",
    "services web Rennes",
    "portfolio contact",
  ],
  openGraph: {
    title: "Contact - Félix Orain | Développeur Web & Photographe Rennes",
    description:
      "Parlons de votre projet ! Devis gratuit pour développement web (Next.js, React) et photographie professionnelle en Bretagne. Réponse rapide garantie.",
    images: [
      {
        url: "/images/Important-photos/photo-profil-V2.jpg",
        width: 1200,
        height: 630,
        alt: "Félix Orain - Développeur Web et Photographe à Rennes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Félix Orain | Développeur & Photographe Rennes",
    description:
      "Devis gratuit pour vos projets web et photo en Bretagne. Spécialiste Next.js et photographie événementielle.",
    images: ["/images/Important-photos/photo-profil-V2.jpg"],
  },
  alternates: {
    canonical: "https://www.felix-orain.com/contact",
  },
}

export default function Contact() {
  return <ContactPage />
}
