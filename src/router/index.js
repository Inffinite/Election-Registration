import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Banner',
    component: () => import('../components/Banner.vue')
  },

  {
    path: '/admission',
    name: 'Admission',
    component: () => import('../components/Admission.vue')
  },

  {
    path: '/help',
    name: 'Help',
    component: () => import('../components/Help.vue')
  },

  {
    path: '/positions',
    name: 'Positions',
    component: () => import('../components/Positions.vue')
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
