import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['imgix.cosmicjs.com', 'cdn.cosmicjs.com'],
    unoptimized: true,
  },
};

export default nextConfig;
