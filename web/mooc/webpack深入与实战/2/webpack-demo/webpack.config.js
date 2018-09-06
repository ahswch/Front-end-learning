const path = require('path');
// 使用对象entry必须修改filename，不能一个固定出口
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://cdn.com'
  },
  mode: 'development',
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is a.html',
      chunks: ['main', 'a']
    }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is b.html',
      chunks: ['b']
    }),
    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is c.html',
      chunks: ['c']
    })
  ]
}