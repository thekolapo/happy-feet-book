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
    <section class="c-book">
      <div class="c-book__container">
        <h2 class="">About the book</h2>
        <p>
          "The Boys with the Happy Feet Dance" by Bode Abifarin follows two
          brothers, Nathan and Ethan, as they navigate their passions and life’s
          challenges all at the same time.
        </p>
        <p>
          First, Nathan finds joy in playing the piano, initially struggling but
          eventually mastering it with the support of his family and instructor.
          He flourishes during a music concert, making his mother proud.
          Meanwhile, Ethan discovers his love for swimming, overcoming his
          initial fear with the help of his dedicated instructor and family. His
          enthusiasm for the sport grows as he practises regularly, embracing it
          as a source of joy and accomplishment. Then there’s his love for
          bouncing balls which leads him to basketball, as he learns new skills
          and gains confidence with the support of his coach and family.
        </p>
        <p>
          Nathan's fascination with wildlife, particularly insects, shines
          through during his visit to the Conservation Fund. Despite his
          challenges, Nathan finds happiness in nature and playful interactions
          with his family. The brothers explore the vibrant world of colours at
          a game arcade, bonding with each other and their family while engaging
          in the various activities, including “riding” the escalator! They also
          discover a passion for soccer, albeit with different levels of comfort
          and enthusiasm. While Nathan struggles with the new experience, he
          gradually embraces it with the support of his family and coaches.
        </p>
      </div>
      <img
        src="@/assets/images/book-illustration.jpg"
        alt="book illustration"
      />
      <div class="c-book__container">
        <p>
          Ethan copes with illness and hospital visits by finding comfort in his
          family's care and routines. In the same vein, Nathan confronts his
          fear of hair clippers, gradually overcoming it through exposure
          therapy and support from his family and teachers
        </p>
        <p>
          The brothers' journey highlights themes of perseverance, unwavering
          familial support and finding joy in personal interests despite
          whatever challenges come. Through their experiences, they learn and
          grow, ultimately embracing their passions and individuality. It's
          written in the boys' voices, from the direct perspective of children
          living on the spectrum, with just enough humour and wit. Ending with
          "Mum's View", a section entirely dedicated to every step the author
          has taken to raise her boys to thrive in modern society.
        </p>
      </div>
    </section>
    <section class="c-author">
      <div class="c-author__container">
        <h2 class="">About the author</h2>
        <p>
          My name is Bode Abifarin and I am mom to Ethan and Nathan Abifarin
          (twin boys) 8 years old.
        </p>
        <p>
          I am a C-level executive with over 21 years of experience. I worked in
          KPMG for over 15 years before working in payments and Fintech. I have
          taken several short courses in speech therapy, behaviour modification
          and ABA to help my children along their journey. I have shared my
          knowledge freely with other younger moms at my children’s school and
          also at my church community groups. I have been active in setting up a
          class for children on the spectrum in our Sunday school.
        </p>
        <p>
          We discovered Ethan was on the spectrum when he turned 3 - he was
          verbal but slowly started to lose his speech. We started therapy for
          him immediately. His brother Nathan was not diagnosed till about 4 as
          he had no issues but we later started to see him regress. He also
          started therapy post diagnosis.
        </p>
        <p>
          I did a lot of research and put together a team of therapists and
          facilitators to help the boys and opted for a Montessori school in the
          morning and then therapy in the afternoon hours. I started learning
          about how what foods, fruits and supplement beneficial to them and
          also got them involved in sports - swimming, piano, basketball,
          football with a lot of outdoor games and plays.
        </p>
        <p>
          Today, they are both verbal, and we continue to journey to social
          integration with a community of other moms on the spectrum. I am
          currently writing a book on the different aspects of their lives - The
          Adventures of the Boys with the Happy Feet Dance and it chronicles
          their journey across different sports and everyday living.
        </p>
        <img src="@/assets/images/bode.png" alt="author's picture" />
      </div>
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
    border-radius: 100%;
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

.c-book,
.c-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  // background: linear-gradient(180deg, #fff 0%, #effbf1 15%, #fff 100%);
  background: linear-gradient(180deg, #fff 0%, #effbf1 15%);
  padding: 25rem 0;

  &__container {
    max-width: 70rem;
  }

  h2 {
    margin-bottom: 5rem;
  }

  p {
    margin-top: 3rem;
  }

  img {
    // position: relative;
    width: 50vw;
    height: auto;
    left: calc(-35vw + 50%);
    margin: 4rem 0 1rem;
    background: gray;
  }
}

.c-author {
  padding-top: 10rem;
  margin-top: 0;
  // background: linear-gradient(180deg, #fff 0%, #fed2c0 100%);
  background: linear-gradient(180deg, #effbf1 0%, #eff6fb 50%);

  &__container {
    max-width: 75rem;
  }

  img {
    max-height: 70rem;
    object-fit: cover;
    object-position: top;
  }
}
</style>
