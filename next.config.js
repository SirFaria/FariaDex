/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com']
  },
  reactStrictMode: true,
  compiler: { styledComponents: true,
  }
}

module.exports = nextConfig
