<template>
  <div id="detail">
    <div id="top">
      <detail-nav-bar :titles="['商品', '参数', '评论', '推荐']"/>
    </div>
    <div id="center">
      <scroll>
        <div id="content">
          <detail-swiper :topimages="topimages"></detail-swiper>
          <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
          <detail-shop-info :shop="shopInfo"></detail-shop-info>
          <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
        </div>
      </scroll>
    </div>
    <div id="bottom"></div>
  </div>
</template>

<script>
import {
  Goods,
  Shop
} from '@/network/detail'
import { getDetailData } from '@/network/detail'

import Scroll from '@/components/common/scroll/Scroll'

import DetailNavBar from './CComps/DetailNavBar'
import DetailSwiper from './CComps/DetailSwiper'
import DetailBaseInfo from './CComps/DetailBaseInfo'
import DetailShopInfo from './CComps/DetailShopInfo'
import DetailGoodsInfo from './CComps/DetailGoodsInfo'

export default {
  name: 'Detail',
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo
  },

  data() {
    return {
      topimages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {}
    }
  },

  created () {
    console.log(this.$route.params)
    getDetailData(this.$route.params.iid).then((result => {      
      let data = result.result

      this.topimages = data.itemInfo.topImages

      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shopInfo = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo

      // console.log(this.detailInfo) 
    }))
  }
}
</script>

<style scoped>
  #bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    height: 49px;
  }

  #top {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 42px;
  }

  #center {
    position: absolute;
    top: 42px;
    right: 0;
    left: 0;
    bottom: 49px;
  }

  #content {
    background-color: #eeeeee;
  }

  #content > * {
    background-color: white;
    margin-top: 4px;
  }
</style>