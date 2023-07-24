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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      bufferutil: false,
      'utf-8-validate': false
    };
    return config;
  },
}

module.exports = nextConfig
