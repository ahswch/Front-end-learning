# Chapter 4 准备

- 需求分析
- 资源
- 图标字体制作
  - 在`https://icomoon.io/`进入app页面，上传svg文件 选中后 设置好名字 下载解压
  - 使用时把fonts文件夹和style.css移到项目目录
- 项目目录设计
  - 就近原则，相关资源放在一个文件夹下
  - 之前的字体制作包的css文件命名为icon.tyl
  - 删除assets目录
  - src内目录如下(注意icon.styl引入字体文件的相对路径需要修改，不然在下一章引入时报错)

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
│  └─stylus
│          icon.styl
│
├─components
│      HelloWorld.vue
│
└─router
        index.js
```

- mock数据（模拟后台数据）
  - data.json于根目录
  - 配置数据接口(在build下的webpack.dev.conf.js中)

  ```javascript
  const appData = require('../data.json')
  const seller = appData.seller
  const goods = appData.goods
  const ratings = appData.ratings

  // devServer中添加路由接口信息
  before (app) {
    app.get('/api/seller', function(req, res) {
      res.json({
        errno: 0,
        data: seller
      })
    });
    app.get('/api/goods', function(req, res) {
      res.json({
        errno: 0,
        data: goods
      })
    });
    app.get('/api/ratings', function(req, res) {
      res.json({
        errno: 0,
        data: ratings
      })
    })
  },
  ```

  - 重启服务器，进入`http://localhost:8080/api/seller`查看