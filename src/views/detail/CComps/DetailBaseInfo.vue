<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goodsInfo.newPrice}}</span>
      <span class="old-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>  
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: Object,
    default: () => {}
  },

  created () {
    // console.log(this.goodsInfo)
  },

  methods: {
    
  }
}
</script>

<style scoped>
  .base-info {
    padding: 7px;
  }

 .title {
   padding-top: 6px;
   font-size: 16px;
   font-weight: 500;
   color: black;
 }

 .info-price {
   padding-top: 9px;
 }

 .info-price > * {
   margin-right: 6px;
 }

 .info-price .new-price {
   font-size: 23px;
   color: var(--color-high-text);
 }

 .info-price .old-price {
    font-size: 13px;
    text-decoration: line-through;
 }

 .info-price .discount {
    line-height: 12px;
    font-size: 12px;
    color: white;
    border-radius: 6px;
    padding: 0 5px;

    position: relative;
    top: -6px;

    background-color: var(--color-high-text);
 }


 .info-other {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 7px;
    font-size: 12px;

    border-bottom: 2px solid rgba(100,100,100,.1);
 }

 .info-other:first-child {
   text-align: left;
 }

 .info-services {
   display: flex;
   justify-content: space-between;
   padding-top: 20px;
   padding-bottom: 20px;
 }

 .info-services .info-service-item img {
    width: 13px;
    position: relative;
    top: 2px;
 }

 .info-services .info-service-item span {
    font-size: 13px;
 }

</style>