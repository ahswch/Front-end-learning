import 'babel-polyfill'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'

// import VConsole from 'vconsole'
// /* eslint-disable no-unused-vars */
// var test = new VConsole() // 除加此句外，v2.5.2可以直接使用
// console.log('test')

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
