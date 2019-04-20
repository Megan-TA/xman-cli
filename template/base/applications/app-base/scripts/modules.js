const fs = require('fs')
const path = require('path')
let subApplictions = fs.readdirSync(path.join(__dirname, '../../'))

const subPaths = subApplictions
  .filter(name => name.startsWith('app-') && name !== 'app-base')
  .map(name => (`./${name}/main.js`))

console.log(subPaths)

module.exports = subPaths
