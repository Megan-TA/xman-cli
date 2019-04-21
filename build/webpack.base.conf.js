var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
// var pkg = require('../package.json')

const sourcePath = process.cwd()

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
//   entry: {
//     app: './src/main.js'
//   },
  entry: config.common.entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: isProd
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    //   '@': resolve('src'),
    //   'src': path.resolve(__dirname, '../src')
    }
  },
  externals: config.common.externals,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg|csv)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: sourcePath,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            'presets': [
              '@babel/preset-env'
            ],
            'plugins': [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      }
    ]
  }
}
