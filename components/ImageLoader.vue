<template>
  <div ref="imgLoader" class="c-image-loader">
    <div class="c-image-loader__container">
      <div class="c-image-loader__counter">
        <span>{{ counter }}</span>
        <div class="c-image-loader__overlay"></div>
      </div>
      <svg
        class="c-image-loader__stroke"
        width="135"
        height="135"
        viewBox="0 0 135 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3241_4372)">
          <path
            d="M50.9336 121.107C51.0427 121.102 51.1512 121.125 51.2489 121.174V121.174C51.2829 121.191 51.3153 121.211 51.3457 121.234L65.6005 131.884C67.4255 133.248 69.9415 133.205 71.7194 131.781L84.3995 121.622C85.3049 120.896 86.4343 120.508 87.5943 120.524L103.835 120.747C106.111 120.778 108.121 119.268 108.724 117.073L113.029 101.413C113.334 100.305 114.011 99.3354 114.946 98.6679L128.158 89.2412C130.009 87.9207 130.736 85.5178 129.928 83.3929L124.143 68.1898C123.727 67.0977 123.708 65.8947 124.087 64.7895L129.34 49.4735C130.081 47.3121 129.263 44.9231 127.352 43.6701L112.443 33.8938C112.349 33.8322 112.274 33.7469 112.223 33.6465V33.6465C112.208 33.6154 112.195 33.5831 112.185 33.5499L106.942 16.5941C106.27 14.4186 104.212 12.9723 101.937 13.0762L84.0663 13.8922C83.9572 13.8972 83.8487 13.8742 83.751 13.8253V13.8253C83.717 13.8083 83.6846 13.7884 83.6542 13.7656L69.3971 3.11378C67.5732 1.75106 65.0589 1.79265 63.281 3.21495L50.6996 13.2801C49.7947 14.004 48.6664 14.3911 47.5077 14.3753L31.2651 14.1528C28.9888 14.1216 26.9788 15.632 26.3754 17.827L22.0701 33.4896C21.7659 34.596 21.0906 35.5641 20.1572 36.2315L6.83564 45.7575C4.98789 47.0788 4.26301 49.4797 5.07082 51.6027L10.8569 66.8099C11.2724 67.9019 11.2924 69.1049 10.9133 70.2101L5.66002 85.5261C4.91866 87.6875 5.73692 90.0765 7.64776 91.3295L22.5566 101.106C22.6505 101.167 22.7264 101.253 22.7766 101.353V101.353C22.7921 101.384 22.8051 101.416 22.8154 101.45L28.0578 118.406C28.7304 120.581 30.788 122.027 33.0627 121.923L50.9336 121.107Z"
            stroke="#1D1D1D"
          />
          <path
            d="M107.011 27.6066C106.882 27.5465 106.784 27.4352 106.74 27.2996V27.2996L99.0469 11.2657C98.0595 9.20779 95.8039 8.07977 93.5651 8.52428L77.664 11.6814C76.5266 11.9073 75.346 11.7307 74.3244 11.182L60.023 3.50091C58.0197 2.42494 55.5426 2.83633 53.9946 4.50211L42.9184 16.4209C42.1298 17.2696 41.071 17.818 39.9229 17.9726L23.8721 20.1333C21.6127 20.4374 19.8451 22.2315 19.5745 24.4952L17.6469 40.6245C17.5093 41.7764 16.9753 42.8446 16.1366 43.646L4.39403 54.8673C2.74818 56.4401 2.37251 58.9261 3.48015 60.915L12.1529 76.4876C12.2125 76.5946 12.2238 76.7218 12.184 76.8376V76.8376C12.1773 76.8573 12.1719 76.8774 12.1681 76.8979L8.88205 94.3664C8.45934 96.6136 9.61487 98.8612 11.6884 99.8249L27.8188 107.322C27.9481 107.382 28.0465 107.494 28.0904 107.629V107.629L35.7833 123.663C36.7706 125.721 39.0262 126.849 41.265 126.405L57.1661 123.247C58.3036 123.022 59.4841 123.198 60.5057 123.747L74.8071 131.428C76.8104 132.504 79.2875 132.093 80.8355 130.427L91.9099 118.51C92.6996 117.66 93.7602 117.111 94.91 116.958L111.095 114.794C113.357 114.492 115.127 112.697 115.397 110.431L117.325 94.3057C117.462 93.1538 117.996 92.0856 118.835 91.2842L130.578 80.0629C132.223 78.4901 132.599 76.0041 131.491 74.0152L122.818 58.4415C122.759 58.3352 122.748 58.2088 122.787 58.0938V58.0938C122.794 58.0733 122.8 58.0524 122.803 58.0311L125.977 40.5417C126.383 38.3037 125.228 36.0735 123.165 35.1148L107.011 27.6066Z"
            stroke="#1D1D1D"
          />
        </g>
        <defs>
          <clipPath id="clip0_3241_4372">
            <rect width="135" height="135" fill="white" />
          </clipPath>
        </defs>
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
      this.$refs.imgLoader.style.setProperty('--stroke-dashoffset', '438')
      this.$refs.clickIndicator.style.opacity = 1

      this.$refs.imgLoader.addEventListener('click', () => {
        if (this.hiddenLoader) return
        this.hiddenLoader = true
        this.$refs.clickIndicator.style.transition = '0.6s linear 0s'
        this.$refs.clickIndicator.style.opacity = 0

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
