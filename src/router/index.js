import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import UserPanel from '@/components/UserPanel'
import ProfilePage from '@/components/ProfilePage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Error404Page from '@/components/404Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component: LoginPage
    },
    {
      path:'/profile/:username',
      name:'Profile',
      components: {
        default: ProfilePage,
        header: Header,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    // 404 Page - KEEP AT BOTTOM
    {
      path: '*',
      name: '404',
      component: Error404Page
    }
  ]
})
