import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import ProfilePage from '@/components/ProfilePage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component: LoginPage
    },
    {
      path:'/profile/:userid',
      name:'Profile',
      components: {
        default: ProfilePage,
        header: Header,
        footer: Footer
      }
    }
  ]
})
