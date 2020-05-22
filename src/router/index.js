import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/home.vue'
import Statistic from '../components/pages/statistic.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: Statistic
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
