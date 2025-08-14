import "../styles/globals.css";
import Providers from "../components/Providers";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { title, description } from "../lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Métadonnées de base
  metadataBase: new URL("https://felix-orain.com"), // Remplacez par votre domaine réel

  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,

  // Favoris et icônes
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  // Métadonnées pour les moteurs de recherche
  keywords: [
    "développeur web",
    "full stack",
    "react",
    "next.js",
    "photographie",
    "design",
    "portfolio",
  ],
  authors: [{ name: "Félix Orain" }],
  creator: "Félix Orain",
  publisher: "Félix Orain",

  // Contrôle des robots d'indexation
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Contrôle du référencement
  alternates: {
    canonical: "https://felixorain.com",
    languages: {
      "fr-FR": "https://felixorain.com/fr",
      "en-US": "https://felixorain.com/en",
      "es-ES": "https://felixorain.com/es",
    },
  },

  // Métadonnées Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://felixorain.com",
    title: "Félix Orain - Portfolio",
    description:
      "Portfolio de Félix Orain - Développeur web, photographe et designer basé à Paris",
    siteName: "Félix Orain Portfolio",
    images: [
      {
        url: "https://felixorain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Félix Orain Portfolio Preview",
      },
    ],
  },

  // Métadonnées Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Félix Orain - Portfolio",
    description:
      "Portfolio de Félix Orain - Développeur web, photographe et designer",
    images: ["https://felixorain.com/twitter-image.jpg"],
    creator: "@votreidentifianttwitter",
  },

  // Manifeste d'application web
  manifest: "https://felixorain.com/manifest.json",

  // Autres métadonnées
  formatDetection: {
    telephone: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="light scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="text-sm sm:text-base md:text-xl">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
