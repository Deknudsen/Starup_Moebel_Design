import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth'


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
    path: '/produkter',
    name: 'produkter',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdukterView.vue')
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
  },
  {
    path: '/adminParts',
    name: 'admin parts',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/parts/AdminPartsView.vue')
  },
  {
    path: '/adminEditParts/:id',
    name: 'admin edit parts',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/parts/AdminEditPartsView.vue')
  },
  {
    path: '/adminFaqs',
    name: 'admin faqs',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AdminFaqsView.vue')
  },
  {
    path: '/produktSide/:id',
    name: 'produktSide',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProduktSideView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/adminHome',
    name: 'admin home',
    component: () => import('../views/admin/home/AdminHomePageView.vue')
  },
  {
    path: '/adminCarosel',
    name: 'admin carosel',
    component: () => import('../views/admin/home/AdminCaroselPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0 }
  }
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    getAuth(),
    (user) => {
      removeEventListener();
      resolve(user)
    },
    reject 
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth) // some= array filter function
  if(requiresAuth) {
    if(getCurrentUser) {
      next();
    }
  }
  else {
    next()
  }
})

export default router
