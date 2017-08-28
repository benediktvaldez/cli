const meow = require('meow')

const slack = require('./slack')
const { start, succeed, fail } = require('./helpers')

const at = (input, flags) => slack.status(input[1] || '')

const cli = meow({
  help: `
    Usage
      $ b <command> <input>

    Commands
      at         Update slack status to express where I'm at
  `,
})

start()

switch (cli.input[0]) {
  case 'at':
    at(cli.input, cli.flags)
      .then(status => succeed(`New status: ${status.status_text}`))
      .catch(err => fail(err))
    break
  default:
    cli.showHelp()
    break
}

module.exports = cli
