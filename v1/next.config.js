const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')

const { ANALYZE } = process.env

const configsCSS = withCSS(
  withSass({
    useFileSystemPublicRoutes: true,
    cssModules: false,
    webpack: (config, { isServer }) => {
      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }))
      }

      config.module.rules.push(
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|otf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        }
      )

      config.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /vi|en/)) // eslint-disable-line

      return config
    },
  })
)

const configOffline = withOffline({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'public/static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/public/static/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
  },
})

module.exports = withPlugins(                                                                                                                      
  [                                                                                                                                                
    [
      configOffline,
    ],
    [
      configsCSS,
    ],
  ],
)


// Analyzer Website
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer({})
