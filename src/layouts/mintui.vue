<template>
    <div>

        <mt-tabbar v-model="selected">
            <mt-tab-item
                id="外卖"
                @click.once="routeTo"
            >
                <img slot="icon">
                外卖
            </mt-tab-item>
            <mt-tab-item
                id="订单"
                @click.once="routeTo"
            >
                <img slot="icon">
                订单
            </mt-tab-item>

            <mt-tab-item
                id="我的"
                @click.once="routeTo"
            >
                <img slot="icon">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected: true,
    };
  },
  methods: {
    routeTo: function(path) {
      console.log("route To " + path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>