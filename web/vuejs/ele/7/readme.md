# Chapter 7 goods商品列表页开发

- 左侧菜单需要垂直居中 用table

## better-scroll

- `npm i better scroll --save`
- 新建scroll的函数
- 无法滚动
  - vue更新dom是异步的，把scroll执行函数放在this.$nextTick中（dom未变化 初始化betterscroll 高度计算有问题）（执行函数在created中）
    - $nextTick(() => {}) 与DOM相关操作写在该函数回调中，确保DOM已渲染
    - 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    - 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中。原因是在created()钩子函数执行的时候DOM其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载已完成。使用时机：el被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子函数，此时页面并未全部渲染。
  - 或者把scroll的执行函数放在mounted函数中
- 设置foodsScroll的probeType: 3，一个输出位置的探针，监听获取y值
- 获取foodlist的数组dom失败，回用vue-resounrce
  - 在main.js中引入使用
  - 修改App.vue goods.vue获取数据的方式

## 购物车组件

- 新建购物车组件

## 加减按钮组件

- cartcontrol
- 可以给观测的数据对象新增键值，但是define properties检测不到
  - 使用vue提供的接口
  - 在cartcontrol中引入vue，使用Vue.set
- 加减按钮动画

- 购物车小球动画
  - .ball控制y轴
  - .inner控制x轴
  - [cubic-bezier](http://cubic-bezier.com/#.17,.67,.83,.67)
  - `let rf = el.offsetHeight`页面触发重绘
- 改回axios获取数据(data.json放到根目录)

```javascript
import axios from 'axios'
created () {
  axios.get('/api/goods').then((response) => {
    response = response.data
    if (response.errno === ERR_OK) {
      this.goods = response.data
    }
  })
}
```

## 购物车详情页

- 利用`@click.stop.prevent`阻止点击事件冒泡
