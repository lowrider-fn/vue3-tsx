module.exports = {
  "*.{ts,tsx,js}": [
    'yarn lint'
  ],
  "src/**/*.{css,scss}": [
    'yarn stylelint'
  ]
}