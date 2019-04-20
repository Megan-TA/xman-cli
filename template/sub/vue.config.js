const webpack = require('webpack');
const APP_NAME = require('./package.json').name;
const PORT = require('./package.json').devPort;
const patchCliService = require('./scripts/patch-cli-service');

patchCliService();

log('APP_NAME: ', APP_NAME);

module.exports = {
  publicPath: `/${APP_NAME}/`,

  productionSourceMap: false,

  configureWebpack: {
    externals: {
      vue: 'Vue',
    },

    entry: './src/main.js',

    output: {
      libraryExport: 'default',
      jsonpFunction: `webpackJsonp-${APP_NAME}`,
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_NAME': JSON.stringify(APP_NAME),
      }),
    ],
  },

  devServer: {
    port: PORT,
    disableHostCheck: true
  },
};

function log(label, content, options) {
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', label, content);
}
