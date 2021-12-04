module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Umi | Front End Developer';
        return args;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/mixins.scss";
        `
      },
    },
  },
};