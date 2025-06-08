/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'your-cms-domain.com' // Add your image host domains
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'react-tweet'
    ],
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/affiliate/:path*',
        destination: 'https://track.your-affiliate-network.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig