module.exports = {
  "*.{ts,tsx,js}": [
    'yarn lint'
  ],
  "src/**/*.{css,scss,sass}": [
    'yarn stylelint'
  ],
  "styled.ts": [
    'yarn stylelint'
  ]
}