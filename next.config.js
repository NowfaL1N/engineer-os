/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready optimizations
  reactStrictMode: true,
  swcMinify: true,
  
  // TypeScript and ESLint checks in production builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig

