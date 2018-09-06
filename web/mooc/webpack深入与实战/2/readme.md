# webpack配置文件建立

- 新建webpack-demo文件夹
- `npm init`
- `npm i webpack --save-dev` `npm i webpack-cli --save-dev`
- 新建src、dist文件夹（源文件和输出文件夹）
- 新建配置文件`webpack.config.js`,写入

 ```javascript
 //用课程中的path方法会报错 以下为参考官方文档写出
const path = require('path');

module.exports = {
  entry: './src/script/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/js'),
  },
  mode: 'development'
}
 ```

- 增加package.json中build的显示项目 `"build": "webpack --config webpack.config.js --progress --color --display-modules --display-reasons"`
- 测试多入口（数组、对象）
  - hash是总的
  - chunkhash是每个出口文件的'版本号'
- 用插件解决在用hash作为输出文件名一部分时导致html引用每次都要修改引用地址。[参考文档](https://www.npmjs.com/package/html-webpack-plugin)
  - `npm i html-webpack-plugin --save-dev`
  - [在配置文件中配置插件](https://github.com/jantimon/html-webpack-plugin#configuration)
  - 对不同类型文件设置不同输出目录

   ```javascript
    output: {
      filename: 'js/[name]-[chunkhash].js',
      path: path.resolve(__dirname, './dist'),
    },
   ```

  - 删除dist里js文件夹，重新打包
  - 尝试插件中的其他配置。filename inject
  - 在配置文件中设置html文件title，在template的html中引用

   ```html
   <title><%= htmlWebpackPlugin.options.title %></title>
   ```

  - 设置date并引用
  - 改回输出html文件名为index.html 不用hash 便于查找
  - 在模板html中遍历htmlWebpackPlugin中能取到的值
    - files
    - options
    - 分别遍历
  - 把inject设为false，把js文件放在不同位置（head中和body中）
  - 设置上线地址publicPath,会把html中js引用地址首部设为上线地址，如由`js/mian.js`=>`http://cdn.com/js/mian.js`
  - 压缩html文件
    - minify

此时的配置文件和template如下

 ```javascript
  const path = require('path');
  // 使用对象entry必须修改filename，不能一个固定出口
  var htmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      main: './src/script/main.js',
      a: './src/script/a.js'
    },
    output: {
      filename: 'js/[name]-[chunkhash].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: 'http://cdn.com'
    },
    mode: 'development',
    plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: false,
        title: 'webpack is good',
        date: new Date(),
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ]
  }
 ```

 ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <script src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script>
  </head>
  <body>
    <script src="<%= htmlWebpackPlugin.files.chunks.a.entry %>"></script>
    <%= htmlWebpackPlugin.options.date %>
    <% for (key in htmlWebpackPlugin.files) { %>
      <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>
    <% } %>
    <% for (key in htmlWebpackPlugin.options) { %>
      <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.options[key]) %>
    <% } %>
    <!-- 我是一行注释 -->
  </body>
  </html>
 ```

- 多页面应用（plugin中多次调用htmlWebapckPlugin）
  - 增加入口文件b.js和c.js
  - new 2个htmlWebapckPlugin 运行后3个html文件都指向a.js
  - plugin增加chunks参数，在模板删除带参数的js引用。配置中inject设为body.(需要删除示例index.html中的带js语法的注释，不然[报错](https://www.imooc.com/qadetail/246574))
  - excludeChunks和chunks参数相反。chunks值是需要哪些对应chunk的入口文件，excludeChunks是在除值以外的entry中的其它文件都要
  - 了解inline 插入js 把js源码直接插入到html中，不需要从外部加载，inject需设置false。[参考示例](https://github.com/jantimon/html-webpack-plugin/blob/master/examples/inline/template.jade)。html示例添加如下：

 ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <script>
      <%=
      compilation.assets[htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
    </script>
  </head>
  <body>
    <% for (var k in htmlWebpackPlugin.files.chunks) { %>
      <% if (k != 'main') { %>
        <script src="<%= htmlWebpackPlugin.files.chunks[k].entry %>"></script>
      <% } %>
    <% } %>
    <!-- 我是一行注释 -->
  </body>
  </html>
 ```