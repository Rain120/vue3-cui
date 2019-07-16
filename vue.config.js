const path = require('path');

module.exports = {
  devServer: {
    port: 8888
  },

  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'));

    config.module
      .rule('ts')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        return options;
      });
  }
};
