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
      "fitabsolute-server.s3.us-east-1.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fitabsolute-server.s3.us-east-1.amazonaws.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
