/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 923855835,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "e54e4381a3ae74c78165da740cfb9698",
  },
  images: {
    // Add the address of storage for images...
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
