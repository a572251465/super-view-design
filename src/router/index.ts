import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'

const NotFound = () => import('@/views/NotFound/index.vue')
const CommonCommandGit = () => import('@/views/CommonCommandGit/index.vue')
const CommonCommandLinux = () => import('@/views/CommonCommandLinux/index.vue')
const CommonlyAddress = () => import('@/views/CommonlyAddress/index.vue')
const CssWorld = () => import('@/views/CssWorld/index.vue')
const VueWorld = () => import('@/views/VueWorld/index.vue')
const JavascriptWorld = () => import('@/views/JavascriptWorld/index.vue')
const ProjectWorld = () => import('@/views/ProjectWorld/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/project-world',
        name: 'project-world',
        components: {
          main: ProjectWorld
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
        path: '/commonCommandLinux',
        name: 'commonCommandLinux',
        components: {
          main: CommonCommandLinux
        }
      },
      {
        path: '/commonly-address',
        name: 'commonly-address',
        components: {
          main: CommonlyAddress
        }
      },
      {
        path: '/css-world',
        name: 'css-world',
        components: {
          main: CssWorld
        }
      },
      {
        path: '/javascript-world',
        name: 'javascript-world',
        components: {
          main: JavascriptWorld
        }
      },
      {
        path: '/vue-world',
        name: 'vue-world',
        components: {
          main: VueWorld
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
