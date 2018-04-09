import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Housekeeper from '../components/housekeeper/Housekeeper'
import Profile from '../components/profile/Profile'



Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/housekeeper',
      name: 'Housekeeper',
      component: Housekeeper
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
