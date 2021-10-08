const { rewrites } = require('./routes');

const { ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = {
  assetPrefix,
  target: 'serverless',
  webpack5: true,
  assetPrefix,
  
  // Next.js 10+: dynamic URL mapping
  async rewrites() {
    return rewrites;
  },
}
