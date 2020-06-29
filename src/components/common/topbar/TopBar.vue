<template>
  <div class="top-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>

  .top-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 42px;
  }

  .left, .center, .right {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .left, .right {
    width: 60px;
    /*background-color: red;*/
  }

  .center {
    flex-grow: 1;
    /*background-color: pink;*/
  }
</style>
