const withTwin = require('./withTwin');

const nextConfig = withTwin({
  // <<- `withTwin` 함수 적용
  reactStrictMode: true,
  swcMinify: true
});

module.exports = nextConfig;
