import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";


/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // Ignorer les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
