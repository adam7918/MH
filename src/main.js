// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'
import './assets/css/fontawesome.css'
import Axios from 'axios'
import Auth from './auth'

Vue.prototype.$http = Axios
Vue.prototype.$auth = Auth
Vue.prototype.$apiUrl = 'http://localhost:3000'

window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  document.title = `IMS - ${to.name}`
  next()
})