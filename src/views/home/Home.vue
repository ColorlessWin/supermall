<template>
  <div id="home">
    <top-bar class="home-top-bar"> <div slot="center">购物街</div> </top-bar>
    <h1>Home</h1>
  </div>
</template>

<script>
  import TopBar from "../../components/common/topbar/TopBar";

  export default {
    name: "Home",
    components: {
      TopBar
    },
    created() {

    }
  }
</script>

<style scoped>
  .home-top-bar {
    background-color: pink;
  }
</style>
