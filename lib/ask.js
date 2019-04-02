const inquirer = require('inquirer')



module.exports = (promptOptions = [], data, done) => {
    return inquirer.prompt(promptOptions)
        .then(answers => {
            Object.assign(data, answers)
            done()
        })
        .catch(done)
}
