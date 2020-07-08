<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" v-bind:key="index">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" style="width: 100%" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { SwiperItem, Swiper } from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: ()=> []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>

</style>
