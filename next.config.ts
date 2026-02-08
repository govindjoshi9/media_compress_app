import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable caching in development
  reactStrictMode: true,


  // Improve development experience
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Handle caching issues
  generateEtags: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers to prevent caching issues
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:css|js|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
