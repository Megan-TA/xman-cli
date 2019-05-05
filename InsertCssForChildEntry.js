
const fs = require('fs')

let cssNames = fs.readdirSync('./applications/app-customer/dist/css')
  .filter(name => /css$/.test(name))

const basePath = process.cwd() + '/applications/app-customer/dist/'

let appPath = fs.readdirSync('./applications/app-customer/dist/').filter(name => name.startsWith('app-'))[0]

let sourceString = fs.readFileSync(basePath + appPath, 'utf-8')

sourceString = `
var cssNames = \`/app-customer/css/${cssNames}\`;
cssNames = cssNames.split(',');
var fragment = document.createDocumentFragment();
for(var i = 0; i<cssNames.length; i++) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssNames[i];
    fragment.appendChild(link);
}
document.getElementsByTagName('head')[0].appendChild(fragment);

` + sourceString

fs.writeFileSync(basePath + appPath, sourceString, 'utf-8')
