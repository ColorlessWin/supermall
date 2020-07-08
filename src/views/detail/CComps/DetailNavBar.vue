<template>
  <div class="detail-nav-bar">
    <top-bar>
      <img slot="left" class="icon-back" 
            src="~@/assets/img/common/back.svg" 
            @click="onBackClick" alt="">
      <div slot='center' class="nav">
        <span v-for="(title, index) in titles" :key="index" class="title-item"
            @click="onItemClick(index)"
            :class="{'active': curActive == index}">
          {{title}}
        </span>
      </div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from '@/components/common/topbar/TopBar.vue'

export default {
  name: 'DetailNavBar',
  components: {
    TopBar
  },
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() { 
    return {
      curActive: 0,
    }
  },

  methods: {
    onBackClick() {
      this.$router.back()
    },

    onItemClick(index) {
      this.curActive = index
    }
  }
}
</script>

<style scoped>
  .nav {
    display: flex;
    /* background-color: blueviolet; */
    height: 100%;
    width: 100%;

  }

  .title-item {
    flex-grow: 1;
    text-align: center;
    line-height: 42px;

    font-size: 13px;
  }

  .active {
    color: pink;
  }
</style>