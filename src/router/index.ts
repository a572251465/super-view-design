import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'
import SimpleBar from '@/views/SimpleBar/index.vue'
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
      },
      {
        path: '/simple-bar',
        name: 'simple-bar',
        components: {
          main: SimpleBar
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
