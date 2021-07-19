import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bid",
    name: "Bid",
    component: () => import("../views/Bid.vue"),
  },
  {
    path: "/graph",
    name: "Graph",
    component: () => import("../views/Graph.vue"),
  },
  {
    path: "/vote",
    name: "Vote",
    component: () => import("../views/Vote.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
