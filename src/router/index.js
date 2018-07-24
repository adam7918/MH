import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import UserPanel from '@/components/UserPanel'
import ProfilePage from '@/components/ProfilePage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Error404Page from '@/components/404Page'
import ContactPage from '@/components/ContactPage'
import FaqPage from '@/components/FaqPage'
import InventoryPage from '@/components/InventoryPage'
import NavigatePage from '@/components/NavigatePage'
import PrivacyPage from '@/components/PrivacyPage'
import RankingPage from '@/components/RankingPage'
import TermsPage from '@/components/TermsPage'
import OverviewPage from '@/components/OverviewPage'
import UserStatPage from '@/components/UserStatPage'
import MailPage from '@/components/MailPage'
import Roadmap from '@/components/Roadmap'
import Chat from '@/components/Chat'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      components: {
        default: Index,
        header: Header,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/login',
      name:'Login',
      component: LoginPage
    },
    {
      path:'/explore',
      name:'Explore',
      components: {
        default: NavigatePage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/privacy',
      name:'Privacy',
      components: {
        default: PrivacyPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/contact',
      name:'Contact Us',
      components: {
        default: ContactPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/roadmap',
      name:'Roadmap',
      components: {
        default: Roadmap,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer,
      }
    },
    {
      path:'/mail',
      name:'Mail',
      components: {
        default: MailPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/inventory',
      name:'Inventory',
      components: {
        default: InventoryPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/tos',
      name:'Terms',
      components: {
        default: TermsPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/users',
      name:'User Statistics',
      components: {
        default: UserStatPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/overview',
      name:'Overview',
      components: {
        default: OverviewPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/faq',
      name:'FAQ',
      components: {
        default: FaqPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/rankings',
      name:'Rankings',
      components: {
        default: RankingPage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/profile',
      name:'My Profile',
      components: {
        default: ProfilePage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    {
      path:'/profile/:username',
      name:'Profile',
      components: {
        default: ProfilePage,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    },
    // 404 Page - KEEP AT BOTTOM
    {
      path: '*',
      name: '404',
      components: {
        default: Error404Page,
        header: Header,
        chat: Chat,
        userpanel: UserPanel,
        footer: Footer
      }
    }
  ]
})
