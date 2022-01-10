module.exports = {
  devServer: { open: true },
  publicPath: '/',

  outputDir: 'docs',

  css: { loaderOptions: { scss: { prependData: '@import "~@/assets/styles/index.scss";' } } },
};
