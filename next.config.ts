import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [],
    unoptimized: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    // Run ESLint separately via `npm run lint`
    ignoreDuringBuilds: true,
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
