/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    N8N_API_BASE_URL: process.env.N8N_API_BASE_URL,
    N8N_API_KEY: process.env.N8N_API_KEY,
  },
}

module.exports = nextConfig