const path = require('path');

module.exports = {
  devServer: { open: true },

  publicPath: process.env.NODE_ENV === ('production' && 'vue3-tsx') || '/',

  outputDir: path.resolve(__dirname, './docs'),

  css: { loaderOptions: { scss: { prependData: '@import "~@/assets/styles/index.scss";' } } },
};
