/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  reactStrictMode: true,
  compiler: { styledComponents: true },
  pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
