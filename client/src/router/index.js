import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vote",
    name: "Vote",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vote.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import(/* webpackChunkName: "about" */ "../views/Buy.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
