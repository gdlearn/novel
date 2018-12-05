import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Catgory from '../views/Catgory/Catgory.vue'
import Rank from '../views/Rank/Rank.vue'
import My from '../views/My/My.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catgory',
      name: 'catgory',
      component: Catgory
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/my',
      name: 'my',
      component:My
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
