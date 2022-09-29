/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com","api.strapi.io"],
  },
  sentry: {
    hideSourceMaps: false,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: false, 
};

module.exports = withSentryConfig(nextConfig,sentryWebpackPluginOptions)
