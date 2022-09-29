/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  sentry: {
    hideSourceMaps: false,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  publicRuntimeConfig: {
    appId: process.env.APP_ID,
    host: process.env.HOST,
    restAPIKey: process.env.REST_API_KEY,
 },
}

const sentryWebpackPluginOptions = {
  silent: false, 
};

module.exports = withSentryConfig(nextConfig,sentryWebpackPluginOptions)
