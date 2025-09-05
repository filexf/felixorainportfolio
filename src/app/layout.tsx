import { GridBackground } from "@/components/GridBackground";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { description, title } from "@/lib/constants";
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
    apple: [{ url: "/icons/Favicons/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Métadonnées pour les moteurs de recherche (enrichies)
  keywords: [
    "développeur web Rennes",
    "développeur full stack",
    "React Next.js",
    "photographe professionnel Rennes",
    "photographie mariage Bretagne",
    "portfolio créatif",
    "développement web moderne",
    "photographe sport",
    "designer web",
    "freelance Rennes",
    "Félix Orain",
    "développeur photographe",
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
    canonical: "https://www.felix-orain.com",
  },

  // Métadonnées Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://www.felix-orain.com",
    title: "Félix Orain - Portfolio | Photographe & Développeur Pro",
    description:
      "Développeur et photographe pro à Rennes. Création web moderne et reportages photos.",
    siteName: "Félix Orain - Portfolio Créatif",
    images: [
      {
        url: "https://www.felix-orain.com/images/Photo-GGB/Photo_GGB_Landing_page.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio de Félix Orain - Développeur web et photographe professionnel basé à Rennes",
      },
      {
        url: "https://www.felix-orain.com/images/og-portfolio-preview.jpg",
        width: 1080,
        height: 1080,
        alt: "Projets créatifs de Félix Orain - Développement web et photographie",
      },
    ],
  },

   // Métadonnées Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Félix Orain - Portfolio | Photographe & Développeur Pro",
    description:
      "Portfolio créatif de Félix Orain : développement web moderne, photographie professionnelle (mariage, sport, paysages) et projets innovants basés à Rennes.",
    images: [
      {
        url: "https://www.felix-orain.com/images/Photo-GGB/Photo_GGB_Landing_page.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio de Félix Orain - Développeur web et photographe professionnel"
      }
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
