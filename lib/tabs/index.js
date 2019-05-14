const {promisify} = require('util')
const exec = promisify(require('child_process').exec)

module.exports = (cli) => new Promise(async (resolve, reject) => {
  const results = {
    safari: {
      windows: 0,
      tabs: 0,
    },
    chrome: {
      windows: 0,
      tabs: 0,
    },
    total: {
      windows: 0,
      tabs: 0,
    },
  }
  results.safari.windows = parseInt((await exec('osascript -e \'tell application "Safari" to get count of windows\'')).stdout, 10)
  results.safari.tabs = parseInt((await exec('osascript -e \'tell application "Safari" to get count of tabs of windows\'')).stdout, 10)

  results.chrome.windows = parseInt((await exec('osascript -e \'tell application "Google Chrome" to get count of windows\'')).stdout, 10)
  results.chrome.tabs = parseInt((await exec('osascript -e \'tell application "Google Chrome" to get count of tabs of windows\'')).stdout, 10)

  results.total.windows = results.safari.windows + results.chrome.windows
  results.total.tabs = results.safari.tabs + results.chrome.tabs

  resolve(results)
})
