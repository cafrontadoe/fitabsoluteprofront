const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "fitabsolute-server.s3.amazonaws.com",
      "raw.githubusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "fitabsolute-server.s3.us-east-1.amazonaws.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
