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
  async redirects() {
    return [
      {
        source: '/spotifygpt',
        destination:
          'https://kevinle.notion.site/SpotifyGPT-2ccf9b847d6248adafb40887f19dad03?pvs=4',
        permanent: true,
      },
      {
        source: '/system-design-capstone',
        destination:
          'https://kevinle.notion.site/System-Design-Capstone-edbbc88d36aa4f9abc6c01855076f110?pvs=4',
        permanent: true,
      },
      {
        source: '/pomodoro',
        destination:
          'https://kevinle.notion.site/Pomodoro-7c1b02980cfd49be83c62b8ff38f7503?pvs=4',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
