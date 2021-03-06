import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/_ls";
import getPageTitle from "@/utils/get-page-title";
import { whiteList } from "@/config";
NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const hasToken = getToken();
  if (hasToken) {
    if (!store.getters.user) {
      await store.dispatch("user/getInfo");
      next();
    }
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
