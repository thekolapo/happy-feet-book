<template>
  <div class="home">
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
        <img src="@/assets/images/bode.jpeg" alt="author's picture" />
      </div>
    </section>
    <section class="c-reviews">
      <h2 class="">The book reviews</h2>
      <client-only>
        <flickity
          ref="flickity"
          class="c-reviews__flickity"
          :options="flickityOptions"
        >
          <div class="c-review">
            <p class="c-review__comment">
              “Her love for them absolutely pours out of every sentence, and I
              feel it. Just beautiful.”
            </p>
            <p class="c-review__reviewer">— Sholabomi Tinubu</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “An eye-opener and game-changer. Emotional. Challenging. Creative.
              Educative. Encouraging. Heartwarmingly good.”
            </p>
            <p class="c-review__reviewer">— Olubola Sangosanya</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “Honest, uplifting and packed with moments that’ll make you nod in
              agreement or tear up.”
            </p>
            <p class="c-review__reviewer">— Moyo Makanjuola</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “Bode Abifarin isn’t your everyday children’s book author; she’s a
              writer with a soul as vast as the universe.”
            </p>
            <p class="c-review__reviewer">
              — Ayo Oyeku, author of “The Finish Line”
            </p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “It is the rhythm in Bode Abifarin’s story that makes you see the
              glaring innocence and originality of childhood.”
            </p>
            <p class="c-review__reviewer">— Chimee Adioha, Black Boy Review</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “A delightful, heartwarming tale that dances off the pages and
              into your heart.”
            </p>
            <p class="c-review__reviewer">
              — John Ajimisogbe, Child Behaviour Analyst
            </p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “Through Abifarin’s beautifully crafted words, readers will find
              inspiration, empathy and hope.”
            </p>
            <p class="c-review__reviewer">— Adéṣolá Adéyẹyè</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “On every page, you see beauty, talent, love and above all,
              resilience. I am so inspired by the boys with the happy feet.”
            </p>
            <p class="c-review__reviewer">— Wunmi Adedipe</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “...a beacon of hope, affirming that with compassion,
              understanding and support, every child can dance to their own
              happy feet dance.”
            </p>
            <p class="c-review__reviewer">
              — Janine Udogu, author of “Ala Nnam: A Journey to Isuofia”
            </p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">“What a joyful story.”</p>
            <p class="c-review__reviewer">— Bisi Lamikanra</p>
          </div>
          <div class="c-review">
            <p class="c-review__comment">
              “a touching book in a world where people expect certain things
              from kids.”
            </p>
            <p class="c-review__reviewer">
              — Onyinye Odinmah, committee member, Akada Children’s Book
              Festival
            </p>
          </div>
        </flickity>
      </client-only>
    </section>
    <section v-if="!exceededLaunchTime" class="c-countdown">
      <p class="c-countdown__subtext">
        This book will be available on the
        <span class="u-font-400">27th of March, 2024</span> which is in:
      </p>
      <p class="c-countdown__timer">
        {{ countDown.days }} day(s), {{ countDown.hrs }} hrs :
        {{ countDown.mins }} min :
        <span class="c-countdown__timer-sec">{{ countDown.secs }}</span>
      </p>
    </section>
    <section class="c-illustrations">
      <img
        src="@/assets/images/book-illustration.jpg"
        alt="book illustration"
      />
      <img
        src="@/assets/images/book-illustration-1.jpg"
        alt="book illustration"
      />
      <img
        src="@/assets/images/book-illustration-2.jpg"
        alt="book illustration"
      />
      <img
        src="@/assets/images/book-illustration-3.jpg"
        alt="book illustration"
      />
      <img
        src="@/assets/images/book-illustration-4.jpg"
        alt="book illustration"
      />
      <img
        src="@/assets/images/book-illustration-5.jpg"
        alt="book illustration"
      />
    </section>
    <footer class="c-footer">
      <span>© Bode Abifarin 2024 </span>
      <span>
        Made with love by
        <a href="https://twitter.com/kolapo_" target="_blank"> Kolapo ❤️ </a>
      </span>
    </footer>
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
        autoPlay: 1400,
      },
      countDown: {
        days: '',
        hrs: '',
        mins: '',
        secs: '',
      },
      exceededLaunchTime: false,
    }
  },
  mounted() {
    this.countdownTimer('04/6/2024 00:00 AM')
  },
  methods: {
    countdownTimer(dt) {
      const end = new Date(dt)
      const _second = 1000
      const _minute = _second * 60
      const _hour = _minute * 60
      const _day = _hour * 24
      let timer = ''

      const showRemaining = () => {
        const now = new Date()
        const distance = end - now
        if (distance < 0) {
          clearInterval(timer)
          this.exceededLaunchTime = true
          return
        }
        const days = Math.floor(distance / _day)
        const hours = Math.floor((distance % _day) / _hour)
        const minutes = Math.floor((distance % _hour) / _minute)
        const seconds = Math.floor((distance % _minute) / _second)

        this.countDown.days = days
        this.countDown.hrs = hours
        this.countDown.mins = minutes
        this.countDown.secs = seconds < 10 ? `0${seconds}` : seconds
      }

      timer = setInterval(showRemaining, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 128rem;
  margin: 0 auto;
  padding-bottom: 3rem;
}

section {
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);
}

.c-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 19rem;
  text-align: center;
  background: linear-gradient(180deg, #fbeff4 0%, #fff 100%);

  &__heading {
    max-width: 100rem;
  }

  &__subtext {
    max-width: 72rem;
    margin-top: 5rem;
  }

  button {
    --before-transform: scale(1.1);
    --before-border: 1px dashed #1d1d1f;
    --after-transform: translate(50%, -30%) scale(0.7);
    $size: 13rem;
    position: relative;
    width: $size;
    height: $size;
    border: none;
    border-radius: 100%;
    background: none;
    margin-top: 10rem;
    font-weight: 500;
    font-size: 1.6rem;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: var(--before-border);
      transform: var(--before-transform);
      transition: 1.12s $ease-out-expo;
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
      transition: 1.12s $ease-out-expo;
      transform: var(--after-transform);
      pointer-events: none;
    }

    &:hover {
      --before-transform: scale(1);
      --before-border: 1px dashed rgba(0, 0, 0, 0);
      --after-transform: translate(0) scale(1);
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
  padding: 25rem 0 10rem;

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
  // padding-top: 25rem;
  margin-top: 0;
  // background: linear-gradient(180deg, #fff 0%, #fed2c0 100%);
  background: linear-gradient(180deg, #effbf1 0%, #eff6fb 15%);

  &__container {
    max-width: 75rem;
  }

  img {
    max-height: 84rem;
    object-fit: cover;
    object-position: center;
  }
}

.c-reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25rem 0 10rem;
  background: linear-gradient(180deg, #eff6fb 0%, #f9effb 20%);

  &__flickity {
    width: 100vw;
    margin-top: 10rem;
    height: auto;

    .c-review {
      width: 33vw;
      background-color: #ffd4c3;
      margin: 0 5rem;
      padding: 9rem 4rem 8rem;

      &__comment {
        font-size: 2.6rem;
        line-height: 3.6rem;
        font-style: italic;
      }

      &__reviewer {
        margin-top: 10rem;
        font-weight: 400;
      }
    }

    $colors: (#ffd4c3, #ffbdbd, #ffd0db, rgb(253, 255, 192), bisque);

    @for $i from 1 through 11 {
      $index: random(5);

      .c-review:nth-child(#{$i}) {
        background-color: nth($colors, $index);
      }
    }
  }
}

.c-countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25rem 0 40rem;
  text-align: center;
  background: linear-gradient(180deg, #f9effb 0%, #fff 50%);

  &__timer {
    font-family: 'ogg';
    font-size: 5rem;
    margin-top: 6rem;
    color: #c72177;
    font-variant-numeric: tabular-nums;

    &-sec {
      display: inline-block;
      width: 4.5rem;
      text-align: left;
    }
  }
}

.c-illustrations {
  display: flex;
  flex-wrap: wrap;

  img {
    width: 33vw;
    height: auto;

    &:nth-child(1) {
      transform: scale(1.2) rotate(-7deg);
    }

    &:nth-child(2) {
      transform: rotate(7deg);
    }

    &:nth-child(3) {
      transform: rotate(-10deg) scale(1.1);
    }

    &:nth-child(4) {
      transform: rotate(6deg);
    }

    &:nth-child(5) {
      transform: scale(1.2) translate(0, -10%);
    }
  }
}

.c-footer {
  margin-top: 18rem;
  display: flex;
  justify-content: space-between;
  width: inherit;

  a {
    color: #c72177;
    text-decoration: none;
  }
}
</style>
