import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/index.vue";

const Dashboard = () => import("@/views/Dashboard/index.vue");
const SimpleBar = () => import("@/views/SimpleBar/index.vue");
const SimpleLine = () => import("@/views/SimpleLine/index.vue");
const ScalePie = () => import("@/views/ScalePie/index.vue");
const NotFound = () => import("@/views/NotFound/index.vue");
const CommonCommandGit = () => import("@/views/CommonCommandGit/index.vue");
const CommonCommandLinux = () => import("@/views/CommonCommandLinux/index.vue");
const CommonlyAddress = () => import("@/views/CommonlyAddress/index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/half-hashboard",
        name: "half-hashboard",
        components: {
          main: Dashboard,
        },
      },
      {
        path: "/simple-bar",
        name: "simple-bar",
        components: {
          main: SimpleBar,
        },
      },
      {
        path: "/simple-line",
        name: "simple-line",
        components: {
          main: SimpleLine,
        },
      },
      {
        path: "/commonCommandGit",
        name: "commonCommandGit",
        components: {
          main: CommonCommandGit,
        },
      },
      {
        path: "/commonCommandLinux",
        name: "commonCommandLinux",
        components: {
          main: CommonCommandLinux,
        },
      },
      {
        path: "/commonly-address",
        name: "commonly-address",
        components: {
          main: CommonlyAddress,
        },
      },
      {
        path: "/scale-pie",
        name: "scale-pie",
        components: {
          main: ScalePie,
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        components: {
          main: NotFound,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
