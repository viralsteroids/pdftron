import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import App from './App.vue'

import axios from 'axios'

import '@/assets/css/tailwind.css'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false

Vue.use(Router);

let baseUrl = 'http://167.71.77.38:5000'

Vue.prototype.baseUrl = baseUrl;
Vue.prototype.http = axios.create({ baseURL: baseUrl })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
