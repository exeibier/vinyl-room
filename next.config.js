/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v1.tailwindcss.com',
            port: '',
            pathname: '/img/**',
          },
        ],
      },
}

module.exports = nextConfig
