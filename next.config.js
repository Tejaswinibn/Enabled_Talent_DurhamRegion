/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
        images: {
          domains: ['localhost', 'www.durham.ca', 'abican-dd0f.kxcdn.com', 'alis.alberta.ca', 'www.rickhansen.com', 'ridm.net', 'broadview.org', 'disabilityinsider.com', 'indradhanuiitd.in', 'www.shutterstock.com', 'img.freepik.com', 'media.istockphoto.com', 'www.stronggo.com', 'ec.europa.eu', 'www.parliament.uk', 'cdn.sourceflow.co.uk'],
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
          {
            protocol: 'https',
            hostname: 'www.shutterstock.com',
            port: '',
            pathname: '/image-photo/**',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/free-photo/**',
          },
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
            port: '',
            pathname: '/id/**',
          },
          {
            protocol: 'https',
            hostname: 'www.stronggo.com',
            port: '',
            pathname: '/sites/default/files/**',
          },
          {
            protocol: 'https',
            hostname: 'ec.europa.eu',
            port: '',
            pathname: '/eurostat/documents/**',
          },
          {
            protocol: 'https',
            hostname: 'www.parliament.uk',
            port: '',
            pathname: '/contentassets/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sourceflow.co.uk',
            port: '',
            pathname: '/variant/**',
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