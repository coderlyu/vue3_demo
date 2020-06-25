import request from "@/utils/request.js";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}
export function getInfo(params) {
  return request({
    url: "/user/info",
    method: "get",
    params
  });
}
