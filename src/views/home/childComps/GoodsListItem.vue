<template>
  <div class="goods-item">
    <img :src="goodsInfo.show.img" @load="$bus.$emit('image-loaded')" alt="">
    <div class="goods-info">
      <div class="title">{{goodsInfo.title}}</div>
      <span class="price">¥{{goodsInfo.price}}</span>
      <span class="collect">{{goodsInfo.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsInfo: {
        type: Object,
        default: ()=> {}
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-item .goods-info {
    font-size: 12px;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 6px;
  }

  .goods-item .title {
    margin-bottom: 3px;
    padding: 0 2px;
    text-indent: 10px;
    text-align: left;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .goods-item .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-item .collect {
    position: relative;
  }

  .goods-item .collect::before {
    display: inline-block;
    position: absolute;
    left: -14px;
    top: -1px;
    content: '';
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;;
  }
</style>
