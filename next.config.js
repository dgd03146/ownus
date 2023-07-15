const withTwin = require('./withTwin');

const nextConfig = withTwin({
  // <<- `withTwin` 함수 적용
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
  },
});

module.exports = nextConfig;
