/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
      return [
         {
            source: "/Header",
            destination: "/",
         },
      ];
   },
   experimental: {
      appDir: true,
   },
};

module.exports = nextConfig;
