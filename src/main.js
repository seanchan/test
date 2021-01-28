import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCordova from "vue-cordova";

Vue.use(VueCordova);
Vue.config.productionTip = false;
console.log(Vue.cordova);

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);





new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
