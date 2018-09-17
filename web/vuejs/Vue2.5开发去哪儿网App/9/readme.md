# 详情页面开发

## 详情页动态路由及banner布局

- 路由中传递id参数
- 使用`background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))`作渐变

## 公用图片画廊组件拆分

- 在src下创建common文件夹作为全局公用组件文件夹
  - common下创建gallary文件夹>gallary.vue作为公用图片画廊组件
  - 在webpack.base.conf.js配置别名。需重启服务器
- 当轮播图由隐藏变为显示时swiper计算宽度有问题，导致轮播图无法正常滚动，解决如下：（在Gallary.veu中）
  - 设置`observeParents: true,observer: true` 实现自我刷新

## 实现Header渐隐渐显效果

- 创建Header.vue

## 对全局事件的解绑

> 不解绑易出现bug

- `window.addEventListener('scroll', this.handleScroll)`全局事件在其他页面也会执行，影响其他组件
- 使用keep-live产生的另一个生命周期函数deactivated解除绑定

## 使用递归组件实现详情页列表

- 创建List.vue
- 组件调用自己 作递归 用v-if做判断

## 使用Ajax获取动态数据

- 不同页面id重新发送ajax
  - 使用activated
  - 在根组件App.vue中的keep-live排除detail组件 该组件不会被缓存
- 每个组件name值作用
  - 做组件递归
  - 取消页面缓存时
  - 使用Vue的调试工具时
- 页面拖动时多个页面互相影响 [路由配置解决](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)

## 在项目中加入基础动画

- 显示图片轮播时渐隐渐显
  - 在common下再创建fade
