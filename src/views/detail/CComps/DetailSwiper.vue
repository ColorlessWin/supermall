<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topimages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },

  props: {
    topimages: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>
  .detail-swiper {
    height: 350px;
    overflow: hidden;
  }

  .detail-swiper img {
    width: 100%;
    margin-top: 50%;
    transform: translate(0, -50%);
  }
</style>