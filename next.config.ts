import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        // Proxy media requests to backend
        source: "/api/v1/media/:path*",
        destination: `${API_URL}/api/v1/media/:path*`,
      },
    ];
  },
};

export default nextConfig;
