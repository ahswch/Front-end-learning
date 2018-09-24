# Chapter 6 header组件开发

## 数据获取

>App.vue发送ajax异步请求数据，传给header组件
>data使用函数定义，如果使用对象定义，复用组件会相互影响

- axios使用(vue-resource已经不更新了，这里我用尤大推荐的axios)
  - `npm i axios --save`
  - 在App.vue中发送请求
    - 使用生命周期函数mounted
    - 根目录下data.json 作数据源 只有在static下文件的能在线上访问到 所以在static下新建mock文件夹，把数据放在其中（在正式上线时可以在gitignore设置不上传mock，本项目为学开发习项目，会把mock上传）
    - 在config/index.js中设置代理(webpack dev serve 提供) 在本地调试时自动把api路径指向static/mock。改变配置项文件要重启服务器(需要修改第四章mock数据路径配置-在build下的webpack.dev.conf.js中)

    ```javascript
    proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
    ```

    - App.vue中的js代码：

    ```javascript
    import Header from 'components/header/header'
    import axios from 'axios'
    export default {
      name: 'App',
      data () {
        return {
          seller: {}
        }
      },
      components: {
        'v-header': Header
      },
      methods: {
        getData () {
          axios.get('/api/data.json')
            .then(this.getDataSucc)
        },
        getDataSucc (res) {
          this.seller = res.data
          console.log(this.seller)
        }
      },
      mounted () {
        this.getData()
      }
    }
    ```

- 把获取的数据通过v-bind传给header组件

## 页面设计

- header组件props数据后设置页面样式
  - 多余字设置...

  ```css
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
  ```

  - 图片inlineblock仍于相邻元素有间距
    - 给其父元素设置fontsize 0
    - 给所有子元素设置相应fontsize
    - 此时多余字省略号消失，清除html中两个span间的空白，不用fontsize 0

- css sticky footer
  >如果页面内容不够长的时候，页脚块粘贴在视窗底部；如果内容足够长时，页脚块会被内容向下推送
  - html

  ```html
  <div class="detail-wrapper clearfix">
    <div class="detail-main"></div>
  </div>
  <div class="detail-close"></div>
  ```

  - css

  ```css
  .clearfix
    display: inline-block
    &:after
      display: block
      content: "."
      height: 0
      line-height: 0
      clear: both
      visibility: hidden

  .detail-wrapper
    min-height 100%
    .detail-main
      margin-top 64px
      padding-bottom 64px
      /* 必须设置pdding-botton 为footer留空间 */
  .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
  ```

- 优惠信息商家公告两边横线自适应(flex布局)

## 星星组件

- 在components下创建star文件夹，把所需图片放入
- 编写star.vue代码
- 一个简单算法把元素push到数组

```javascript
itemClasses () {
  let result = []
  let score = Math.floor(this.score * 2) / 2
  let hasDecimal = score % 1 !== 0
  let integer = Math.floor(score)
  for (let i = 0; i < integer; i++) {
    result.push(CLS_ON)
  }
  if (hasDecimal) {
    result.push(CLS_HALF)
  }
  while (result.length < LENGTH) {
    result.push(CLS_OFF)
  }
  return result
}
```

## header剩余组件实现

- detail页面其余
- detail页面动画
  - 使用vue的transition标签

src目录树如下

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
│  │      brand@2x.png
│  │      brand@3x.png
│  │      bulletin@2x.png
│  │      bulletin@3x.png
│  │      decrease_1@2x.png
│  │      decrease_1@3x.png
│  │      decrease_2@2x.png
│  │      decrease_2@3x.png
│  │      discount_1@2x.png
│  │      discount_1@3x.png
│  │      discount_2@2x.png
│  │      discount_2@3x.png
│  │      guarantee_1@2x.png
│  │      guarantee_1@3x.png
│  │      guarantee_2@2x.png
│  │      guarantee_2@3x.png
│  │      header.vue
│  │      invoice_1@2x.png
│  │      invoice_1@3x.png
│  │      invoice_2@2x.png
│  │      invoice_2@3x.png
│  │      special_1@2x.png
│  │      special_1@3x.png
│  │      special_2@2x.png
│  │      special_2@3x.png
│  │
│  ├─ratings
│  │      ratings.vue
│  │
│  ├─seller
│  │      seller.vue
│  │
│  └─star
│          star.vue
│          star24_half@2x.png
│          star24_half@3x.png
│          star24_off@2x.png
│          star24_off@3x.png
│          star24_on@2x.png
│          star24_on@3x.png
│          star36_half@2x.png
│          star36_half@3x.png
│          star36_off@2x.png
│          star36_off@3x.png
│          star36_on@2x.png
│          star36_on@3x.png
│          star48_half@2x.png
│          star48_half@3x.png
│          star48_off@2x.png
│          star48_off@3x.png
│          star48_on@2x.png
│          star48_on@3x.png
│
└─router
        index.js
```
