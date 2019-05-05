class InsertScriptWebpackPlugin {
  apply (compiler) {
    // const self = this
    if (process.env.NODE_ENV === 'production') return

    if (!compiler.hooks) {
      this.install(compiler)
      return
    }

    compiler.hooks.compilation.tap(
      'InsertScriptWebpackPlugin',
      (compilation) => {
        if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
          compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
            'InsertScriptWebpackPlugin',
            (htmlPluginData) => {
              const {
                assets: { js }
              } = htmlPluginData
              const index = js.indexOf('/base.js')
              const appSourcePathName = js[index]
              js.splice(index, 1)
              js.push(appSourcePathName)
            }
          )
        } else {
          console.log('\n')
          console.log(
            '\x1b[41m%s\x1b[0m',
            'Error:',
            '`insert-script-webpack-plugin` dependent on `html-webpack-plugin`'
          )
        }
      }
    )
  }

  install (compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        (data, cb) => {
          const {
            assets: { js }
          } = data
          const index = js.indexOf('/base.js')
          const appSourcePathName = js[index]
          js.splice(index, 1)
          js.push(appSourcePathName)

          cb(null, data)
        }
      )
    })
  }
}

module.exports = InsertScriptWebpackPlugin
