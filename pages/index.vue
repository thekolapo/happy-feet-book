<template>
  <div class="container">
    <section class="c-hero">
      <h1 class="c-hero__heading">The Boys with the Happy Feet Dance</h1>
      <p class="c-hero__subtext">
        A book by Bode Abifarin that follows two brothers, Nathan and Ethan, as
        they navigate their passions and life’s challenges all at the same time.
      </p>
      <button>Pre-order</button>
    </section>
    <!-- <client-only>
      <flickity
        ref="flickity"
        class="home__projects"
        :options="flickityOptions"
      >
        <a
          href="https://www.vistanium.com/"
          target="_blank"
          class="home__project home__project--vistanium"
        >
          <img
            src="@/assets/images/vistanium-mag-img.jpg"
            alt="Vistanium mag image"
          />
          <p class="u-font-normal">Vistanium Mag</p>
          <p>
            Immersive essays that narrate extraordinary true stories. They
            provide compelling insights into life in various cities, offering
            readers a rich, multifaceted perspective.
          </p>
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/i-too-sabi/id1653930660"
          target="_blank"
          class="home__project"
        >
          <img src="@/assets/images/i-too-sabi.jpg" alt="I too sabi image" />
          <p class="u-font-normal">I too sabi</p>
          <p>
            A Nigeria-focused conversational "ask me anything" podcast that
            answers a wide range of questions through research and expert
            insights.
          </p>
        </a>
        <a
          href="https://www.sunandcountry.com/"
          target="_blank"
          class="home__project home__project--sun-country"
        >
          <img
            src="@/assets/images/sun-and-country.svg"
            alt="Sun and Country image"
          />
          <p class="u-font-normal">Sun and Country</p>
          <p>
            A story-led guide to understanding the Nigerian Civil War, capturing
            the events that led to it, how it played out on all sides, and how
            it continues to shape our world today.
          </p>
        </a>
        <a
          href="https://podcasts.apple.com/za/podcast/i-like-girls/id1572625602/"
          target="_blank"
          class="home__project home__project--i-like-girls"
        >
          <img
            src="@/assets/images/i-like-girls.png"
            alt="I like girls image"
          />
          <p class="u-font-normal">I like girls</p>
          <p>
            A documentary-style, narrative-driven podcast exploring the diverse
            stories of African women. It offers firsthand insights into how
            gender shapes women's lives.
          </p>
        </a>
        <a
          href="https://hundredgood.com/"
          target="_blank"
          class="home__project"
        >
          <img
            src="@/assets/images/hundred-good.png"
            alt="Sun and Country image"
          />
          <p class="u-font-normal">HundredGood</p>
          <p>
            An annual curation of 100 good things that have happened across
            Africa. Every December, it offers a hopeful outlook on a continent
            riddled with a singular narrative of negativity.
          </p>
        </a>
      </flickity>
    </client-only> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 3000,
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 17rem;
  text-align: center;

  &__heading {
    max-width: 120rem;
  }

  &__subtext {
    max-width: 72rem;
    margin-top: 5rem;
  }

  button {
    $size: 16rem;
    position: relative;
    width: $size;
    height: $size;
    border: none;
    background: none;
    margin-top: 10rem;
    font-weight: 500;
    font-size: 1.6rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 1px dashed #1d1d1f;
      transform: scale(1.1);
      transition: 1.2s $ease-out-expo;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -2;
      background: #ff7c94;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      transition: 1.2s $ease-out-expo;
      transform: translate(50%, -30%) scale(0.7);
    }

    &:hover {
      &::before {
        transform: scale(1);
        border: 1px dashed rgba(0, 0, 0, 0);
      }

      &::after {
        transform: translate(0) scale(1);
      }
    }
  }
}
</style>
