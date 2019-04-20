const fs = require('fs')
const copy = require('recursive-copy')
const shell = require('shelljs')

if (fs.existsSync('dist')) {
  shell.rm('-r', 'dist')
}

let applications = fs.readdirSync('applications')

applications
  .filter(item => item.startsWith('app-'))
  .map(name => {
    if (name === 'app-base') {
      return {
        src: `applications/${name}/dist`,
        dest: `dist`
      }
    }
    return {
      src: `applications/${name}/dist`,
      dest: `dist/${name}`
    }
  }).forEach(({ src, dest }) => {
      copy(src, dest, (error) => {
        error &&
          console.error('[Copy failed]', `src: ${src}, dest: ${dest}`, error)
      })
    })
