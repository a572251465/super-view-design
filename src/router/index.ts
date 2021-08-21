import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Dashboard = () => import('@/views/Dashboard/index.vue')
const SimpleBar = () => import('@/views/SimpleBar/index.vue')
const NotFound = () => import('@/views/NotFound/index.vue')
const CommonCommandGit = () => import('@/views/CommonCommandGit/index.vue')
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
      },
      {
        path: '/commonCommandGit',
        name: 'commonCommandGit',
        components: {
          main: CommonCommandGit
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        components: {
          main: NotFound
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
