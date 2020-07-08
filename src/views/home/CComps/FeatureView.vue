<template>
  <div class="feature">
    <div class="feature-item" v-for="(item, index) in items">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    props: {
      items: {
        type: Array,
        default: ()=> []
      }
    }
  }
</script>

<style scoped>
  .feature {
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    font-size: 11px;

    border-bottom: 10px solid #eeeeee;
  }

  .feature .feature-item {
    flex-grow: 1;
    text-align: center;
  }

  .feature .feature-item img {
    width: 70px;
    margin-bottom: 7px;
  }
</style>
