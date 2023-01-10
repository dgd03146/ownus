/** @type {import('next').NextConfig} */

const withTwin = require('./withTwin');

const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true
});

module.exports = nextConfig;
