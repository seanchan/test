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

// import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
// Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

import VueFbCustomerChat from 'vue-fb-customer-chat'
Vue.use(VueFbCustomerChat, {
  page_id: 100147778194304, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
