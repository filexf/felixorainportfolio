import { GridBackground } from "@/components/GridBackground";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://www.felix-orain.com"), // Remplacez par votre domaine réel
  title: {
    default: "Félix Orain - Développeur Web & Photographe à Rennes",
    template: `%s | Félix Orain - Développeur & Photographe Rennes`,
  },
  description:
    "Développeur fullstack et photographe professionnel basé à Rennes, Bretagne. Spécialisé en Next.js, React, Tailwind CSS et photographie événementielle. Services sur mesure pour particuliers et entreprises.",

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
    apple: [{ url: "/icons/Favicons/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Métadonnées pour les moteurs de recherche (enrichies)
  keywords: [
    "développeur web Rennes",
    "photographe Rennes",
    "développeur fullstack Bretagne",
    "Next.js React Rennes",
    "photographe mariage Rennes",
    "photographie événementielle Bretagne",
    "développeur freelance Rennes",
    "portfolio créatif Rennes",
    "photographe sport Bretagne",
    "développement web moderne",
    "Tailwind CSS Rennes",
    "Ruby on Rails développeur",
    "Félix Orain photographe",
    "freelance web Bretagne",
  ],
  authors: [{ name: "Félix Orain", url: "https://www.felix-orain.com" }],
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
    canonical: "https://www.felix-orain.com",
  },

  // Métadonnées Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://www.felix-orain.com",
    title: "Félix Orain - Développeur Web & Photographe à Rennes",
    description:
      "Développeur fullstack et photographe professionnel basé à Rennes, Bretagne. Services sur mesure pour particuliers et entreprises.",
    siteName: "Félix Orain - Portfolio",
    images: [
      {
        url: "https://www.felix-orain.com/Profile_Picture-Felix_Orain.webp",
        width: 1200,
        height: 630,
        alt: "Portrait de Félix Orain - Développeur web et photographe professionnel basé à Rennes",
      },
      {
        url: "https://www.felix-orain.com/Profile_Picture-Felix_Orain.webp",
        width: 1080,
        height: 1080,
        alt: "Portrait de Félix Orain - Développement web et photographie",
      },
    ],
  },

  // Métadonnées Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Félix Orain - Développeur Web & Photographe à Rennes",
    description:
      "Développeur fullstack et photographe professionnel basé à Rennes, Bretagne. Spécialisé en Next.js, React et photographie événementielle.",
    images: [
      {
        url: "https://www.felix-orain.com/Profile_Picture-Felix_Orain.webp",
        width: 1200,
        height: 630,
        alt: "Portrait de Félix Orain - Développeur web et photographe professionnel",
      },
    ],
    creator: "@felixorain", // Remplace par ton vrai handle Twitter
    site: "@felixorain",
  },

  // Manifeste d'application web
  manifest: "/manifest.json",

  // Autres métadonnées
  formatDetection: {
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="light text-base md:text-xl">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="relative min-h-screen w-full">
              <div className="absolute inset-0 z-[-1]">
                <GridBackground />
              </div>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="w-full flex-grow">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
