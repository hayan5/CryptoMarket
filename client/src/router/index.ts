import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
/* Layout */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/vote',
    name: 'Vote',
    component: () => import(/* webpackChunkName: "home" */ '../views/Vote.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "home" */ '../views/Buy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
