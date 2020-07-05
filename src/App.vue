<template>
  <div id="app" @scroll.prevent="">
    <keep-alive> <router-view/> </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/context/MainTabBar.vue";

  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import './assets/css/base.css';

</style>
