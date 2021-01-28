<template>
    <div>
        <router-view />

        <van-tabbar >
            <van-tabbar-item icon="home-o">Home</van-tabbar-item>
            <van-tabbar-item icon="search">Status</van-tabbar-item>
            <van-tabbar-item icon="friends-o">Me</van-tabbar-item>
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