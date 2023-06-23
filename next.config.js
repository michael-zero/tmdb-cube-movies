/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['api.themoviedb.org','image.tmdb.org']
  }
}

module.exports = nextConfig
