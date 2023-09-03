/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    }
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    API_IMAGE: process.env.API_IMAGE
  }
};
