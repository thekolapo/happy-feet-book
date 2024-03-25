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

        setTimeout(() => {
          this.$parent.showPage()
        }, 600)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.c-image-loader {
  --bg-color: #fff;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  --text-anim-duration: 1s;
  --text-translate-value: 0%;
  --stroke-length: 375;
  --stroke-dashoffset: 0;
  left: calc(-50vw + 50%);
  background: linear-gradient(180deg, #fbeff4 0%, #fff 50%);

  @keyframes slideup {
    from {
      transform: translateY(100%);
    }
  }

  @keyframes drawcircle {
    from {
      stroke-dashoffset: var(--stroke-length);
    }
  }

  @keyframes reveal {
    to {
      opacity: 1;
    }
  }

  &__container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    @include screen('small') {
      top: 40%;
    }
  }

  &__counter {
    position: relative;
    font-size: 3.5rem;
    font-family: 'Canela';
    font-variant-numeric: tabular-nums;

    @media screen and (min-width: 1920px) {
      font-size: 2.08vw;
    }

    span {
      display: inline-block;
      z-index: 1;
      transform: translateY(var(--text-translate-value));
      transition: transform $ease-out-expo var(--text-anim-duration) 1s;
      animation: slideup var(--text-anim-duration) $ease-out-expo;

      &:after {
        content: '%';
      }
    }
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: var(--bg-color);
    transform: translateY(100%);
  }

  &__stroke {
    --size: 170px;
    $transition-duration: 0.6s;
    position: absolute;
    z-index: 3;
    width: var(--size);
    height: var(--size);
    opacity: 0;
    stroke-dasharray: var(--stroke-length);
    stroke-dashoffset: var(--stroke-dashoffset);
    transform: rotate(-90deg);
    transition: $transition-duration ease-out 0.5s;
    animation: drawcircle $transition-duration ease-out
        calc(var(--text-anim-duration) - #{$transition-duration}),
      reveal 0s linear
        calc(var(--text-anim-duration) - #{$transition-duration} + 50ms)
        forwards;

    @media screen and (min-width: 1920px) {
      --size: 10.12vw;
    }
  }

  &__click {
    position: absolute;
    width: 100vw;
    text-align: center;
    z-index: 4;
    transform: translateY(-40%);
    opacity: 0;
    transition: opacity 1.8s linear 1.7s;
    padding: 0 1.5rem;

    @include screen(small) {
      transform: translateY(-10%);
    }

    > :first-child {
      font-family: 'Canela';
      font-size: 3rem;

      @include screen(small) {
        font-size: 2.7rem;
      }
    }

    > :last-child {
      font-size: 1.6rem;
      max-width: 45rem;
      margin: 1.5rem auto 0;
    }
  }
}
</style>
