const Luxafor = require('luxafor-api')

const opts = {
  defaults: {
    wave: {
      type: 2,
      speed: 90,
      repeat: 5,
    },
  },
}
const device = new Luxafor(opts)

module.exports = {
  light: _status => {
    console.log('update light status to ', _status)
    return new Promise((resolve, reject) => {
      console.log('wat', device)
      device.setColor('#fff', 'all')
      resolve(_status)
    })
  },
}
