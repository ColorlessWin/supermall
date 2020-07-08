<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" class="logo">
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="sells-info shop-middle-left-item">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="lable">总销量</div>
        </div>
        <div class="goods-info shop-middle-left-item">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="lable">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <button class="enter-shop">进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  },

  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>

  .shop-info {
    padding: 5px 5px 10px 5px;

  }

  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-top .logo {
    height: 50px;
    margin-left: 20px;
    border-radius: 50%;
  }

  .shop-top .name {
    margin-left: 10px;
  }

  .shop-middle {
    display: flex;
  }

  .shop-middle .shop-middle-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    
    position: relative;
  }

  .shop-middle-left .shop-middle-left-item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  }

  .shop-middle-left .sells-info .sells-count,
  .shop-middle-left .goods-info .goods-count {
    font-size: 20px;
  } 

  .shop-middle-left .sells-info .lable,
  .shop-middle-left .goods-info .lable {
    font-size: 12px;
    margin-top: 5px;
  } 

  .shop-middle-right table td{
    padding: 3px 5px;
    font-size: 13px;
  }

  .better {
    font-size: 11px !important;
    color: white;
    border-radius: 5px;
    background-color: #5ea732;
  }

  .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better-more {
    background-color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 15px;
    text-align: center;
  }

  .shop-bottom .enter-shop {
    width: 200px;
    height: 35px;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 8px;
  }

  .shop-middle .shop-middle-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    width: 2px;
    height: 45px;
    background-color: rgba(100,100,100,.1);
  }
</style>