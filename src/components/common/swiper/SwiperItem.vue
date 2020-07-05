<template>
  <div v-bind:style="style" class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "SwiperItem",
    data() {
      return {
        style: {
          width: '0px'
        }
      }
    },

    created() {
      let deviceWidth = document.body.clientWidth
      this.style.width = deviceWidth + 'px'
    }
  }
</script>

<style scoped>
  .swiper-item {
    display: flex;
    flex-shrink: 0;
  }
</style>
