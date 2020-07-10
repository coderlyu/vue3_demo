import axios from "axios";
import qs from "qs";
import router from "@/router";
import store from "@/store";
import { Toast } from "vant";
import { getToken } from "@/utils/_ls";
const conf = require("@/config");

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : conf.baseURL,
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
      config.headers["authorizationToken"] = getToken() || "";
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
    // token 不存在、过期
    if (res.code === 200001 || res.code === 200002) {
      Toast.fail("token不存在或过期");
      store.dispatch("user/clearToken");
      router.push("/login");
      throw Error("token不存在或过期");
    }
    if (res.code === 200003) {
      Toast.fail("用户不存在或密码错误");
      throw Error("用户不存在或密码错误");
    }
    return res;
  },
  error => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
