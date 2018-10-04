# Chapter 3 页面骨架开发

## 配置

- index.html修改`<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">`
- 安装babel、fastclick依赖 `npm i babel-runtime fastclick --save` `npm i babel-polyfill --save-dev`
  - babel-runtim对es6语法作一些转义
  - fastclick 解决移动端点击延迟
  - babel-polyfill 对es6的api如promise作转义
- 在main.js中引入babel-polyfill

## header

- 在components下创建`m-header`组件 设置基础和样式
- 在App.vue中引入
- 在webpack.base.conf.js配置components别名

## vue-router及顶部导航栏

- 新建排行页面和搜索页面vue文件
- 配置router的index.js
- 在APP.vue中添加`<router-view>`
- 在tab.vue中设置导航栏
- 路由设置根路径重新定向到recommend页面
