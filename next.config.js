/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
      images: {
        domains: ['localhost', 'www.durham.ca', 'abican-dd0f.kxcdn.com', 'alis.alberta.ca', 'www.rickhansen.com', 'ridm.net', 'broadview.org', 'disabilityinsider.com', 'indradhanuiitd.in'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.durham.ca',
            port: '',
            pathname: '/en/discovering-durham/resources/Images/Maps/**',
          },
          {
            protocol: 'https',
            hostname: 'www.durham.ca',
            port: '',
            pathname: '/en/images/structure/**',
          },
          {
            protocol: 'https',
            hostname: 'abican-dd0f.kxcdn.com',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'alis.alberta.ca',
            port: '',
            pathname: '/media/**',
          },
          {
            protocol: 'https',
            hostname: 'www.rickhansen.com',
            port: '',
            pathname: '/sites/default/files/**',
          },
          {
            protocol: 'https',
            hostname: 'ridm.net',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'broadview.org',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'disabilityinsider.com',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'indradhanuiitd.in',
            port: '',
            pathname: '/wp-content/uploads/**',
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