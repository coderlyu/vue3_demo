import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "_v/layout/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home"),
        meta: { title: "主页" }
      }
    ]
  },
  {
    path: "/profile",
    component: Layout,
    children: [
      {
        path: "",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile"),
        meta: { title: "我的" }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
