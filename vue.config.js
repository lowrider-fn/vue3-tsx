// module.exports = {
//   devServer: { open: true },
//   publicPath: (process.env.NODE_ENV === 'production' && '/vue3-tsx/') || '/',

//   outputDir: 'docs',

//   css: {
//     requireModuleExtension: false,
//     modules: { localIdentName: '[name]-[hash]' },
//     localsConvention: 'camelCaseOnly',
//     // localIdentName: '[path][name]-[local]-[hash:base64:5]',
//     loaderOptions: { scss: { prependData: '@import "~@/assets/styles/index.scss";' } }
//   }
// };
module.exports = {
  devServer: { open: true },
  publicPath: (process.env.NODE_ENV === 'production' && '/vue3-tsx/') || '/',

  outputDir: 'docs',

  css: {
    requireModuleExtension: false,

    loaderOptions: {
      css: { modules: { localIdentName: '[name]-[local]-[hash]' } },
      scss: { prependData: '@import "~@/assets/styles/index.scss";' }
    }
  }

};
