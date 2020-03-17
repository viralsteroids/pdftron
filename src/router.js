import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  }
]

const router = new VueRouter({ mode: 'history', routes })

export default router;