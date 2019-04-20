var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// var SshWebpackPlugin = require('ssh-webpack-plugin')

var packageJson = require('../package.json')


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
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        publicPath: '/' + packageJson.name + '/',
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            sourceMap: false,
            comments: false
        }),
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
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            // filename: config.build.index,
            filename: 'index.html',
            template: 'management/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // chunks: ['app'],
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),

        new webpack.HashedModuleIdsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-vendor',
            deepChildren: true,
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    /node_modules/.test(module.resource)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-html2canvas',
            deepChildren: true,
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    /html2canvas/.test(module.resource)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-element-china-area-data',
            deepChildren: true,
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    /element-china-area-data/.test(module.resource)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    /(vue-router|vuex|moment)/.test(module.resource)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),


        // new SshWebpackPlugin({
        //     // 开发环境
        //     // host: '192.168.9.81',
        //     // 测试环境
        //     // host: '10.64.60.100',

        //     host: '10.64.60.99',

        //     port: '22',
        //     username: 'root',
        //     password: 'hoopchina',//or use privateKey login(privateKey: require('fs').readFileSync('/path/to/private/key')).
        //     from: path.resolve(__dirname, '../dist/'),
        //     to: '/web/management',//important: If the 'cover' of value is false,All files in this folder will be cleared before starting deployment.
        // }),
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
