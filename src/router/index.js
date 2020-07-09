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
        meta: { title: "我的" } //rightFlag: 1 隐藏设置
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("@/views/setting"),
        meta: { title: "设置", leftFlag: 1 }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
    meta: { title: "登录" }
  },
  {
    path: "*",
    component: () => import("@/views/404")
  }
];

const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "history" : "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
