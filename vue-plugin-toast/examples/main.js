/*
 * @Author: yangying01
 * @description: 
 * @Date: 2020-12-08 20:46:55
 * @LastEditors: yangying01
 * @LastEditTime: 2021-03-10 19:13:43
 */
import Vue from 'vue'
import App from './App.vue'

// import Toast from '../lib/index.js'
// Vue.use(Toast)

import Toast from 'vue-yy-toast'
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
