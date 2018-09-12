# VUE起步

## hello world

- `el`在vue实例中定义实例控制dom的范围
- `data`数据项
- 利用差值表达式在html的绑定范围中使用data里的数据
- 不需要直接操作dom，改变data里数据的值

## todolist

- 在标签设置`v-for`属性，循环输出实例data中一个数组数据到制定变量，可在标签中用差值表达式引用。`<li v-for="item in list">{{item}}</li>`
- 在标签里设置`v-on`属性，绑定事件。简写`@`。`<button v-on:click="handleBtnClick">提交</button>`，在实例定义相应methods
- `input`标签中设置`v-model`和数据进行双向绑定。`<input type="text" v-model="inputValue">`

## MVVM模式

### 传统MVP设计模式

- Model层（数据）模型 ajax获取数据
- Presenter层（呈现） 业务逻辑相关控制 (双向箭头与上下)
- View层（视图）页面dom展示

使用jquery展示MVP模式 todolist

### MVVM 模式

- 在vue的vm层帮助下，无控制层，只需写view和model

## 前端组件化

### 用组件化思想修改todolist（todolistpro.html）

- 把列表项列为一个组件
- `v-bind`向子组件传入绑定值，简写`:`,子组件用props接收(可接收属性值),用差值表达式在template里引用 `<todo-item v-bind:content="item" v-for="item in list"></todo-item>` [kebab-case命名结构](https://segmentfault.com/q/1010000012455446)
- 全局组件：

 ```javascript
  Vue.component("TodoItem", {
    props: ['content'],
    template: "<li>{{content}}</li>"
  })
 ```

- 局部组件(需要在使用实例中注册)

 ```javascript
  var TodoItem = {
    props: ['content'],
    template: '<li>{{content}}</li>'
  };

  // 在实例中注册，后TodoItem为局部组件的
  components: {
    'TodoItem': TodoItem
  },
 ```

### 简单的组件间传值问题

- 子组件向父组件传值（点击todo某一项删除）
  - 子组件TodoItem的template中为`li`绑定click事件
  - 子组件的`handleItemClick`事件利用`this.$emit("delete")`，向外触发delet事件
  - 实例中的子组件引用中利用`@delet="handleItemDelet"`监听delet事件，监听到就触发父组件的handleItemDelet事件
  - 向子组件传值数组下标index，子组件props接收值后利用`handleItemClick`向父组件传index值
  - 父组件的handleItemDelet被触发后接受到index值，删除list对应下标元素
