# Chapter 8 food商品详情页

## food组件

- 新建food组件 接受food数据
- goods组件引入food组件 传值 利用ref调用food组件show方法
- food组件进入动画
- food.image图片固定大小 且不会抖动

  ```css
  .image-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
  ```

- 加入购物车动画，解决小球动画target元素使用时已显示 挂载
- 商品信息及评价
  - split组件
  - 评价组件
  - 时间格式化
    - {{rating.rateTime | formatDate}}给插值应用filter函数
    - filters定义formatDate
    - data.js(common/js)新建通用js 利用正则匹配修改日期格式
    - import {formatDate} from 'common/js/date';food组件引入