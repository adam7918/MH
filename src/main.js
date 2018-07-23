// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'
import './assets/css/fontawesome.css'
import Axios from 'axios'
import Auth from './auth'
import VueAnalytics from 'vue-analytics'


Vue.use(VueAnalytics, {
  id: 'UA-47027871-5'
})

Vue.prototype.$http = Axios
Vue.prototype.$auth = Auth
Vue.prototype.$apiUrl = 'http://www.medievalhavoc.com:3000'

window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
      updateOnlineStatus: function () {
        Axios.put(this.$apiUrl + '/account/online',{}, this.$auth.getTokenHeader())
        .then(response =>{

        })
        .catch(e => {
        })
      },
      getOnlinePlayerCount: function(){
        Axios.get(this.$apiUrl + '/account/online/all', this.$auth.getTokenHeader())
        .then(response =>{
            localStorage.setItem('players_online', response.data["COUNT(*)"])
        })
        .catch(e => {

        }) 
      }
    },
    mounted: function () {
      this.updateOnlineStatus();
      this.getOnlinePlayerCount();

      this.interval = setInterval(function () {
        this.updateOnlineStatus();
        this.getOnlinePlayerCount();
      }.bind(this), 30000); 
    },

   beforeDestroy: function(){
  clearInterval(this.interval);
  }
  })




router.beforeEach((to, from, next) => {
  document.title = `MH - ${to.name}`
  next()
})