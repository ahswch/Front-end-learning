# Vue基础

## hello world实例

- 显示hello world
- handleClick 弹出hello
- Vue根实例 组件也是一个小实例
- 浏览器控制台用vm.$data访问实例内容

## Vue实例的生命周期钩子

![lifecycle](./lifecycle.png)

- 测试各个生命周期函数
- 生命周期函数不放在methods里
- 生命周期函数就是Vue实例在某一个时间点会自动执行的函数
- 有以下生命周期函数
  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - activated
  - deactivated
  - beforeDestroy
  - destroyed
  - errorCaptured

## Vue的模板语法

- 差值表达式`{{name}}`,在标签里引用实例data里的name变量
- `v-text`语法。`<div v-text='name'></div>` 和差值表达式一样
- `v-html`语法
- `v-on`
- `v-bind`
- `v-for`
- `v-if`
- `v-show`
- class的对象绑定。设置div`:class="{activated: isActivated}"`，有个class名activated，是否显示取决于布尔值isActivated

> `v-`类型的语法后面冒号里的是js语法 插值表达式里也可以写js

## 计算属性，方法和侦听器

- 计算属性 `computed` 内置缓存（计算的依赖变量没有发生变化时用上一次的结果，在控制台改变age不会运行computed）
- 方法 没有缓存 在控制台改变age会运行computed
- 侦听器 也有缓存

> 三者都能用时优先使用computed

## 计算属性的setter和getter

- 把前一节computed姓名用get换个写法
- 读取fullNameu时调用get
- 设置fullNameu时调用set

## Vue中的样式绑定

- 点击改变颜色
  - 方法一
    - 设置div`:class="{activated: isActivated}"`，有个class名activated，是否显示取决于布尔值isActivated
    - 语法：class的对象绑定
  - 方法二
    - 设置(在上个方法上改)div`:class="[activated]"`，class有个变量activated里的内容,数组里可设置多个变量(div就有多个类，如果变量不为空的话)
  - 方法三（内联样式）
    - `<div :style='styleObj'>Hello world</div>`或`:style='[styleObj, {fontSize: "20px"}]'` (内联样式用驼峰命名法,或用短横线分隔 (kebab-case，要用单引号括起来))

## Vue中的条件渲染

- `v-if`的js语句返回值的true或false决定该div是否挂载到页面
- `v-show`的js语句返回值的true或false决定该div是否display none ,是否隐藏
- `v-else`和`v-if`紧贴在一起使用`<div v-else>Bye World</div>` 支持多个elseif
- key值 key值不同vue不会复用
- 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。

## Vue中的列表渲染

- 实例中新建数组数据
- 标签中用`<div v-for="(item, index) of list">{{item}}</div>` ,item in也行 推荐of,index为索引
- 一般需要在循环项上添加一个唯一key值 不推荐使用index作为key值，如果你经常操作数组，同一元素index值会变。一般接收的数据都有一个id，以此为key
- 向数组里传值时不能用下标的方式直接赋值，应用vue提供的数组变异方法来操作数组，这样才能实现数组发生变化，页面对应发生变化（也可直接改变引用，如在控制台直接重新赋值整个数组），以下vue提供的7个数组变异方法:
  - pop 删除最后一项
  - push 尾部插入
  - shift 删除第一项
  - unshift 首部插入
  - splice 截取插入
  - sort 排序
  - reverse 反转
- 使用`<template>`占位符，在其中使用`v-for`渲染后该template不会渲染到页面
- 对象循环`<div v-for="(item, key, index) of userInfo">{{item}} --- {{key}} --- {{index}}</div>`
  - key 属性（键）
  - item 属性值（键值）
  - index 索引
  - 改变引用来实时渲染

## Vue中的set方法（接上文件）

- 对象循环除了通过改变引用来渲染改变外可以使用set方法
- set
  - 全局方法——在控制台`Vue.set(vm.userInfo, "address", "beijing")`,向对象添加一项
  - 实例方法——在控制台`vm.$set(vm.userInfo, "address", "beijing")`,向对象添加一项
- 数组里的set
  - 调用数组变异方法
  - 改变引用
  - set
    - 全局方法——在控制台`Vue.set(vm.userInfo, 1, 5)`
    - 实例方法——在控制台`vm.$set(vm.userInfo, 1, 5)`