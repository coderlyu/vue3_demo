import request from "@/utils/request.js";
const book = "book";
export function getBookList(pramas) {
  return request({
    url: `/${book}/list`,
    method: "get",
    pramas
  });
}
