import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  }
]

const router = new VueRouter({ routes })

export default router;