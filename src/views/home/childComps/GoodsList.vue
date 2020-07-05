<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods.list" :goods-info="item"> </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  import {getGoodsData} from "../../../network/home";

  export default {
    name: "GoodsList",
    props: {
      products: {
        type: Object,
        default: ()=> []
      }
    },

    data() {
      return {
        goods: {
          page: 1,
          list: []
        }
      }
    },

    methods: {
      onPullingUp(scroll) {
        this.getHOmeProducts(this.products.type)
          .then(() => {
            scroll.finishPullUp()
          })
      },

      getHOmeProducts(type) {
        return new Promise((resolved, rejected) => {
          getGoodsData(type, this.goods.page)
            .then((result) => {
            this.goods.list.push(...result.data.list)
            this.goods.page += 1
            resolved()
          }, (error) => { rejected(error) })
        })
      }
    },

    created() {
      this.$bus.$on('image-loaded', ()=> {
        this.$bus.$emit('content-changed')
      })

      this.getHOmeProducts(this.products.type)
    },

    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding-top: 5px;
  }
</style>
