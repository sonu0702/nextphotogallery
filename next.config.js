/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  experimental: { images: { layoutRaw: true } },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
})

module.exports = nextConfig
