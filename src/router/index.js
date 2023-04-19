import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/buildabed',
    name: 'buildabed',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuildaBedView.vue')
  },
  {
    path: '/senge',
    name: 'senge',
    component: () => import(/* webpackChunkName: "about" */ '../views/SengeView.vue')
  },
  {
    path: '/maleguide',
    name: 'maleguide',
    component: () => import(/* webpackChunkName: "about" */ '../views/MaleguideView.vue')
  },
  {
    path: '/om-os',
    name: 'om os',
    component: () => import(/* webpackChunkName: "about" */ '../views/OmOsView.vue')
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import(/* webpackChunkName: "about" */ '../views/KontaktView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
