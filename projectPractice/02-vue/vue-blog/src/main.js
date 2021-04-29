import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import request from './request'
import WInput from '@/lib/w-input/index.vue'

import './plugin'

Vue.component('w-input', WInput)
Vue.prototype.$http = request
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
