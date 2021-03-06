import Vue from 'vue'
import router from './router/router'
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'

import App from './App.vue'
import './assets/styles/style.scss'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  store,
  router,
  Multiselect
}).$mount('#app')
