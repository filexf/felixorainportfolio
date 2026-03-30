import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Note: eslint.ignoreDuringBuilds was removed in Next.js 16
  // ESLint is now handled through the eslint.config.js file
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
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
