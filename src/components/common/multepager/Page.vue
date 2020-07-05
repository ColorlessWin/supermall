<template>
  <div class="page" :style="{'height': height}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "multepager-page",
    props: {
      height: {
        type: String,
        default: '100%'
      },

      title: {
        type: String,
        default: '未命名'
      }
    }
  }
</script>

<style scoped>
  .page {
    flex-shrink: 0;
  }
</style>
