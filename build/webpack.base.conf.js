var path = require('path')
const fs = require('fs')
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

// const isDev = process.env.NODE_ENV === 'development'

// const entry = { app: path.join(__dirname, '/src/main.js') }

// if (isDev) {
//   Object.assign(entry, {
//     child: path.join(__dirname, '../app-customer/src/main.js')
//   })
// }

function findChildEntrys () {
  let rootDirPath = path.join(sourcePath, '../')
  let childDirs = fs.readdirSync(rootDirPath)
  let childMainPath = childDirs
    .filter(name => name.startsWith('app-') && !/app-base/.test(name))
    .map(name => {
      return `${rootDirPath}${name}/src/main.js`
    })
  return childMainPath
}

function finalEntry (entry) {
  let childEntrys = findChildEntrys()
  if (isProd || !childEntrys.length) return entry
  let entrysObject = findChildEntrys().reduce((prev, now) => {
    let name = now.match(/app-(\w+)/)[0]
     prev = {
         ...prev,
         [name]: now
     }
     return prev
  }, {})

  Object.assign(entry, entrysObject)

  return entry
}

module.exports = {
//   entry: {
//     app: './src/main.js'
//   },
  entry: finalEntry(config.common.entry),
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
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../applications/app-base/src')
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
        // include: sourcePath,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            'presets': [
              '@babel/preset-env'
            ],
            'plugins': [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      }
    ]
  },
  plugins: config.common.plugins || []
}
