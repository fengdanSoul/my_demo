import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/Goods'
import Seller from '../components/seller/Seller'
import Ratings from '../components/ratings/Ratings'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
})
