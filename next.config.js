/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['target.scene7.com','placehold.it', 'qph.cf2.quoracdn.net' ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qph.cf2.quoracdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
