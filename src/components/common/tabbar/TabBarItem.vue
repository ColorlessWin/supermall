<template>
  <div class="tabBar-item" @click="onclick">
    <div class="switch" v-if="!isActive">
      <slot name="img"></slot>
      <slot name="title"></slot>
    </div>
    <div class="switch" v-else>
      <slot name="img-active"></slot>
      <slot name="title"></slot>
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
      return this.$route.path.indexOf(this.href) !== 1
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

  .tabBar-item .item-icon {
    width: 25px;
  }

  .tabBar-item .lable {
    margin-top: 3px;
    font-size: 12px;
  }
</style>
