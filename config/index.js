var path = require('path')
var packageJson = require('../package.json')

const sourcePath = process.cwd()

const config = require(`${sourcePath}/xman.config`)

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/' + packageJson.name + '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false,
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
