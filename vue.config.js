module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.3.6:10036',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
      '^/online': {
        target: 'http://lift.cpase.org.cn:8080',
        pathRewrite: {
          '^/online': ''
        },
        changeOrigin: true
      }
    }
  },
}
