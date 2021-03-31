module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_base.scss";`
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    host: 'localhost',
    port: 8081,
    https: false
  }
};
