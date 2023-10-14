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
};

module.exports = nextConfig;
