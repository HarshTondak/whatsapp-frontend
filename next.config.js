/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Add the address of storage for images...
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
