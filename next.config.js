/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.evetech.net']
  },
  eslint:{
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
