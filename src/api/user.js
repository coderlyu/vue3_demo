import request from "@/utils/request.js";
const user = "user";
export function login(data) {
  return request({
    url: `/${user}/login`,
    method: "post",
    data
  });
}
export function getUserInfo(params) {
  return request({
    url: `/${user}/info`,
    method: "get",
    params
  });
}
