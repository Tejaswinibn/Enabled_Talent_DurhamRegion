/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'www.durham.ca'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.durham.ca',
        port: '',
        pathname: '/en/discovering-durham/resources/Images/Maps/**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig