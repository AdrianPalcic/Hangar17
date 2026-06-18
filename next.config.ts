import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  serverExternalPackages: [
    'styled-components',
    'sanity',
    '@sanity/ui',
    '@sanity/icons',
    '@sanity/color',
    '@sanity/vision',
    '@sanity/client',
    '@sanity/image-url',
  ],
  webpack(config, { isServer }) {
    if (!isServer) {
      const reactDir = path.dirname(require.resolve('react/package.json'))
      config.resolve.alias = {
        ...config.resolve.alias,
        react: reactDir,
        'react-dom': path.dirname(require.resolve('react-dom/package.json')),
      }
    }
    return config
  },
}

export default nextConfig
