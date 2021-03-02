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
    host: 'app.jonder.test',
    port: 81,
    https: false
  }
};
