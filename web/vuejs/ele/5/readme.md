# Chapter 5 项目骨架开发

- 删除helloworld组件
- 安装stylus依赖`npm i stylus --save-dev` `npm i stylus-loader --save-dev`
- 设置各个组件，配置路由
- app.vue 引入header组件 设置导航栏并配置样式
- favicon.ico请求报错304解决
  - 找到favicon.ico文件放到项目根目录
  - build/webpack.dev.conf.js配置

  ```javascript
  new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: path.resolve('favicon.ico')   // 加上这个
  })
  ```

- 在webpack.base.conf.js配置别名

```javascript
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'src': path.resolve(__dirname, '../src'),
    'common': path.resolve(__dirname, '../src/common'),
    'components': path.resolve(__dirname, '../src/components')
  }
},
```

- reset.css中设置a标签默认无下划线
- 在路由配置中设置`linkActiveClass: 'active'`使得vue路由提供的默认v-link-active属性值设为我们要用的
- 在命令行工具执行`ipconfig` (osx用`ifconfig`)查看本机内网ip地址 如`192.168.1.105`
- 访问`192.168.1.105:8080` 拒绝连接请求
  - 因为我们前端项目是通过`webpack dev serve`启动的，默认不支持通过ip的形式进行页面访问
  - 修改默认配置项 在`package.json`中dev命令中增加`--host 0.0.0.0`
  - 重启服务器即可通过内网ip访问
- 1像素border的实现
  - 设置stylus/mixin.styl 设置如下，然后在使用时引入即可

  ```css
  border-1px($color)
  position: relative
  &:after
    display: block
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    border-top: 1px solid $color
    content: ' '
  ```

  - 设置stylus/base.styl 设置如下，然后在index.styl中引入所有其他styl文件，使用时引入index.styl即可（报路径错误，icon.styl引入字体文件的相对路径需要修改）

  ```css
  @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
    .border-1px
      &::after
        -webkit-transform: scaleY(0.7)
        transform: scaleY(0.7)

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
    .border-1px
      &::after
        -webkit-transform: scaleY(0.5)
        transform: scaleY(0.5)
  ```

- 本章src目录树如下：

```html
│  App.vue
│  main.js
│
├─common
│  ├─fonts
│  │      sell-icon.eot
│  │      sell-icon.svg
│  │      sell-icon.ttf
│  │      sell-icon.woff
│  │
│  ├─js
│  │      date.js
│  │      store.js
│  │      util.js
│  │
│  └─stylus
│          base.styl
│          icon.styl
│          index.styl
│          mixin.styl
│
├─components
│  ├─goods
│  │      goods.vue
│  │
│  ├─header
│  │      header.vue
│  │
│  ├─ratings
│  │      ratings.vue
│  │
│  └─seller
│          seller.vue
│
└─router
        index.js
```