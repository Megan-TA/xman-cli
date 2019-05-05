var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
const path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const InsertScriptWebpackPlugin = require('./webpack/InsertScriptWebpackPlugin')

const clientHotUpdate = path.join(__dirname, '/dev-client.js')

const sourcePath = process.cwd()

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  baseWebpackConfig.entry[name] = [clientHotUpdate].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: sourcePath + '/public/index.html',
      inject: true,
      chunksSortMode: 'none'
    //   chunksSortMode: 'dependency'
    }),

    new FriendlyErrorsPlugin(),

    new InsertScriptWebpackPlugin()

  ]
})
