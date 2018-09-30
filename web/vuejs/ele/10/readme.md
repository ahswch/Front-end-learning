# Chapter 10 seller组件

- 此组件better-scroll
  - watch方法是为了监听数据seller的变化,因为当打开页面的时候,seller是异步获取的,并不一定是能够马上获取,没有seller的数据,相关dom就无法被渲染,并且bscroll是基于dom执行的,所以需要监听seller的变化然后来重新执行相关的初始化函数
  - mounted方法是为了保证相关dom渲染完成,因为bscroll是基于dom执行的,但是当切换页面的时候,dom会重新渲染,但未必能够马上完成,所以需要在mounted方法里面重新执行相关的初始化函数
- pic应用better-scroll

```javascript
_initPics () {
  if (this.seller.pics) {
    let picWidth = 120
    let margin = 6
    let width = (picWidth + margin) * this.seller.pics.length - margin
    this.$refs.picList.style.width = width + 'px'
    this.$nextTick(() => {
      if (!this.picScroll) {
        this.picScroll = new BScroll(this.$refs.picWrapper, {
          scrollX: true, // 横向
          eventPassthrough: 'vertical' // 允许其他滚动互补影响
        })
      } else {
        this.picScroll.refresh()
      }
    })
  }
}
```

- 收藏状态缓存
  - id(在app.vue设置seller数据时)

  ```javascript
  seller: {
    id: (() => {
      let queryParam = urlParse() // 此函数在通用js util.js
      return queryParam.id
    })()
  }
  ```

  - app.vue引入util.js `import {urlParse} from './common/js/util'`
  - 获取数据时防止id丢失使用es6语法扩展对象属性`this.seller = Object.assign({}, this.seller, response.data)`
  - 在common js下新建存储js store.js

## 优化

- 使用keepalive实现router切换时组件保留 （在App.vue中把routerview嵌套进去）