/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  images: {
    domains: [
      "s2.googleusercontent.com",
      "s3.us-west-2.amazonaws.com",
      "amazonaws.com",
      "secure.notion-static.com",
      "i.scdn.co",
      "www.google.com"
    ],
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 100,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    largePageDataBytes: 256 * 100000, // 12800KB by default
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: "https://cal.com/yinchiuyu/",
        permanent: true,
      },
    ]
  },
}