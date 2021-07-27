import Vue from 'vue'
import App from './App.vue'
import FuButton from './packages/button.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.component(FuButton.name, FuButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
