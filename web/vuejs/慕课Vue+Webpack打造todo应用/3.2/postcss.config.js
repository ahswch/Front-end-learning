const autoprefixer = require('autoprefixer')
/* stylus文件编译成css后用postcss优化css，用到autoprefixer组件优化（给需要加浏览器前缀的css加上前缀，兼容各浏览器）*/
module.exports = {
  plugins: [
    autoprefixer()
  ]
}