import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all',
    name: 'all'
  },
  {
    path: '/active',
    name: 'active'
  },
  {
    path: '/complete',
    name: 'complete'
  },
  {
    path: '*',
    redirect: '/all'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
