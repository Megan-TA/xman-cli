const fs = require('fs')

// const process.cwd() + '/'

// console.log(process.cwd())

class InsertCssForChildEntry {
  apply (compiler) {
    compiler.plugin('after-emit', (compilation, cb) => {
      let entryFileName
      let cssFileName
      for (var fileName in compilation.assets) {
        if (entryFileName && cssFileName) break
        if (/^css\/[\w\.\-]+css$/.test(fileName)) {
          cssFileName = fileName
        }
        if (/^app-[\w\.]+js$/.test(fileName)) {
          entryFileName = fileName
        }
      }

      //   compilation.assets[entryFileName]

      //   compilation.assets[entryFileName].source()

      //   let _source = compilation.assets[entryFileName].source

      //   compilation.assets[entryFileName] = new ConcatSource(
      //     '2222',
      //     compilation.assets[entryFileName]
      //   )

      console.log(compilation.assets[entryFileName], cssFileName)
    })
  }
}

module.exports = InsertCssForChildEntry
