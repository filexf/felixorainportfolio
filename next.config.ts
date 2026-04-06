import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Note: eslint.ignoreDuringBuilds was removed in Next.js 16
  // ESLint is now handled through the eslint.config.js file
  typedRoutes: true,
  experimental: {
    /** Required with typedRoutes so `next-env.d.ts` imports `.next/types/link.d.ts` and `Route` is strict. */
    strictRouteTypes: true,
  },
  images: {
    qualities: [80],
  },
  async redirects() {
    return [
      {
        source: "/photos/wedding",
        destination: "/photos/mariage",
        permanent: true,
      },
      { source: "/books", destination: "/livres-photo", permanent: true },
      {
        source: "/books/civilisation",
        destination: "/livres-photo/civilisation",
        permanent: true,
      },
      {
        source: "/books/wizzyenasie",
        destination: "/livres-photo/wizzy-en-asie",
        permanent: true,
      },
      {
        source: "/photos/landscape",
        destination: "/photos/paysage",
        permanent: true,
      },
      {
        source: "/photos/cityscape",
        destination: "/photos/urbain",
        permanent: true,
      },
      {
        source: "/photos/mosaic",
        destination: "/photos/motif",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
