<template>
    <div>
        <router-view />

        <van-tabbar route>
            <van-tabbar-item
                replace
                to="/home"
                icon="home-o"
            >Home</van-tabbar-item>
            <van-tabbar-item
                replace
                to="/about"
                icon="search"
            >about</van-tabbar-item>
            <van-tabbar-item
                replace
                to="/cordova-info"
                icon="friends-o"
            >cordova-info</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
export default {};
</script>


<style lang="scss" scoped>
</style>