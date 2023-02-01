/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["api.strapi.io"],
  },
  sentry: {
    hideSourceMaps: false,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/category/team',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/offerings',
        destination: '/our-offering',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/our-work',
        permanent: true,
      },
      {
        source: '/work/smartwalk',
        destination: '/cases/5',
        permanent: false,
      },
      {
        source: '/e-commerce',
        destination: '/our-work',
        permanent: true,
      },
      {
        source: '/product-end-to-end-product-development',
        destination: '/our-offering',
        permanent: true,
      },
      {
        source: '/work/baja-pack-cloud-based-logistics',
        destination: '/our-work',
        permanent: false,
      },
    ]
  }
}

const sentryWebpackPluginOptions = {
  silent: false, 
};

module.exports = withSentryConfig(nextConfig,sentryWebpackPluginOptions)
