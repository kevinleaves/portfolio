/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https', // Protocol of the URL (https in this case)
        hostname: 'cdn.sanity.io', // Hostname of the URL
        port: '', // Port number (empty as there's no specific port in the URL)
        pathname: '/images/ep4izq52/production/**', // Pathname pattern based on the provided link
      },
    ],
  },
}

module.exports = nextConfig
