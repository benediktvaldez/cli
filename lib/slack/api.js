const axios = require('axios')
const { jsonToURI } = require('../helpers')

const tokens = (process.env.SLACK_API_TOKEN || '').split(',') || ''
const api = {
  url: 'https://slack.com/api',
  status: _status =>
    new Promise((resolve, reject) => {
      const promiseArray = []
      tokens.map(token =>
        promiseArray.push(
          axios.post(
            `${api.url}/users.profile.set?token=${token}&profile=${jsonToURI(
              _status
            )}`
          )
        )
      )
      Promise.all(promiseArray)
        .then(resArray => {
          let success = true
          resArray.map(res => {
            if (success !== false) {
              success = res.data.ok
            }
          })
          if (success) {
            resolve(_status)
          } else {
            reject()
          }
        })
        .catch(err => resolve(err))
    }),
}

module.exports = api
