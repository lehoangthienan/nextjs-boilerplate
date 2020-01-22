/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const { ANALYZE } = process.env;

module.exports = withCSS(
    withSass({
        useFileSystemPublicRoutes: true,
        cssModules: false,
        webpack: (config, { isServer }) => {
            if (ANALYZE) {
                config.plugins.push(new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: isServer ? 8888 : 8889,
                    openAnalyzer: true,
                }));
            }

            config.module.rules.push(
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|otf)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]'
                        }
                    }
                }
            )

            config.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /vi|en/));

            return config;
        },
    }))
