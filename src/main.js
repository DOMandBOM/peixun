import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入element-ui
import '@/utils/element.js'
// 引入公共样式
import '@/assets/css/common.css'

import '@/mockjs/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
