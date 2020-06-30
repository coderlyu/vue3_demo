import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "_v/layout/index.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
        component: () => import("@/views/home/index.vue"),
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
          import(/* webpackChunkName: "profile" */ "@/views/profile/index.vue"),
        meta: { title: "我的", rightFlag: 1 }
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("@/views/setting/index.vue"),
        meta: { title: "设置", leftFlag: 1 }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: { title: "登录" }
  },
  {
    path: "*",
    component: () => import("@/views/404/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
