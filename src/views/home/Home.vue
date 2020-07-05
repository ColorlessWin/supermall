<template>
  <div id="home">
    <div id="top">
      <top-bar class="home-top-bar"> <div slot="center">购物街</div> </top-bar>
    </div>
      <div id="main-context">
        <scroll class="container" :click="true">
          <home-swiper v-bind:banners="banners"></home-swiper>
          <feature-view v-bind:items="features"></feature-view>
          <recommend-view></recommend-view>
          <multepager v-bind:page-spacing="8" :titles="['流行', '热销', '新款']">
            <page height="calc(100vh - 136px)">
              <scroll :stop-propagation="true" :click="true">
                <goods-list :products="goods.pop"></goods-list>
              </scroll>
            </page>
            <page height="calc(100vh - 136px)">
              <scroll :stop-propagation="true" :click="true">
                <goods-list :products="goods.sell"></goods-list>
              </scroll>
            </page>
            <page height="calc(100vh - 136px)">
              <scroll :stop-propagation="true" :click="true">
                <goods-list :products="goods.new"></goods-list>
              </scroll>
            </page>
          </multepager>
        </scroll>
    </div>
  </div>
</template>

<script>
  import {
    getHomeMultiDate,
  } from "../../network/home";

  import TopBar from "@/components/common/topbar/TopBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import FeatureView from "./childComps/FeatureView";
  import RecommendView from "./childComps/RecommendView";
  import { Multepager, Page } from '@/components/common/multepager'
  import GoodsList from "./childComps/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        features: [],
        goods: {
          pop:  { type: 'pop' },
          sell: { type: 'sell' },
          new:  { type: 'new' }
        }
      }
    },
    components: {
      TopBar,
      HomeSwiper,
      FeatureView,
      RecommendView,
      Multepager,
      Page,
      GoodsList,
      Scroll
    },
    created() {
     getHomeMultiDate().then(result => {
        this.banners = result.data.banner.list
        this.features = result.data.recommend.list
      })
    },

    methods: {

    }
  }
</script>

<style scoped>

  #home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-bottom: 49px;
  }

  .home-top-bar {
    background-color: pink;
  }

  #top {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  #main-context {
    overflow: hidden;
    position: absolute;
    top: 42px;
    right: 0;
    left: 0;

    height: 100%;
    padding-bottom: 93px;
  }
</style>
