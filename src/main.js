import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLayers from 'vuelayers'

import './assets/tailwind.css'
import 'vuelayers/lib/style.css'

Vue.config.productionTip = false

Vue.use(VueLayers)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
