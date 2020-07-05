import Vue from 'vue'
import App from './App.vue'
import Bus from '../src/common/bus'

import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

