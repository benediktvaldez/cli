const api = require('./api')

const statuses = {
  default: 'kolibri',
  home: {
    status_text: 'at Home',
    status_emoji: ':house:',
  },
  vacation: {
    status_text: 'on Vacation',
    status_emoji: ':umbrella_on_ground:',
  },
  kolibri: {
    status_text: 'at Kolibri',
    status_emoji: ':kolibri:',
  },
  icelandair: {
    status_text: 'at Icelandair Digital Labs',
    status_emoji: ':icelandair:',
  },
  cafe: {
    status_text: 'at Café',
    status_emoji: ':coffee:',
  },
  sick: {
    status_text: 'sick at home',
    status_emoji: ':face_with_thermometer:',
  },
}

// Shorthand status selectors
statuses.k = statuses.kolibri
statuses.i = statuses.ice = statuses.icelandair
statuses.c = statuses.cafe
statuses.s = statuses.sick

module.exports = _status => {
  const status = statuses.hasOwnProperty(_status)
    ? statuses[_status]
    : statuses[statuses.default]

  return api.status(status)
}
