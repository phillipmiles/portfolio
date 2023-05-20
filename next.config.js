/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(md|mdx)/i,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
