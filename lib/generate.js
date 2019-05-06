const path = require('path')
const Metalsmith = require('metalsmith')
const chalk = require('chalk')
const render = require('consolidate').handlebars.render

const ask = require('./ask')

function generate (opts, cb) {
  let { sub, name, dest } = opts
  let metalsmith = sub
    ? Metalsmith(path.join(__dirname, '../remote-template/template/sub'))
    : Metalsmith(path.join(__dirname, '../remote-template/template/base'))
    // 子项目配置项
    const metaOptions = require(path.join(__dirname, '../remote-template/template/meta.js'))
  Object.assign(metalsmith.metadata(), {
    name
  })
  if (sub) {
    metalsmith.use(askQuestion(metaOptions.prompts))
  }
  metalsmith
    .use(renderTemplateFiles(opts))
    .source('.') // start from template root instead of `./src` which is Metalsmith's default for `source`
    // .use(askQuestion(metaOptions.prompts))
    .destination(dest)
    .build((err, files) => {
      if (err) {
        console.log(err)
        return
      }
      cb()
    })
}

function askQuestion (prompts) {
    return (files, metalsmith, done) => {
        ask(prompts, metalsmith.metadata(), done)
    }
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
