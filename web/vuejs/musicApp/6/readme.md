# Chapter 6 歌手详情页开发

## vuex初使用

- components下新建singer-detail组件
- 配置二级路由
- 在singer.vue设置router-view
- listview派发点击事件
- 下失效
  - 在common/js下新建song.js uid.js config.js mixin.js util.js cache.js  api下新建song.js
  - 安装js-base64 `npm i js-base64 --save`
  - 创建musiclist组件
  - 安装vuex`npm i vuex --save`
  - 在base创建songlist
  - 在src/store下创建要用的
  - main.js引入vuex store
  - 安装good-storage  `npm i good-storage --save`
- vuex 状态管理模式
  - [简介](https://vuex.vuejs.org/zh/)
  - 在store下创建入口index.js,状态state.js  mutations.js及其相关字符串常量mutation-type.js 异步修改或封装其他actions.js 获取state的映射getters.js
- 在singer.vue中引入vuex `import {mapMutations} from 'vuex'`，并在methods最后调用 在selectSinger使用`this.setSinger(singer)`
- 在singer-detail.vue中引入mapGetters使用 可在created时console.log(this.singer)查看

## 歌手数据接口

- <https://y.qq.com/n/yqq/singer/002J4UUk29y8BY.html#stat=y_new.singerlist.singerpic>控制台>network>fcg_V8
- 在api/singer.js设置getSingerDetail方法
- 在singer.vue中设置_getDetail()方法并在created使用 可以把获取的数据log出来

## 数据格式化

- 在common/js下创建song.js song类
  - 代码集中维护
  - 类的扩展性比对象强 面向对象的编程方式
- 在singer-detail.vue中设置_normalizeSongs方法
- song类设置工厂方法createSong

## music-list组件

- 接收参数
- song-list基础组件新建
- scroll模拟原生app
- dom.js中实现profixer 解决非css语言下的css操作兼容
- play按钮及其样式
- loading组件复用