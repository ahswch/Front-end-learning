# Chapter 4 推荐页面开发

## 数据api

- 在[qq音乐](https://y.qq.com/m/index.html#recom)网站利用chrome开发者工具查看数据请求接口
- jsonp介绍
  - 发送的不是ajax请求，利用动态创建一个script标签（无同源策略限制，可跨域）把标签指向请求服务端地址
  - 地址callback，用括号包裹一段数据，执行
- 安装jsonp `npm i jsonp`
- 在common/js中新建jsonp.js
- 在api下新建recommend.js config.js
- 安装axios在recommend.js中配置 `npm i axios --save`
- 在`webpack.dev.conf.js`中添加如下(设置请求头的host和refer)

  ```javascript
  const axios = require('axios')
  const bodyParser = require('body-parser')
  // 以下在devServer中添加
  before(app) {
      // 后端代理
      app.use(bodyParser.urlencoded({extended: true}))
      const querystring = require('querystring')

      app.get('/api/getDiscList', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/', // 源地址
            host: 'c.y.qq.com' // 域名
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })

      // 获得歌手列表
      app.get('/api/getCdInfo', function (req, res) {
        const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          if (typeof ret === 'string') {
            const reg = /^\w+\(({.+})\)$/
            const matches = ret.match(reg)
            if (matches) {
              ret = JSON.parse(matches[1])
            }
          }
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })

      // 获得歌词
      app.get('/api/lyric', function (req, res) {
        const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          let ret = response.data
          if (typeof ret === 'string') {
            const reg = /^\w+\(({.+})\)$/
            const matches = ret.match(reg)
            if (matches) {
              ret = JSON.parse(matches[1])
            }
          }
          res.json(ret)
        }).catch((e) => {
          console.log(e)
        })
      })

      app.post('/api/getPurlUrl', bodyParser.json(), function (req, res) {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.post(url, req.body, {
          headers: {
            referer: 'https://y.qq.com/',
            origin: 'https://y.qq.com',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })

      app.get('/api/search', function (req, res) {
        const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
    },
  ```

- 在控制台console.log数据无误

## 轮播图

- 在src下建立base文件夹>slider 把轮播图基础组件slider.vue放入
- 安装better-scroll`npm i better-scroll --save`
- 在common/js下新建dom.js
- slider.vue
  - 给每个轮播图div添加class slider-item 时，因为异步获取数据，在mounted中获取dom数组时可能节点还没挂载到dom上，无法正确获取，在recommend.vue中的slider-wrapper div添加`v-if="recommends.length"` 确认数据已获取再去渲染silder
  > 在`package.json`中dev命令中增加`--host 0.0.0.0`,重启服务器即可通过内网ip访问`192.168.1.105:8080`

## 歌单

- 在base下创建scroll组件
- 使用scroll组件时需要在内容中嵌套一个div
- 给轮播图img的load绑定loadImage事件，确保图片已占位，scroll刷新
- 歌单图片懒加载
  - `npm i vue-lazyload`
  - 在main.js中引入并配置 在组件img将:src替换为`v-lazy="item.imgurl"`

## loading组件

- 在base中新建loading组件
- 在recommend组件中使用
  - 可通过以下延时来显示loading过程

  ```javascript
  setTimeout(() => {
    this._getDiscList()
  }, 1000)
  ```