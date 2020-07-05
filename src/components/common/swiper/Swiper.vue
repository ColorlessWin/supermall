<template>

  <div @touchstart.prevent="touchStart" @touchmove.prevent="touchMove" @touchend.prevent="touchEnd"
        id="swiper">
    <div v-bind:style="transition"
         class="wrap"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        index: 0,
        width: 0,
        wrapWidth: 0,
        sideCount: 0,
        side_offset: 0,
        timer: 0,

        isTouch: false,
        perClientX: 0,

        transition: {
          transition: 'all 0.8s',
          transform: 'translate(0px, 0)'
        }
      }
    },

    methods: {

      touchStart(ev) {
        this.isTouch = true
        this.perClientX = ev.changedTouches[0].clientX
        this.isTransition(false)
        clearInterval(this.timer)
      },

      touchEnd() {
        this.isTouch = false
        this.isTransition(true)
        this.setTimer()

        let per_offset = -(this.perIndex() * this.width)
        let next_offset = -(this.nextIndex() * this.width)
        if (Math.abs(this.side_offset - per_offset) > Math.abs(this.side_offset - next_offset)) {
          this.go(this.nextIndex())
        }else {
          this.go(this.perIndex())
        }
      },

      touchMove(ev) {
        let touch_offset = ev.changedTouches[0].clientX - this.perClientX;
        this.perClientX = ev.changedTouches[0].clientX
        this.side_offset = touch_offset + this.side_offset
        this.side_offset = Math.min(0, Math.max(-(this.wrapWidth - this.width), this.side_offset))
        this.side_move(this.side_offset)       
      },

      go(index) {
        this.index = index
        this.side_offset =  -(index * this.width)
        this.side_move(this.side_offset)
      },

      side_move(offset) {
        this.transition.transform = `translate(${offset}px, 0)`
      },

      isTransition(flag) {
        if(!flag) this.transition.transition = 'none'
        else this.transition.transition = 'all 0.8s'
      },

      nextIndex() {
        let index  = this.index + 1 > this.sideCount - 1? 0 : this.index + 1
        return index
      },

      perIndex() {
        let index = this.index - 1 < 0 ? this.sideCount - 1 : this.index - 1
        return index
      },

      setTimer() {
        this.timer = setInterval(()=> {
          if (this.isTouch) return

          this.index = this.nextIndex()
          this.go( this.index)
        }, 4000)
      }
    },

    created() {
      this.setTimer()
    },

    updated() {
      this.$nextTick(function () {
        this.width = this.$el.clientWidth
        this.sideCount = this.$el.querySelector('.wrap').children.length
        this.wrapWidth = this.width * this.sideCount
      })
    }
  }
</script>

<style scoped>
  #swiper {
    width: 100%;
    overflow: hidden;
  }

  #swiper::-webkit-scrollbar {
    display: none;
  }

  #swiper > div {
    display: flex;
  }
</style>
