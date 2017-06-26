#!/usr/bin/env node
'use strict'
const meow = require('meow')
const ora = require('ora')

const b = require('./lib')
const { start, succeed, fail } = b.helpers

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
    b
      .at(cli.input, cli.flags)
      .then(status => succeed(`New status: ${status.status_text}`))
      .catch(err => fail(err))
    break
  default:
    cli.showHelp()
    break
}
