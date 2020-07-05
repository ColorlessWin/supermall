<template>
  <div class="multepager">
      <multepager-tab-bar v-bind:titles="titles" v-on:tabbar-switch="onTabbarSwitch">
      </multepager-tab-bar>
    <div class="container" v-bind:style="container.style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import MultepagerTabBar from "./MultepagerTabBar";

  export default {

    name: "Multepager",
    components: {
      MultepagerTabBar,
    },

    props: {
      pageSpacing: {
        type: Number,
        default: 8
      },

      titles: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        container: {
          el: null,
          width: 0,
          style: {
            transition: 'all 0.5s ease 0s',
            transform: 'translate(-8px, 0)'
          },
          pages: {
            width: 0,
            els: null,
            count: 0,
          }
        },
        pageIndex: 0,
      }
    },

    methods: {

      onScroll(pos, scroll) {
        let offset_top = this.$el.offsetTop
        if (scroll.movingDirectionY > 0)
          if (-pos.y > (offset_top - 100)) {
            scroll.scrollTo(0, -offset_top, 350)
          }
      },

      to(index) {
        if (index > this.container.pages.count - 1 || index < 0)
          return undefined;
        if (index === this.pageIndex) return undefined;

        let offset = this.container.pages.els[index].offsetLeft
        // this.container.style.transition = `all ${0.5 / Math.abs(this.pageIndex - index)}s ease 0s`
        this.pageIndex = index
        this.containerTranslate(-offset)
      },

      containerTranslate(offset) {
        this.container.style.transform = `translate(${offset}px, 0)`
      },

      UpdateView() {
        this.$nextTick(function () {
          this.container.el = this.$el.querySelector('.container')
          this.container.width = this.container.el.clientWidth

          let pages = this.container.pages
          pages.els = this.container.el.children
          pages.count = pages.els.length
          pages.width = pages.els[0]

          for (let item of pages.els) {
            item.style = item.style.cssText
              .concat(`margin-left: ${this.pageSpacing}px; width: ${this.$el.clientWidth}px;`)
          }
        })
      },

      onTabbarSwitch(index) {
        this.to(index)
      }
    },
    updated() {
      this.UpdateView()
    },
  }
</script>

<style scoped>
  .multepager {
    width: 100%;
    overflow: hidden;
  }

  .multepager .container {
    display: inline-flex;
  }
</style>
