<template>
  <div class="multepager-tabbar">
    <div v-for="(item, index) in titles"
         @click="clicked(index)"
         class="title-item">
      <div v-bind:class="{'active-title': actived === index}"
           class="title">{{item}}</div>
      <div v-bind:class="{'active-strip': actived === index}"
           class="strip"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MultepagerTabBar",
    props: {
      titles: {
        type: Array,
        default: ()=> []
      }
    },
    data() {
      return {
        actived: 0,
      }
    },

    methods: {
      clicked(index) {
        this.actived =index
        this.$emit('tabbar-switch', index)
      }
    }
  }
</script>

<style scoped>
  .multepager-tabbar {
    display: flex;
    height: 45px;

    background-color: #eeeeee;
  }

  .multepager-tabbar .title-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  .multepager-tabbar .title-item .strip {
    height: 3px;
    width: 30%;
    margin-top: 5px;

  }

  .multepager-tabbar .title-item .title {
    font-size: 14px;
  }

  .multepager-tabbar .title-item .active-title {
    color: hotpink;
  }

  .multepager-tabbar .title-item .active-strip {
    background-color: hotpink;
  }
</style>
