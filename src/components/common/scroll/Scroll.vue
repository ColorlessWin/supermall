<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { debounce } from "../../../common/utils";

  export default {
    name: "Scroll",
    props: ['stopPropagation', 'click'],
    data() {
      return {
        scroll,
        x: 0,
        y: 0
      }
    },

    activated () { 
      this.scroll.refresh()
      this.scroll.scrollTo(this.x, this.y, 0)
    },

    deactivated () {
      this.x = this.scroll.x
      this.y = this.scroll.y
    },

    mounted() {
      this.scroll = new BScroll(this.$el, {
        click: this.click,
        stopPropagation: this.stopPropagation,
        probeType: 3,
        pullUpLoad: true,
      })

      const refresh = debounce(this.scroll.refresh, this.scroll, 100)
      this.$bus.$on('content-changed',  () => {
        refresh()                
      })

      this.event_bind()
    },

    methods: {
      event_bind() {
        let scroll = this.scroll
        for (let child of this.$children) {
          this.scroll.on('scroll', function (position) {
            if (child.onScroll)
              child.onScroll(position, scroll)
          })

          this.scroll.on('pullingUp', () => {
              if (child.onPullingUp)
                child.onPullingUp(scroll)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
