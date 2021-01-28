<template>
    <div>
        <van-nav-bar
            title="Login"
            left-arrow
        />
        <van-row>
            <van-col span="2">phone: </van-col>
            <van-col
                span="16"
                offset="2"
            >
                <vue-tel-input
                    v-model="phone"
                    @input="input"
                    @validate="validatePhone"
                ></vue-tel-input>
            </van-col>
            <van-col>
                <van-button
                    type="primary"
                    :disabled="showSend"
                    @click="sendSms"
                >{{sendText}}</van-button>
            </van-col>
        </van-row>

        <vue-otp-2
            v-if="showOtp"
            length="6"
            join-character="-"
            @onComplete="opt2"
        />
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>

<script>
import Vue from "vue";

import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import PincodeInput from "vue-pincode-input";

import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
const onlyCountries = ["hk", "tw", "cn"];
Vue.use(VueTelInput, { onlyCountries });

Vue.component("pin-code-input", PincodeInput);
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
import VueOtp2 from "vue-otp-2";

Vue.use(VueOtp2);
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  name: "login",
  data() {
    return {
      phone: "",
      otp: "",
      showOtp: false,
      showSend: false,
      showVerifyBtn: false,
      sending: false,
      sendText: "Send",
    };
  },
  methods: {
    input: function(phone) {
      console.log(phone);
    },
    validatePhone: function(phoneValidate) {
      this.showSend = phoneValidate.valid;
    },
    sendSms: function() {
      this.showOtp = true;
      this.sendText = "sending";
    },
    opt2: function(t) {
      console.log(t);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>