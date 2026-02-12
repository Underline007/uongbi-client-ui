import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ffbb8e8070154e98a44313af02fff446.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'storage.4ship.vn',
      },
    ],
  },
};

export default nextConfig;
