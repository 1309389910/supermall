<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/cart _active.svg"
        alt
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/classify">
      <img slot="item-icon" src="~assets/img/tabbar/classify.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/classify_active.svg"
        alt
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/mine_active.svg"
        alt
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar, //注册组件
    TabBarItem
  }
};
</script>
<style></style>
