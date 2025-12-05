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

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
