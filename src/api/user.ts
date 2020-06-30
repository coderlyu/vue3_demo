import request from "@/utils/request";

export function login(data: any) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}
export function getInfo(params: any) {
  return request({
    url: "/user/info",
    method: "get",
    params
  });
}
