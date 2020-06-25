import axios from "axios";
import qs from "qs";
import router from "@/router";
import store from "@/store";
import { getToken } from "@/utils/_ls";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "/api" : "http://127.0.0.1:3002",
  timeout: 5000,
  transformRequest: [
    function(data) {
      return qs.stringify(data);
    }
  ]
});
// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 给 请求头添加上 token
      config.headers["authorization-token"] = getToken() || "";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === 4) {
      // 假设 code = 4 为 token 过期
      store.dispatch("user/clearToken");
      router.replace({
        path: "login",
        query: { redirect: router.currentRoute.fullPath }
      });
    }
    return res;
  },
  error => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
