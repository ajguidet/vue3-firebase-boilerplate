import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../plugins/firebase'
import Home from '../views/Index.vue'

const requiresAuth = { meta: { requiresAuth: true } }

const currentAuthProm = () => new Promise((resolve, reject) => {
  const t0 = performance.now()
  const unsubscribe = auth.onAuthStateChanged(async user => {
    const dt = performance.now() - t0
    console.log(`Waiting user... ${dt} ms`)
    unsubscribe()
    resolve(user)
  }, reject)
})

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/no-auth',
    name: 'NoAuthView',
    component: () => import('../views/NoAuth.vue')
  },
  {
    path: '/auth',
    name: 'AuthView',
    ...requiresAuth,
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const childRequiresAuth = to.matched.some(route => route.meta.requiresAuth)
  const user = await currentAuthProm()

  if (childRequiresAuth && !user) {
    next({ name: 'LoginView' })
    return
  }
  next()
})

export default router
