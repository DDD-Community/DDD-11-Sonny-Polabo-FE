import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'polabo-contents.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'd3l8obr3u6wg96.cloudfront.net'
      }
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    config.resolve.alias['public'] = path.resolve(__dirname, 'public')

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
