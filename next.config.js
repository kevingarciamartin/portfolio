/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  // You might need to add other configurations here if necessary
};

module.exports = nextConfig;
