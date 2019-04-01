const path = require('path')
const Metalsmith = require('metalsmith')
const chalk = require('chalk')
const render = require('consolidate').handlebars.render

function generate (opts, cb) {
  let { sub, name, dest } = opts
  let metalsmith = sub
    ? Metalsmith(path.join(__dirname, '../template/sub'))
    : Metalsmith(path.join(__dirname, '../template/base'))
  Object.assign(metalsmith.metadata(), {
    name
  })
  metalsmith
    .source('.') // start from template root instead of `./src` which is Metalsmith's default for `source`
    .use(renderTemplateFiles(opts))
    .destination(dest)
    .build((err, files) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(chalk.yellow('模版生成成功！'))
      cb()
    })
}

function renderTemplateFiles (opts) {
  return (files, metalsmith, done) => {
    let fileKeys = Object.keys(files)
    let data = metalsmith.metadata()
    return new Promise((resolve, reject) => {
      // 基类模板
      if (!opts.sub) {
        done()
        return
      }
      // 子类模板
      fileKeys.forEach(item => {
        if (item === 'package.json') {
          let json = files[item].contents.toString()
          render(json, data, (err, res) => {
            if (err) {
              console.log(err)
              return
            }
            files[item].contents = Buffer.from(res)
            resolve(done())
          })
        }
      })
    })
  }
}

module.exports = generate
