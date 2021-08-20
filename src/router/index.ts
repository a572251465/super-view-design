import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'
import Home from '@/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/half-hashboard',
        name: 'half-hashboard',
        components: {
          main: Dashboard
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
