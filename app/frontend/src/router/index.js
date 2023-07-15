// Composables
import { createRouter, createWebHistory } from 'vue-router'
import childrenRoutes from './routes'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: childrenRoutes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router