const slack = require('./slack')
const helpers = require('./helpers')

const at = (input, flags) => slack.status(input[1] || '')

module.exports = {
  at,
  helpers
}
