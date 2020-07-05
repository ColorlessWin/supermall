<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item slot="item" href="/home">
        <img slot="img" src="@/assets/img/tabbar/home.svg">
        <img slot="img-active" src="@/assets/img/tabbar/home_active.svg">
        <div slot="title">主页</div>
      </tab-bar-item>
      <tab-bar-item slot="item" href="/category">
        <img slot="img" src="@/assets/img/tabbar/category.svg">
        <img slot="img-active" src="@/assets/img/tabbar/category_active.svg">
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item slot="item" href="/cart">
        <img slot="img" src="@/assets/img/tabbar/cart.svg">
        <img slot="img-active" src="@/assets/img/tabbar/cart_active.svg">
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item slot="item" href="/profile">
        <img slot="img" src="@/assets/img/tabbar/profile.svg">
        <img slot="img-active" src="@/assets/img/tabbar/profile_active.svg">
        <div slot="title">用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'


  export default {
    name: "MainTabBar.vue",
    components: {
      TabBarItem,
      TabBar
    }
  }

</script>

<style scoped>
  #main-tab-bar {
    position: fixed;
    bottom: 0;
    z-index: 10;
  }
</style>
