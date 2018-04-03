import Vue from 'vue'
import App from './components/App.vue'
import router from './components/Router.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
})
