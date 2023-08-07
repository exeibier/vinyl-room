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
          {
            protocol:'https',
            hostname:'v5.airtableusercontent.com',
            pathname:'/v1/19/19/1691460000000/**'
          }
        ],
      },
}

module.exports = nextConfig
