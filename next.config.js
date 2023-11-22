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
      ],
    },
}

module.exports = nextConfig
