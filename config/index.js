var path = require('path')
var packageJson = require('../package.json')

const sourcePath = process.cwd()

const isBase = process.cwd().lastIndexOf('app-base') > -1

const config = require(`${sourcePath}/xman.config`)

const subExternalPath = sourcePath.replace(/\/[\w-]+$/, '/app-base/scripts/subExternal.js')

const subExternal = require(subExternalPath)

let webpackConfig = {
  build: {
    env: require('./prod.env'),
    index: sourcePath + '/dist/index.html',
    assetsRoot: sourcePath + '/dist/',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: true,
    ...config.prod
  },
  dev: {
    env: require('./dev.env'),
    port: 84,
    // openPage: true,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
    ...config.dev
  },
  common: {
    ...config.common
  }
}

if (!isBase) {
    webpackConfig.common.externals = subExternal
}

module.exports = webpackConfig
