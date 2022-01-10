module.exports = {
  devServer: { open: true },
  publicPath: (process.env.NODE_ENV === 'production' && 'vue3-tsx') || '/',

  outputDir: 'docs',

  css: { loaderOptions: { scss: { prependData: '@import "~@/assets/styles/index.scss";' } } },
};
