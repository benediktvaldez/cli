const chalk = require('chalk')
const ora = require('ora')

const helpers = {
  jsonToURI: json => encodeURIComponent(JSON.stringify(json)),
  uriToJSON: urijson => JSON.parse(decodeURIComponent(urijson)),
}
helpers.spinner = {}
helpers.start = () => {
  helpers.spinner = ora().start()
  helpers.spinner.text = 'Hold on 🤔'
}
helpers.succeed = message => helpers.spinner.succeed(`Success! 😎  ${message}`)
helpers.fail = data => helpers.spinner.fail('Fail! 😱') && console.log(data)

module.exports = helpers
