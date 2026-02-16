import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    // Force Turbopack to use this app's root (and local node_modules/.env)
    root: process.cwd(),
  },
};

export default nextConfig;
