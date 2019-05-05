
const fs = require('fs')

let cssNames = fs.readdirSync('./applications/app-customer/dist/css')
  .filter(name => /css$/.test(name))
let sourceString = fs.readFileSync('./applications/app-customer/dist/app-customer.097b2f.js', 'utf-8')

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

fs.writeFileSync('./applications/app-customer/dist/app-customer.097b2f.js', sourceString, 'utf-8')
