import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",

  // Explicitly set the project root for standalone builds
  outputFileTracingRoot: path.join(__dirname),

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
