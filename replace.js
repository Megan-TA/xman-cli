const fs = require('fs')

let htmlString = fs.readFileSync('./dist/index.html', 'utf-8')

let finalEntryString = fs.readdirSync('./dist')
  .filter(name => name.startsWith('app-'))
  .reduce((prev, name) => {
    let tmpl = '<script type=text/javascript src=${0}/${3}></script><script type=text/javascript src=${0}/${1}></script>'
    let allChildEntryNames = fs.readdirSync(`./dist/${name}/`)
    let childAppEntry = allChildEntryNames.filter(childName => childName.startsWith('app-'))[0]
    let finalScript = tmpl.replace(/\$\{0\}/g, '/' + childAppEntry.match(/app-\w+/)[0])
      .replace(/\$\{1\}/g, childAppEntry)

    let vendorEntry = allChildEntryNames.filter(childName => childName.startsWith('vendor'))[0]
    finalScript = finalScript.replace(/\$\{3\}/, vendorEntry)

    return prev + finalScript
  }, '')

//   return
// let endTagReg = /<script type=text\/javascript src=\/js\/base\.\w+\.js><\/script><\/body><\/html>/

let endTagReg = /<script src=https:\/\/unpkg.com\/element-ui\/lib\/index\.js><\/script>/

let replaceHtmlString = htmlString.replace(endTagReg, ($0) => {
  return $0 + finalEntryString
//   return finalEntryString + $0
})

fs.writeFileSync('./dist/index.html', replaceHtmlString, 'utf-8')
