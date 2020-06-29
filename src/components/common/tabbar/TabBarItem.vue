<template>
  <div class="tabBar-item" @click="onclick">
    <div class="switch" v-if="!isActive">
      <div class="item-icon"><slot name="img"></slot></div>
      <div class="title"><slot name="title"></slot></div>
    </div>
    <div class="switch active" v-else>
      <div class="item-icon"><slot name="img-active"></slot></div>
      <div class="title"><slot name="title"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  props: {
    href: String
  },

  methods: {
    onclick: function() {
      this.$router.replace(this.href)
    }
  },

  computed: {
    isActive: function() {
      return this.$route.path.indexOf(this.href) !== -1
    }
  }
}
</script>

<style scoped>
  .tabBar-item {
    display: flex;
    flex-grow: 1;
  }

  .tabBar-item .switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  .tabBar-item .switch .item-icon > * {
    width: 25px;
  }

  .tabBar-item .title > * {
    /*margin-top: 3px;*/
    font-size: 12px;
  }

  .tabBar-item .active .title > * {
    /*margin-top: 3px;*/
    color: orangered;
  }
</style>
