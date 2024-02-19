/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ABLY_API_KEY: process.env.ABLY_API_KEY ?? '',
  }
}

export default nextConfig
