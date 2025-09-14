/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  // server: {
  //   host: '0.0.0.0'
  // },
  // allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig
