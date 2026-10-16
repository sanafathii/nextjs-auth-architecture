import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "minio-classbon.darkube.app",
      },
    ],
  },
};

export default nextConfig;
