/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ['localhost'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
        {
         protocol: 'https',
         hostname: 'res.cloudinary.com',
       },
       {
        protocol: 'http',
        hostname: 'localhost',
      },
      ],
    },
}

module.exports = nextConfig
