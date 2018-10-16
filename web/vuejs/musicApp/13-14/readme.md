# Chapter 13 编译打包 - Chapter 14 课程总结

## 编译打包

- 优化（player组件）
  - 快速切换歌曲并暂停 歌词歌曲仍在播放 监听currentSong时`clearTimeout(this.timer)` audio标签监听play再ready 确保先play再pause getLyric修改
  - 只有一首歌时 操作只能点一次 在next loop后return
- 编译打包
  - `npm run build`
  - 启用node服务
    - 新建prod.server.js
    - `node prod.server.js`
    - 失败-跨域
- 路由异步加载
  - 路由index
  - `npm run build`
  - app.js大小减少
- vuejs升级到最新版

## 课程总结

- 移动端调试vConsole
  - `npm i vconsole --save-dev`
  - main.js使用

  ```javascript
  import VConsole from 'vconsole'
  /* eslint-disable no-unused-vars */
  var test = new VConsole() // 除加此句外，v2.5.2可以直接使用
  console.log('test')
  ```

  - 抓包fiddle