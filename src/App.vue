<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  // import router from '../src/router'

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
