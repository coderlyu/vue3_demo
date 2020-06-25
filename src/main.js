import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import Vant, { Lazyload } from "vant";
import "vant/lib/index.css";
import VueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(Vant);
Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
