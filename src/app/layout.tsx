import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "../components/Providers";
import { description, title } from "../lib/constants";
import "../styles/globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "sans-serif"],
});

// Ajout d'une police secondaire (optionnel)
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

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
      {
        url: "/icons/Favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icons/Favicons/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/icons/Favicons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      { url: "/icons/Favicons/apple-touch-icon.png", sizes: "180x180" },
    ],
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
    canonical: "https://felix-orain.com",
    languages: {
      "fr-FR": "https://felix-orain.com/fr",
      "en-US": "https://felix-orain.com/en",
      "es-ES": "https://felix-orain.com/es",
    },
  },

  // Métadonnées Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://felix-orain.com",
    title: "Félix Orain - Portfolio",
    description:
      "Portfolio de Félix Orain - Développeur web, photographe et designer basé à Paris",
    siteName: "Félix Orain Portfolio",
    images: [
      {
        url: "https://felix-orain.com/og-image.jpg",
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
    images: ["https://felix-orain.com/twitter-image.jpg"],
    creator: "@votreidentifianttwitter",
  },

  // Manifeste d'application web
  manifest: "/manifest.json",

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
      className={`light scroll-smooth ${inter.variable} ${poppins.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="text-sm sm:text-base md:text-xl">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
