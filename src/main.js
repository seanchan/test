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

import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
