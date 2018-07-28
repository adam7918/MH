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
import Notifications from 'vue-notification'
import VueSocketio from 'vue-socket.io'

Vue.use(require('vue-moment'));
Vue.use(VueSocketio, 'http://www.medievalhavoc.com:3000')
Vue.use(Notifications)
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
  data: {
    onlineUserCount: 0,
    chatHistory: []
  },
  sockets:{
    connect: function(){
    },
    ONLINE_COUNT: function(data){
      this.onlineUserCount = data
    },
    CHAT_HISTORY: function(data){
      this.chatHistory = data
    }
  },
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
      
    },
  mounted: function () {

  },
})


router.beforeEach((to, from, next) => {
  document.title = `Medieval Havoc - ${to.name}`
  next()
})