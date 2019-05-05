var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// var SshWebpackPlugin = require('ssh-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const InsertCssForChildEntry = require('./webpack/InsertCssForChildEntry')

const sourcePath = process.cwd()

const APPNAME = sourcePath.match(/app-\w+/)[0]

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    library: APPNAME,
    libraryTarget: 'umd',
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name].[chunkhash:6].js'),
    publicPath: `/${APPNAME}/`,
    chunkFilename: utils.assetsPath('[id].[chunkhash:6].js')
  },
  plugins: [

    // new InsertCssForChildEntry(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     output: {
    //       comments: false,
    //       beautify: false
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_console: true
    //     }
    //   }
    // }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      deepChildren: true,
      minChunks: function (module) {
        return (
          module.resource &&
                    /\.js$/.test(module.resource) &&
                    /node_modules/.test(module.resource)
        )
      }
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   chunks: ['app'],
    //   filename: '[name].js'
    // })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'lib',
    //   minChunks: function (module) {
    //     console.log('lib: ', module.resource)
    //     return (
    //       module.resource &&
    //                 /\.js$/.test(module.resource) &&
    //                 /(vue-router|vuex|moment)/.test(module.resource)
    //     )
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
