const browser = require('webextension-polyfill')
const plugin = {
  keyword: "Gmail",
  subtitle: 'Open Gmail',
  valid: true,
  autocomplete: false,
  action: openGmail,
  icon: {
    path: 'images/gmail-icon.png'
  }
}

async function openGmail() {
  await browser.tabs.create({url: "https://mail.google.com"})
}

module.exports = plugin
