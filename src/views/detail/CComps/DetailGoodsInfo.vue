<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="desc">
      <div class="start"></div>
      <div class="text">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item"
           @load="imgLoaded">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo : {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    imgLoaded() {
      this.$bus.$emit('content-changed')
    }
  }
}
</script>

<style scoped>

  .detail-info {
    padding-top: 10px;
  }

  .detail-info .desc {
    position: relative;
    padding: 0px 14px;
    font-size: 13px;
  }

  .detail-info .desc .text {
    padding: 16px 0px;
  }

  .start {
    width: 5px;
    height: 5px;
    background-color: black;

    position: relative;
  }

  .end {
    width: 5px;
    height: 5px;
    background-color: black;

    position: relative;
    float: right;
  }

  .start::after {
    content: '';
    position: absolute;
    bottom: -0.5px;

    height: 1px;
    width: 80px;
    background-color: #a3a3a5;
  }

  .end::before {
    content: '';
    position: absolute;
    bottom: .5px;
    left: -80px;

    height: .5px;
    width: 80px;
    background-color: #a3a3a5;
  }

  .info-key {
    margin: 10px 0 10px 12px;
    color: #333;;
    font-size: 13px;
  }

  .info-list > img {
    width: 100%;
  }  
</style>