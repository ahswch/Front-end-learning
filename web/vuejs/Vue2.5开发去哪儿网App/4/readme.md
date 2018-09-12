# 深入理解Vue组件

## 组件使用的细节点

- `<table>`等嵌套标签
  - 利用组件实现`template: '<tr><td>this is a row</td></tr>'`时,该部分未正确出现在template的父元素tbody中，而是与table同级
    - h5规范tbody里只能写tr
    - 设置tr如下可解决`<tr is="row"></tr>`。**Vue所提供的is属性**
- 根组件定义data可以使用对象，子组件定义data后面必须是函数(不同地方调用组件数据不会互相影响))，这个函数返回一个对象，其中包含你所需要的数据
- `ref`
  - 通过在div标签里设置`ref`引用属性来获取dom，用`this.$refs.hello`获取ref属性值为hello的dom节点
  - 在组件里设置ref属性(计数器测试)，获取的是组件引用
    - 两个点击加一的div(点击时向父组件发布change事件，父组件用@change监听到后触发handleChange)，一个总和div
    - handleChange在父组件定义，计算两个counter的和（分别设置两个counter的ref属性，用ref来获取counrter值）`this.$refs.one`获得counter子组件的引用，`this.$refs.one.number`获取counter子组件里的number数据

## 父子组件的数据传递

- 父——子
  - 通过属性传递(`count="0"`这种传递的是字符串。`:count="0"`传递数字0.冒号里是js赋值)，子组件用props接收
  - 子组件不要直接修改父组件传递来的值，在子组件data里把父组件传递值赋给新变量
- 子——父
  - 在子组件的某个方法里用`this.$emit('inc', this.number);`向外发布一个inc事件，携带参数（可多个）
  - 父组件在子组件html标签中用`@inc="handleInc"`监听子组件触发的inc事件并触发自身的handleInc事件(可使用子组件带来的参数)

## 组件参数校验与非props特性

- 组件参数校验
  - 父组件向子组件传递参数，子组件有权对其进行约束
  - 子组件通过设置props为对象，对父组件传递的值作约束

   ```javascript
    //子组件接受数字或字符串类型数据
    props: {
      content: [Number, String]
    },

    // 还可以用对象做其他约束
    props: {
      content: {
        type: String,
        required: false, // 必传
        default: 'default value' //默认值
      }
    },

    // validator函数 字符串类型且长度大于5
    content: {
      type: String,
      validator: function(value) {
        return value.length > 5;
      }
    }
   ```

- 非props特性
  - props特性：当你的父组件使用属性向子组件传值的时候，恰好子组件里面声明了对父组件传递的属性的接收，父子组件有个对应关系
    - 所用来传递值的属性不会在dom标签里显示
    - 子组件接收到属性，就能在template中用差值表达式引用
  - 非props特性：父组件向子组件传递了一个属性，子组件并没有props内容，没有声明接受内容
    - 如果子组件在template中用差值表达式引用，会报错，无法获取到父组件的值
    - 该属性会显示到子组件最外层dom标签里（作为一个属性）

## 给组件绑定原生事件

- 通过`v-on`绑定事件
  - 在组件标签里绑定——事件不会触发

   ```html
   <!-- 事件函数handleClick写在根实例中 绑定的是自定义事件 即需要子组件发布click事件，下面这个<child @click="handleClick"></child> 才能监听到click并触发handleClick-->
    <div id="root">
      <child @click="handleClick"></child>
    </div>
   ```

  - 在组件的template里写绑定——会触发

   ```javascript
   //事件写在组件里 绑定的是组件原生事件
    Vue.component('child', {
      template: "<div @click='handleClick'>Child</div>",
      methods: {
        handleClick: function() {
          alert('click');
        }
      }
    })
   ```

- 解决自定义事件需要发布监听两步问题，直接触发事件

   ```html
   <!-- click后加native修饰符 就会监听原生事件 -->
   <child @click.native='handleClick'></child>
   ```

## 非父子组件间的传值

- vue-x 不做说明
- 发布订阅模式——总线机制
  - 点击一个另一个也变成相同内容
  - 具体内容见html文件

## 在Vue中使用插槽

- 子组件template中显示父组件传递来的dom内容（为html内容）
  - 直接在template里使用插值 标签会直接显示
  - 用包裹div v-html可以 代码多时 可读性差
  - 用插槽
    - 直接在子组件里写html`<child><p>Dell</p></child>` 插槽
    - 子组件获取插槽内容 在template中使用slot标签
    - 父组件在子组件未传递插槽内容 可在子组件template slot标签中设置默认内容
    - 父组件传的插槽可以设置slot名字以便在子组件template中（使用name）按需使用——具名插槽

## Vue中的作用域插槽

- 子组件循环列表由外部定义渲染方式
- 子组件用slot时往里面传递一个数据，html中通过定义slot-scope='props' 把数据接收到props里
- 作用域插槽，template包裹并设置slot-scope接受数据

## 动态组件和v-once指令

- 按钮点击两个组件交替显示
  - 用v-if和点击事件改变
  - 用动态组件`<component :is="type"></component>` 绑定type 不同type值显示不同组件 实现交替
  - 每次更替都销毁一个组件,创建一个组件
- 在templa的标签中加入`v-once` 组件会被存到内存 交替时不用销毁创建 提高性能
