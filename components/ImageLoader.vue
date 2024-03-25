<template>
  <div ref="imgLoader" class="c-image-loader">
    <div class="c-image-loader__container">
      <div class="c-image-loader__counter">
        <span>{{ counter }}</span>
        <div class="c-image-loader__overlay"></div>
      </div>
      <svg
        class="c-image-loader__stroke"
        viewBox="0 0 120 120"
        fill="transparent"
      >
        <circle cx="60" cy="60" r="59.5" stroke="black" stroke-width="0.5" />
      </svg>
      <div ref="clickIndicator" class="c-image-loader__click">
        <p>Click anywhere to continue</p>
        <p>
          A calm background music is part of the website experience, with the
          option to disable it at any time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      hiddenLoader: false,
    }
  },
  mounted() {
    this.loadImage()
    this.startCounter()
  },
  methods: {
    loadImage() {
      const vm = this
      const img = new Image()
      img.src = require(`@/assets/images/book-render.png`)

      img.onload = () => {
        setTimeout(() => {
          vm.completeLoaderAnim()
        }, 1800)
      }
    },
    startCounter() {
      setTimeout(() => {
        this.counter = 20
        const counter = setInterval(() => {
          this.counter += 20

          if (this.counter === 80) clearInterval(counter)
        }, 150)
      }, 1000)
    },
    completeLoaderAnim() {
      this.counter = '100'
      this.$refs.imgLoader.style.setProperty('--text-translate-value', '100%')
      this.$refs.imgLoader.style.setProperty('--stroke-dashoffset', '375')
      this.$refs.clickIndicator.style.opacity = 1

      this.$refs.imgLoader.addEventListener('click', () => {
        if (this.hiddenLoader) return
        this.hiddenLoader = true
        this.$refs.clickIndicator.style.transition = '0.6s linear 0s'
        this.$refs.clickIndicator.style.opacity = 0
        this.$parent.toggleAudio()

        setTimeout(() => {
          this.$parent.showPage()
        }, 600)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/image-loader.scss';
</style>
