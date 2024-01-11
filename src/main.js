import Vue from 'vue'
import App from './App.vue'
import { useAntd } from 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'

useAntd(Vue)
Vue.config.productionTip = false
Vue.use(KFormDesign)
new Vue({
  render: h => h(App),
}).$mount('#app')
