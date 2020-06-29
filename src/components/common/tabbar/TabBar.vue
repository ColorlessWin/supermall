<template>
  <div id="tabBar">
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  #tabBar {
    display: flex;

    background-color: #f6f6f6;
    height: 49px;

    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;

    box-shadow: 0 -5px 6px rgba(200, 200, 200, 0.3)
  }
</style>
