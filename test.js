const Luxafor = require('luxafor-api')
// api call to change the color
let opts = {
  defaults: {
    wave: {
      type: 2,
      speed: 90,
      repeat: 5,
    },
  },
}
device = new Luxafor(opts)
console.log(device.getTargets().getLedByNumber())
