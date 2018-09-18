# 项目的联调，测试与发布上线

## Vue项目的接口联调

> 把前端调试使用的模拟数据改为后端提供的

- 在config下的index.js中
  - 之前的设置是在开发环境下把对api路径的请求打到target对应的路径，该路径是前端调试的路径
  - 把target的路经改为后台服务器的端口  （使用http协议，如果是80端口 直接写`http://localhost`这种是服务器也在本机）
    - 如果为内网，使用内网ip
    - 外网，使用域名

## Vue项目的真机测试

- 在命令行工具执行`ipconfig` (osx用`ifconfig`)查看本机内网ip地址 如`192.168.1.105`
- 访问`192.168.1.105:8080` 拒绝连接请求
  - 因为我们前端项目是通过`webpack dev serve`启动的，默认不支持通过ip的形式进行页面访问
  - 修改默认配置项 在`package.json`中dev命令中增加`--host 0.0.0.0`
  - 重启服务器即可通过内网ip访问
- 在手机端拖动adcd屏幕跟着
  - 在Alphabet.vue中增加prevent`@touchstart.prevent="handleTouchStart"`
- 手机端白屏
  - `npm install babel-polyfill --save`
  - 在入口main.js中引入
- 手机端无法点击切换城市[1](https://www.imooc.com/article/25973?block_id=tuijian_wz)
  - betterScroll创建的区域，最近版本默认是不支持点击的，如果需要点击，创建betterScroll 的时候加一个参数(或者切换到旧版本1.8.1)

  ```javascript
  new Bscroll(this.$refs.wrapper, { click: true })
  ```

## Vue项目的打包上线

- `npm run build`把打包好的文件放到服务器根目录即可上线
- 如果需要在文件夹中访问 在config index.js中配置`assetsPublicPath: '/travel'`

## Vue中异步组件的使用（app.js比较大的时候使用）

- mainfest 配置文件
- vendor 组件公用代码
- app 所有页面的业务逻辑
- 通过异步组件对代码（app）优化（访问主页不需要加载其他页面的业务逻辑）
  - 在路由index.js配置改为异步，如下(用箭头函数进行import)

  ```javascript
  import Vue from 'vue'
  import Router from 'vue-router'

  Vue.use(Router)

  export default new Router({
    routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'City',
      component: () => import('@/pages/detail/Detail')
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  })

  ```

- 单个页面组件也可以用异步加载其子组件

## 课程总结与后续学习指南

- 查看官网文档，尤其课程未涉及如自定义指令
- 查看vue生态中的router文档
- vue-x
- vue服务器端渲染
- 可以使用vue[相关资源](https://github.com/vuejs/awesome-vue)