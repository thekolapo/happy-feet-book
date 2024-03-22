<template>
  <div class="home">
    <image-loader v-if="heroImgIsLoading" ref="imgLoader" />
    <template v-else>
      <section class="c-hero">
        <h1 ref="heroHeading" class="c-hero__heading">
          The Boys with the Happy Feet Dance
        </h1>
        <p ref="heroSubtext" class="c-hero__subtext">
          A book by Bode Abifarin that follows two brothers, Nathan and Ethan,
          as they navigate their passions and life’s challenges all at the same
          time.
        </p>
        <a href="#book-purchse-section" class="c-hero__button">
          <svg viewBox="0 0 120 120" fill="transparent">
            <circle
              cx="60"
              cy="60"
              r="59.5"
              stroke="#1d1d1f8e"
              stroke-width="0.7"
            />
          </svg>
          <span>Preorder</span>
        </a>
      </section>
      <section class="c-book">
        <div class="c-book__container">
          <h1 ref="bookSectionHeading" class="">About the book</h1>
          <p>
            "The Boys with the Happy Feet Dance" by Bode Abifarin follows two
            brothers, Nathan and Ethan, as they navigate their passions and
            life’s challenges all at the same time.
          </p>
          <p>
            First, Nathan finds joy in playing the piano, initially struggling
            but eventually mastering it with the support of his family and
            instructor. He flourishes during a music concert, making his mother
            proud. Meanwhile, Ethan discovers his love for swimming, overcoming
            his initial fear with the help of his dedicated instructor and
            family. His enthusiasm for the sport grows as he practises
            regularly, embracing it as a source of joy and accomplishment. Then
            there’s his love for bouncing balls which leads him to basketball,
            as he learns new skills and gains confidence with the support of his
            coach and family.
          </p>
          <p>
            Nathan's fascination with wildlife, particularly insects, shines
            through during his visit to the Conservation Fund. Despite his
            challenges, Nathan finds happiness in nature and playful
            interactions with his family. The brothers explore the vibrant world
            of colours at a game arcade, bonding with each other and their
            family while engaging in the various activities, including “riding”
            the escalator! They also discover a passion for soccer, albeit with
            different levels of comfort and enthusiasm. While Nathan struggles
            with the new experience, he gradually embraces it with the support
            of his family and coaches.
          </p>
          <img
            src="@/assets/images/book-illustration.png"
            alt="book illustration"
          />
          <p>
            Ethan copes with illness and hospital visits by finding comfort in
            his family's care and routines. In the same vein, Nathan confronts
            his fear of hair clippers, gradually overcoming it through exposure
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
      <section id="book-purchse-section" class="c-purchase">
        <div class="c-purchase__links">
          <a
            href="https://rhbooks.com.ng/product/the-boys-with-the-happy-feet-dance/"
            target="_blank"
          >
            Buy on Roving Heights
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5398 1.96017C27.5398 1.40788 27.0921 0.960167 26.5398 0.960167L17.5398 0.960167C16.9875 0.960167 16.5398 1.40788 16.5398 1.96017C16.5398 2.51245 16.9875 2.96017 17.5398 2.96017L25.5398 2.96017L25.5398 10.9602C25.5398 11.5125 25.9875 11.9602 26.5398 11.9602C27.0921 11.9602 27.5398 11.5125 27.5398 10.9602L27.5398 1.96017ZM2.16707 27.7471L27.2469 2.66727L25.8327 1.25306L0.752854 26.3329L2.16707 27.7471Z"
                fill="#FF5959"
              />
            </svg>
          </a>
          <a href="" target="_blank">
            Buy on Amazon
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5398 1.96017C27.5398 1.40788 27.0921 0.960167 26.5398 0.960167L17.5398 0.960167C16.9875 0.960167 16.5398 1.40788 16.5398 1.96017C16.5398 2.51245 16.9875 2.96017 17.5398 2.96017L25.5398 2.96017L25.5398 10.9602C25.5398 11.5125 25.9875 11.9602 26.5398 11.9602C27.0921 11.9602 27.5398 11.5125 27.5398 10.9602L27.5398 1.96017ZM2.16707 27.7471L27.2469 2.66727L25.8327 1.25306L0.752854 26.3329L2.16707 27.7471Z"
                fill="#FF5959"
              />
            </svg>
          </a>
          <a href="https://shorturl.at/bmJNR" target="_blank">
            RSVP for the book launch
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5398 1.96017C27.5398 1.40788 27.0921 0.960167 26.5398 0.960167L17.5398 0.960167C16.9875 0.960167 16.5398 1.40788 16.5398 1.96017C16.5398 2.51245 16.9875 2.96017 17.5398 2.96017L25.5398 2.96017L25.5398 10.9602C25.5398 11.5125 25.9875 11.9602 26.5398 11.9602C27.0921 11.9602 27.5398 11.5125 27.5398 10.9602L27.5398 1.96017ZM2.16707 27.7471L27.2469 2.66727L25.8327 1.25306L0.752854 26.3329L2.16707 27.7471Z"
                fill="#FF5959"
              />
            </svg>
          </a>
        </div>
        <img
          class="c-purchase__book-render"
          src="@/assets/images/book-render.png"
          alt="book render image"
        />
      </section>
      <section class="c-author">
        <div class="c-author__container">
          <h1 ref="authorSectionHeading" class="">About the author</h1>
          <p>
            Bode Abifarin is the mother of eight-year-old twin boys, Ethan and
            Nathan Abifarin. She is a C-level executive with over 21 years of
            experience in the global finance and fintech space. She has also
            taken courses in speech therapy, behaviour modification and ABA, to
            help her children along their journey on the ASD spectrum, freely
            sharing her knowledge with other young mums at her children’s school
            and church community groups.
          </p>
          <p>
            Ethan was diagnosed when he turned three. His brother, Nathan, was
            diagnosed at age four. Post-diagnosis, Bode went into research and
            put together a team of therapists and facilitators to help the boys
            develop life skills. She learnt about what food, fruits and
            supplements were beneficial to them and got them involved in sports
            and other outdoor games.
          </p>
          <p>
            Today, they are both verbal as they continue the journey to social
            integration with a community of other mums and children on the
            spectrum. This journey inspired her to write The Boys with the Happy
            Feet Dance, which chronicles their experience with learning
            different sporting and everyday living activities.
          </p>
          <img src="@/assets/images/bode.jpeg" alt="author's picture" />
        </div>
      </section>
      <section class="c-reviews">
        <h1 ref="reviewsSectionHeading">The book reviews</h1>
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
              <div class="c-review__full">
                <p>
                  From Nathan and Ethan’s perspective: I love the format of this
                  book. Getting the perspective from both boys demonstrates how
                  the same experience can be felt very differently by two
                  individuals. I love how the first sentence of each chapter
                  talks about an action, sound or colour Nathan or Ethan really
                  likes, which will help people understand how kids on the
                  spectrum voluntarily or involuntarily express themselves.
                </p>
                <p>
                  I love how the mum is laser-focused on her kids. Anytime they
                  show interest in something she turns it into an activity they
                  can fully immerse themselves in, and the boys are fully aware
                  of this. They develop interests and grow into their own
                  individuals, something parents can miss when they have more
                  than one child. Their mum is always there for them with words
                  of encouragement and pride. Their teachers and tutors are also
                  the same. Most people don’t know the power of encouraging
                  words, especially coming from someone children already
                  consider a superhero (their parents). It always gives the boys
                  that extra confidence.
                </p>
                <p>
                  I like that the boys being on the spectrum is only implied in
                  their stories. They’re just kids so seeing things through
                  their eyes is really refreshing. I like the experiences the
                  author chose to include too: learning to swim, getting your
                  first haircut, getting ill and having to go to the hospital,
                  all completely relatable experiences. It made me remember
                  getting my hair done as a kid and how I would cry from the
                  moment they put a parting comb to my head till they finished.
                </p>
                <p>
                  What comes through the most is the relationship these boys
                  have with their mum. It's clear they see her as a superhero
                  (as most children see their parents), but she also sees
                  incredible strength in them. I think the struggle as a parent
                  does come through. Everyone wants their child to be
                  well-rounded and adjusted. As a parent, there’s the fear that
                  you’re not doing things the right way, and your child will
                  pick up on that sometimes.
                </p>
                <p>
                  From your perspective: I found this very beautiful. In
                  Nigeria, there’s a stigma attached to being on the spectrum,
                  whether you’re a child or an adult. There’s a general stigma
                  around mental health issues compared to the Western world. In
                  my experience, parents completely ignore these things or
                  explain them away as behavioural or even spiritual issues.
                  Many don’t take the time to look into this, even when they
                  have the resources to do so, for fear of societal backlash.
                </p>
                <p>
                  Bode was scared when she first noticed something was different
                  about her boys, and even more scared once they’d been
                  diagnosed, like any parent would be. But instead of being a
                  martyr or ignoring this, she doubled down on wanting to be
                  there for them, to get to know them as individuals. Not many
                  people are willing to do that (whether their children are on
                  the spectrum or not), especially people who work demanding
                  full-time jobs. I really like how observant she is as a mother
                  to both boys, not assuming one will like something because the
                  other does and letting them take their own approach to things.
                  Even when it was about trying something new, like the arcade
                  or piano recital, her first instinct was to say no to protect
                  them, but she realised these things have their benefits and
                  will only help them grow — and they did.
                </p>
                <p>
                  The support system she’s created is touching because these
                  teachers and support people who work with her boys have to
                  really get to know them to do their jobs well, and as they get
                  to know them, they come to care for them and root for their
                  success. I just find it beautiful when she and the teacher
                  watch Ethan play the piano straight from the book with both
                  hands or when the entire salon silently cheers Nathan on for
                  getting his hair cut. I loved every intimate moment she had
                  with the boys, like when Ethan gave her full eye contact. It
                  really touched me. Her love for them absolutely pours out of
                  every sentence, and I feel it.
                </p>
                <p>
                  Overall: Just beautiful. I think a lot of Nigerian families
                  will benefit from reading this book and understanding the
                  benefits of being there to get to know their child(ren). It
                  just makes the moments when they succeed, no matter how small,
                  that much sweeter! In the next book, I’d love to hear more
                  about her emotional journey as a parent. I really, really
                  appreciate her letting me preview, and I am rooting for a book
                  series!
                </p>
              </div>
              <p class="c-review__reviewer">— Sholabomi Tinubu</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “An eye-opener and game-changer. Emotional. Challenging.
                Creative. Educative. Encouraging. Heartwarmingly good.”
              </p>
              <div class="c-review__full">
                <p>It's a super book.</p>
                <p>
                  This personal narrative is an eye-opener and game-changer.
                  Bode and the boys give us an intimate glimpse of their
                  nurturing from an insightful yet playful perspective.
                  Emotional. Challenging. Creative. Educative. Encouraging.
                  Heartwarmingly good.
                </p>
              </div>
              <p class="c-review__reviewer">— Olubola Sangosanya</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “Honest, uplifting and packed with moments that’ll make you nod
                in agreement or tear up.”
              </p>
              <div class="c-review__full">
                <p>
                  Bode Abifarin’s book is a real-life adventure about raising
                  twin boys with autism, and it’s as heartwarming as it is
                  eye-opening. “The Boys With the Happy Feet Dance” isn’t just a
                  story; it’s a journey filled with ups and downs, laughter and
                  real talk.
                </p>
                <p>
                  Abifarin doesn’t just share the tough stuff; she celebrates
                  the wins too, like her boys excelling in swimming, basketball
                  and piano. It’s a reminder that with patience and love, kids
                  with autism can do amazing things.
                </p>
                <p>
                  This book is a gem for any parent, especially mums, walking
                  this path. It’s honest, uplifting and packed with moments
                  that’ll make you nod in agreement or tear up. If you’re
                  looking for a read that gives you both the real deal about
                  autism and a dose of hope, this is it.
                </p>
              </div>
              <p class="c-review__reviewer">— Moyo Makanjuola</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “Bode Abifarin isn’t your everyday children’s book author; she’s
                a writer with a soul as vast as the universe.”
              </p>
              <div class="c-review__full">
                <p>
                  Some caterpillars take a while before they become butterflies.
                  But when they do, the gallantry and elegance with which they
                  soar proves that great things take a while. Nathan and Ethan
                  are a fantastic set of twins, not butterflies. They are more
                  than butterflies, and still, they fly.
                </p>
                <p>
                  In the first chapter, Nathan takes us on a fascinating journey
                  into the world of black and white keys of the keyboard. With
                  the help of a patient mother and a skilled instructor, Nathan
                  plants his fingers on the keyboard until he succeeds in making
                  good music in the house and on the stage. A courageous feat
                  that was received with a loud ovation.
                </p>
                <p>
                  In the next chapter, Ethan invites readers to get their
                  swimming trunks and prepare to dive into his world. Not
                  really. Ethan loves the sound of water. He loves to dip his
                  fingers in them. He desires to be a good swimmer. But it
                  wasn’t as easy as he thought; he realised he never liked the
                  pool! His mum gets him an instructor, and with months of
                  practice, Ethan creates beautiful ripples in the pool with his
                  butterfly strokes. One victory after another, he would become
                  a world-renowned swimmer.
                </p>
                <p>
                  Bode Abifarin isn’t your everyday children’s book author;
                  she’s a writer with a soul as vast as the universe. With neat
                  sentences, intentional use of words, and a delicate theme, she
                  weaves her experiences into a magical wand that could guide
                  parents toward effective parenting. If children and their
                  exceptional abilities were genies in a magic lamp, the author
                  offers parents how to rub them the right way toward boundless
                  manifestations.
                </p>
                <p>
                  Children are offered a beautiful work of fiction, broken into
                  eight essential chapters. The stories are relatable; children
                  will see themselves in this special book. The eye-catching
                  illustrations also help to illuminate the mind of children.
                  This book should be on every shelf—in homes, schools, and
                  public libraries.
                </p>
                <p>
                  The Boys With the Happy Feet Dance isn’t a literary construct
                  meant to just make children feel different or included;
                  instead, it’s an insightful adventure towards helping children
                  become what they are meant to be. Icons.
                </p>
              </div>
              <p class="c-review__reviewer">
                — Ayo Oyeku, author of “The Finish Line”
              </p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “It is the rhythm in Bode Abifarin’s story that makes you see
                the glaring innocence and originality of childhood.”
              </p>
              <div class="c-review__full">
                <p>
                  Writing about difference requires so much kindness, calmness
                  and calculation. Bode Abifarin threads these three into the
                  story so well that you will never think of dropping it. It is
                  the rhythm in her story that makes you see the glaring
                  innocence and originality of childhood. What makes it
                  important is its urgency to address difference, which we
                  rarely see in children’s writing.
                </p>
              </div>
              <p class="c-review__reviewer">
                — Chimee Adioha, Black Boy Review
              </p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “A delightful, heartwarming tale that dances off the pages and
                into your heart.”
              </p>
              <div class="c-review__full">
                <p>
                  "The Boys with a Happy Feet Dance” by Bode Abifarin is a
                  delightful and heartwarming tale that dances off the pages and
                  into your heart. This charming book follows the journey of two
                  young boys who discover the magic of what the hands and feet
                  can do. It’s a story that will leave readers of all ages
                  uplifted and inspired.
                </p>
                <p>
                  From the very first page, you are transported into the world
                  of these endearing characters, each with their own quirks and
                  dreams. Mrs. Abifarin does a fantastic job of bringing the
                  boys to life, making you feel as though you're right there
                  beside them as they navigate the challenges of learning the
                  “jangling” piano, the mystery of swimming, the joy of balls
                  and other adventures.
                </p>
                <p>
                  What truly shines is the message of friendship, perseverance,
                  and the transformative power of following your passion.
                  Through the ups and downs of their “dance”, the boys learn
                  important lessons about teamwork, dedication and believing in
                  themselves.
                </p>
                <p>
                  It’s a must-read. I highly recommend it to anyone who needs a
                  dose of joy and inspiration.
                </p>
              </div>
              <p class="c-review__reviewer">
                — John Ajimisogbe, Child Behaviour Analyst
              </p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “Through Abifarin’s beautifully crafted words, readers will find
                inspiration, empathy and hope.”
              </p>
              <div class="c-review__full">
                <p>
                  In this heartwarming book penned by a devoted mother, the
                  extraordinary journey of her two sons, Nathan and Ethan,
                  unfolds on every page. This is not just any tale; it is a
                  story of love, courage and resilience as the boys navigate
                  life with their peculiarities.
                </p>
                <p>
                  From the moment she discovered that her sons required unique
                  care and support, she embarked on a mission to ensure they
                  would thrive in a world that often failed to understand their
                  needs. With her husband’s help and unwavering determination
                  and a profound love for her and their children, she became
                  their fiercest advocate.
                </p>
                <p>
                  This remarkable book delves deep into the challenges,
                  brilliantly showcasing their triumphs along the way. Each
                  chapter serves as a testament to Ethan and Nathan’s incredible
                  adaptability, as they navigate school, friendships and various
                  therapies with astonishing strength. Mrs. Abifarin brilliantly
                  captures the rollercoaster of emotions experienced by the
                  family.
                </p>
                <p>
                  She paints a vivid picture of their daily triumphs and
                  challenges, taking the reader on a gripping journey as Nathan,
                  with a passion for music and following steps meticulously, and
                  Ethan, with exceptional talent in basketball, finds solace and
                  liberation through sports and artistic expressions. The
                  siblings’ bond grows stronger, transcending their individual
                  challenges and allowing them to become each other’s
                  ever-present support.
                </p>
                <p>
                  What sets this book apart is the authenticity and honesty with
                  which Mrs Abifarin depicts the highs and lows of raising
                  children. She beautifully captures the raw emotions
                  experienced by parents and siblings alike, sharing some of the
                  frustrations and the tears of joy in their journey. This book
                  is a testament to the power of unconditional love and the
                  human ability to thrive despite adversity.
                </p>
                <p>
                  Through Mrs Abifarin’s beautifully crafted words, readers will
                  find inspiration, empathy and hope, a guiding light for
                  families, educators and society to better understand and
                  embrace individuals with needs as we all, without exception,
                  have a few needs peculiar to each person; either socially or
                  otherwise. In sharing her family’s story, Mrs Abifarin shows
                  the world what it truly means to embrace differences, redefine
                  success and celebrate the remarkable potential that lies
                  within us all.
                </p>
                <p>
                  This book will undoubtedly touch hearts, change perceptions
                  and leave a lasting impact on all who have the privilege of
                  turning its pages.
                </p>
              </div>
              <p class="c-review__reviewer">— Adéṣolá Adéyẹyè</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “On every page, you see beauty, talent, love and above all,
                resilience. I am so inspired by the boys with the happy feet.”
              </p>
              <div class="c-review__full">
                <p>
                  So many words can be used to describe this story. On every
                  page, you see demonstrations of beauty, talent, love, and
                  above all, resilience. I am so inspired by the boys with the
                  happy feet.
                </p>
              </div>
              <p class="c-review__reviewer">— Wunmi Adedipe</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “...a beacon of hope, affirming that with compassion,
                understanding and support, every child can dance to their own
                happy feet dance.”
              </p>
              <div class="c-review__full">
                <p>
                  support, every child can dance to their own happy feet dance.”
                  "The Boys with the Happy Feet Dance" by Bode Abifarin offers a
                  compelling and insightful exploration into the lives of
                  children with autism and ADHD, navigating through their world
                  with the support of their mother. The narrative beautifully
                  captures the nuanced balance of challenges and triumphs that
                  define the journey of raising children with special needs,
                  emphasising the profound emotional landscapes of both the
                  parent and the child.
                </p>
                <p>
                  Abifarin's story resonates deeply with readers by showcasing
                  the transformative journey from fear to joy, the importance of
                  celebrating every small victory, and the assurance that comes
                  with routine. The story is a testament to the power of love,
                  understanding and the relentless pursuit of integration into a
                  society that often struggles to accommodate difference.
                </p>
                <p>
                  often struggles to accommodate difference. Through the lens of
                  a family's commitment to their children, "The Boys with the
                  Happy Feet Dance" illuminates the challenges of comparing our
                  kids to others and the stress of societal norms. Yet, it
                  ultimately uplifts with its message of hope, empowerment and
                  the possibility of choosing one's path, despite the obstacles
                  presented. This narrative is not just a story about two boys
                  with special needs but a source of inspiration and a call to
                  embrace the unique journey of every child.
                </p>
                <p>
                  As the story concludes, Abifarin leaves us with a powerful
                  reminder of the strength found in acceptance, the
                  transformative power of recognising individuality, and the
                  boundless love that fuels the journey of families like the one
                  portrayed in this book. "The Boys with the Happy Feet Dance"
                  challenges us to look beyond the labels and see the
                  extraordinary potential in every child. It's a poignant,
                  uplifting read that not only sheds light on the realities of
                  living with autism and ADHD but also celebrates the incredible
                  joy and richness these children bring into the world.
                </p>
                <p>
                  This book is a beacon of hope, affirming that with compassion,
                  understanding and support, every child can dance to their own
                  happy feet dance.
                </p>
              </div>
              <p class="c-review__reviewer">
                — Janine Udogu, author of “Ala Nnam: A Journey to Isuofia”
              </p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">“What a joyful story.”</p>
              <div class="c-review__full">
                <p>What a joyful story.</p>
                <p>
                  Bode has poured into motherhood herself, purposefully,
                  determined and focused. She has been the greatest cheerleader
                  for the boys. It has not been easy, but reading about the joy
                  and pride as each “task” is accomplished, each mountain is
                  scaled, melts one’s heart. Bode, you are such an inspiration,
                  and my prayer is that as you share your walk and story, you
                  continue to uplift and encourage others.
                </p>
                <p>
                  I can’t end this without acknowledging the tribe of family and
                  friends who have lifted and continue to lift your arms when
                  you are weary.
                </p>
                <p>Very well done, Mum.</p>
              </div>
              <p class="c-review__reviewer">— Bisi Lamikanra</p>
            </div>
            <div class="c-review">
              <p class="c-review__comment">
                “a touching book in a world where people expect certain things
                from kids.”
              </p>
              <div class="c-review__full">
                <p>
                  The Boys with the Happy Feet Dance is a touching book about
                  parenting in a world where people expect certain things from
                  kids. The author tells real stories that encourage us to
                  accept each child for who they are and to value our
                  differences. The book is about a mum's love and strength in
                  raising kids who are different from what society expects. The
                  author honestly shares the ups and downs of taking care of her
                  sons, showing how they go through tough times and achieve
                  great things.
                </p>
                <p>
                  What's special about this book is that even though it's for
                  kids, everyone can relate to its message. It talks about being
                  kind, staying strong and growing as a person, which everyone
                  can learn from. The author's honest words make us think about
                  our own lives and how we handle challenges.
                </p>
                <p>
                  The Boys with the Happy Feet Dance isn't just a story; it's
                  about how love and courage can change lives. It's a book that
                  can inspire anyone looking for hope and understanding.
                </p>
              </div>
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
          <span class="u-font-400">6th of April, 2024</span> which is in:
        </p>
        <p class="c-countdown__timer">
          {{ countDown.days }} day<span v-if="countDown.days > 1">s</span>,
          {{ countDown.hrs }} hrs : {{ countDown.mins }} min :
          <span class="c-countdown__timer-sec">{{ countDown.secs }}</span>
        </p>
      </section>
      <section class="c-illustrations">
        <img
          src="@/assets/images/book-illustration.png"
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
        <span>© Bode Abifarin {{ new Date().getFullYear() }} </span>
        <span>
          Made with love by
          <a href="https://twitter.com/kolapo_" target="_blank"> Kolapo ❤️ </a>
        </span>
      </footer>
    </template>
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
        autoPlay: 2000,
      },
      countDown: {
        days: '',
        hrs: '',
        mins: '',
        secs: '',
      },
      exceededLaunchTime: false,
      heroImgIsLoading: true,
    }
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
    deconstructText(text) {
      const wordsArray = text.innerText.split(' ')
      text.innerText = ''
      text.style.opacity = 1

      const animateText = () => {
        wordsArray.forEach((word) => {
          let innerContent = ''
          word.split('').forEach((char) => {
            innerContent += `<span>${char}</span>`
          })

          const div = document.createElement('div')
          div.innerHTML = innerContent + ' '

          text.appendChild(div)
        })
      }

      animateText()
      // document.getAnimations().forEach((anim) => {
      //   anim.cancel()
      //   anim.play()
      // })
    },
    hideImgLoader() {
      this.heroImgIsLoading = false
      setTimeout(() => {
        this.init()
      }, 10)
    },
    init() {
      this.countdownTimer('04/6/2024 00:00 AM')

      // This triggers the text reveal animation
      this.deconstructText(this.$refs.heroHeading)
      setTimeout(() => {
        this.deconstructText(this.$refs.heroSubtext)
      }, 1000)

      const observer = new IntersectionObserver(this.onElementObserved)
      const observableSections = [
        this.$refs.bookSectionHeading,
        this.$refs.authorSectionHeading,
        this.$refs.reviewsSectionHeading,
      ]

      observableSections.forEach((section) => {
        observer.observe(section)
      })
    },
    onElementObserved(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.style.opacity) return
          this.deconstructText(entry.target)
        }
      })
    },
  },
}
</script>

<style lang="scss">
.home {
  max-width: 128rem;
  margin: 0 auto;
  padding-bottom: 3rem;

  @include screen(med) {
    overflow-x: hidden;
  }

  section {
    position: relative;
    width: 100vw;
    padding: 25rem 2rem 5rem;
    left: calc(-50vw + 50%);

    h1 {
      margin-bottom: 5rem;
      // text-align: center;
    }

    p {
      // text-align: center;
    }

    @include screen(med) {
      padding: 15rem 2rem 8rem;
    }

    @include screen(small) {
      padding-top: 4rem;

      h1 {
        margin-bottom: 2rem;
      }
    }
  }

  .c-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20rem;
    text-align: center;
    background: linear-gradient(180deg, #fbeff4 0%, #fff 100%);

    @keyframes slide {
      to {
        transform: translateY(0%);
      }
    }

    @keyframes fade {
      to {
        opacity: 1;
      }
    }

    @include screen(med) {
      padding-top: 15rem;
    }

    @include screen(small) {
      padding-top: 12rem;
      text-align: left;
      align-items: flex-start;
    }

    &__heading {
      position: relative;
      max-width: 100rem;
    }

    &__subtext {
      max-width: 72rem;
    }

    &__button {
      --svg-transform: scale(1);
      --svg-stroke-color: #1d1d1f8e;
      --after-transform: translate(50%, -30%) scale(0.6);
      --size: 13rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #1d1d1f;
      position: relative;
      width: var(--size);
      height: var(--size);
      border: none;
      border-radius: 100%;
      background: none;
      margin-top: 9rem;
      font-weight: 500;
      font-size: 1.4rem;
      z-index: 3;
      transform: scale(1.05);

      @include screen(small) {
        --size: 8rem;
        --after-transform: translate(55%, -35%) scale(0.7);
        margin-top: 4rem;
        font-size: 1.2rem;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        z-index: -2;
        // background: #ff7c94;
        background: #fc477d;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        transition: 1.12s $ease-out-expo;
        transform: var(--after-transform);
        pointer-events: none;
        opacity: 0;
        animation: fade 1s linear forwards 3s;
      }

      &:hover {
        --svg-transform: scale(0.9);
        --svg-stroke-color: rgba(0, 0, 0, 0);
        --after-transform: translate(0) scale(0.9);
      }

      svg {
        --length: 375;
        position: absolute;
        transition: 1.12s $ease-out-expo;
        stroke-dasharray: var(--length);
        stroke-dashoffset: var(--length);
        transform: rotate(-90deg);
        animation: drawcircle 0.6s linear 1.8s forwards;

        @keyframes drawcircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        circle {
          transform: var(--svg-transform);
          transition: inherit;
          stroke: var(--svg-stroke-color);
        }
      }

      span {
        $delay: 3s;
        opacity: 0;
        transform: translateY(30%);
        animation: slide 0.6s $ease-out-expo forwards $delay,
          fade 0.8s linear forwards $delay;
      }
    }
  }

  h1,
  .c-hero__subtext {
    opacity: 0;

    div {
      display: inline-block;
      white-space: pre;
    }

    span {
      --delay: 0.1s;
      position: relative;
      display: inline-block;
      transform: translateY(50%);
      opacity: 0;
      animation: slide 1s $ease-out-expo forwards var(--delay),
        fade 1.2s linear forwards var(--delay);

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          --delay: #{$i * 0.14s};
        }
      }
    }
  }

  .c-book,
  .c-author {
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: linear-gradient(180deg, #fff 0%, #effbf1 15%, #fff 100%);
    background: linear-gradient(180deg, #fff 0%, #effbf1 15%);
    // padding: 25rem 0 10rem;

    &__container {
      max-width: 72rem;
    }

    p:not(:first-child) {
      margin-top: 3rem;

      @include screen(small) {
        margin-top: 2rem;
      }
    }

    img {
      width: 100%;
      object-fit: contain;
      height: auto;
      margin: 4rem 0;

      @include screen(small) {
        width: 100%;
      }
    }
  }

  .c-book img {
    transform: scale(1.3) translateY(-2.5%);
    pointer-events: none;
    margin: 6rem 0;
  }

  .c-purchase {
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    background: linear-gradient(180deg, #effbf1 0%, #fff 50%);
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 10rem;

    @include screen(small) {
      position: unset;
      width: 100%;
      align-items: flex-start;
      padding-top: 2rem;
    }

    &__links {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;

      a {
        --color: rgb(61, 61, 64);
        color: var(--color);
        text-decoration: none;
        font-family: 'ogg';
        font-size: 5rem;
        line-height: 5rem;
        display: inline-block;
        z-index: 2;
        transition: color 0.14s linear, transform 0.4s $ease-out-expo;

        @include screen(small) {
          font-size: 2.7rem;
          line-height: 2.7rem;
        }

        &:hover {
          --color: #fc477d;
          transform: translateX(2%);

          svg {
            transform: translate(20%, -20%);
          }
        }

        svg {
          transition: color 0.14s linear, transform 0.7s $ease-out-expo;

          path {
            fill: var(--color);
            transition: inherit;

            @include screen(small) {
              transform: scale(0.8);
              transform-origin: bottom left;
            }
          }
        }

        &:not(:last-child) {
          margin-bottom: 3.5rem;

          @include screen(small) {
            margin-bottom: 2rem;
          }
        }
      }
    }

    &__book-render {
      width: 50vw;
      min-width: 50rem;
      height: auto;
      object-fit: contain;

      @include screen(small) {
        width: 100%;
        min-width: unset;
      }
    }
  }

  .c-author {
    // padding-top: 25rem;
    // background: linear-gradient(180deg, #fff 0%, #fed2c0 100%);
    background: linear-gradient(180deg, #fff 0%, #eff6fb 15%);

    &__container {
      max-width: 77rem;
    }

    img {
      width: 100%;
      max-height: 84rem;
      object-fit: cover;
      object-position: center;
      background: rgb(226, 226, 226);
    }
  }

  .c-reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 25rem 0 10rem;
    background: linear-gradient(180deg, #eff6fb 0%, #f9effb 20%);

    &__flickity {
      width: 100vw;
      height: auto;
      margin-top: 3rem;

      .c-review {
        width: 50vw;
        background-color: #ffd4c3;
        margin: 0 2rem;
        padding: 9rem 4rem 8rem;
        max-height: 80rem;
        overflow: scroll;

        @include screen(med) {
          width: 80vw;
          margin: 0 1rem;
          padding: 4rem 2rem 4rem;
        }

        &__comment {
          font-size: 2.6rem;
          line-height: 3.6rem;
          font-style: italic;
          font-weight: 400;

          @include screen(small) {
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
        }

        &__full {
          font-size: 1.7rem;
          margin-top: 3rem;

          @include screen(small) {
            font-size: 1.5rem;
            margin-top: 2.5rem;
          }

          p:not(:first-child) {
            margin-top: 3rem;
          }
        }

        &__reviewer {
          margin-top: 10rem;
          font-weight: 400;

          @include screen(small) {
            margin-top: 5rem;
          }
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
    // padding: 25rem 0 40rem;
    text-align: center;
    background: linear-gradient(180deg, #f9effb 0%, #fff 50%);

    &__timer {
      font-family: 'ogg';
      font-size: 5rem;
      line-height: 5rem;
      margin-top: 6rem;
      color: #c72177;
      font-variant-numeric: tabular-nums;

      @include screen(small) {
        font-size: 2.8rem;
        line-height: 2.8rem;
        margin-top: 2rem;
      }

      &-sec {
        display: inline-block;
        width: 4.5rem;
        text-align: left;

        @include screen(small) {
          width: 3rem;
        }
      }
    }
  }

  .c-illustrations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    pointer-events: none;

    img {
      width: 32vw;
      min-width: 45rem;
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

      @include screen(med) {
        width: 80%;
      }

      @include screen(small) {
        width: 100%;
        min-width: unset;

        &:nth-child(odd),
        &:nth-child(even) {
          transform: scale(1.2);
        }
      }
    }
  }

  .c-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
    padding: 0 2rem;
    flex-wrap: wrap;
    width: 100%;

    @include screen(small) {
      margin-top: 0rem;

      > * {
        width: 100%;
      }
    }

    a {
      color: #c72177;
      text-decoration: none;

      @include screen(small) {
        display: inline-block;
        margin-top: 1rem;
      }
    }
  }
}
</style>
