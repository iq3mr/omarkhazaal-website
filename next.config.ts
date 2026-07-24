import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 31536000,

    deviceSizes: [
      320,
      420,
      640,
      768,
      1024,
      1280,
      1536,
      1920,
    ],

    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
    ],
  },
};

export default nextConfig;