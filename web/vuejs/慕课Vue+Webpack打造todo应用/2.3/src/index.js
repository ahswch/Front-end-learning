import Vue from 'vue' // 类库引用
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/bg.jpg'

const root = document.createElement('div') // 挂载节点
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)  // 方法
}).$mount(root) // 挂载