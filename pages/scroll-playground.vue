<template>
  <div ref="wrapper" class="scroll-wrapper">
    <GsapHeroSection />
    <section class="panel panel--parallax">
      <div class="grid-background"></div>
    </section>
    <section class="panel panel--parallax">Parallax Section</section>
    <GsapScrollFadeSection class="panel--a">
      <div ref="animateContainer" class="panel-grid">
        <h1 class="fancy-title">
          <span v-for="word in splitTitle">
            {{ word }}
          </span>
        </h1>
        <p v-for="i in 5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam! Voluptate nulla qui magnam beatae unde animi itaque explicabo amet corporis nostrum. Quis libero amet sunt eius iure,
          accusantium veniam?
        </p>
        <h2 class="fancy-title">
          <span v-for="word in splitTitle">
            {{ word }}
          </span>
        </h2>
        <p v-for="i in 5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam! Voluptate nulla qui magnam beatae unde animi itaque explicabo amet corporis nostrum. Quis libero amet sunt eius iure,
          accusantium veniam?
        </p>
      </div>
    </GsapScrollFadeSection>
    <GsapScrollFadeSection data-theme="white" class="panel--a">
      <div ref="animateContainer1" class="panel-grid">
        <h1 class="fancy-title">
          <span v-for="word in splitTitle3">
            {{ word }}
          </span>
        </h1>
        <p v-for="i in 5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam! Voluptate nulla qui magnam beatae unde animi itaque explicabo amet corporis nostrum. Quis libero amet sunt eius iure,
          accusantium veniam?
        </p>
        <h2 class="fancy-title">
          <span v-for="word in splitTitle">
            {{ word }}
          </span>
        </h2>
        <p v-for="i in 5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam! Voluptate nulla qui magnam beatae unde animi itaque explicabo amet corporis nostrum. Quis libero amet sunt eius iure,
          accusantium veniam?
        </p>
      </div>
    </GsapScrollFadeSection>
    <GsapScrollFadeSection>
      <div class="panel-grid">
        <h1 :style="{ fontSize: '10rem' }">Lorem ipsum dolor sit amet consectetur!?</h1>
      </div>
    </GsapScrollFadeSection>
    <section class="panel panel--parallax">Parallax Section</section>
    <section class="panel panel--parallax">Parallax Section</section>
    <section class="panel panel--parallax">Parallax Section</section>
    <section class="panel panel--end">End Section</section>
  </div>
</template>

<script setup lang="ts">
  import gsap from "gsap";

  const animateContainer = ref();
  const animateContainer1 = ref();

  const splitIntoWords = (value: string): string[] => {
    return value.split(/\s+/);
  };

  const splitIntoWordsWithSpace = (value: string): string[] => {
    return value.match(/\S+\s*/g) || [];
  };

  const title = "Lifeworld is an invitation to contemplate who you are and where you are, here and now.";
  const title2 = "Hello Gabriela my love";
  const title3 = "¡Hola! I’m Gabriela, a multidisciplinary illustrator and tattoo artist from Spain, based in London since 2017.";
  const splitTitle = computed(
    () => title.split(" ").map((word) => word + "\u00A0") // keep spacing
  );
  const splitTitle2 = computed(
    () => title2.split(" ").map((word) => word + "\u00A0") // keep spacing
  );
  const splitTitle3 = computed(
    () => title3.split(" ").map((word) => word + "\u00A0") // keep spacing
  );

  onMounted(() => {
    useLenis();

    gsap.context(() => {
      const fancyTitles = animateContainer.value.querySelectorAll(".fancy-title");

      fancyTitles.forEach((elem, index) => {
        const children = elem.children;
        gsap.from(children, {
          scrollTrigger: {
            id: `fancy-title-${index}`,
            trigger: elem,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
          y: 30,
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.95,
          stagger: {
            each: 0.03,
            from: "start",
          },
          duration: 1,
          ease: "power3.out",
        });
      });
    }, animateContainer.value);

    gsap.context(() => {
      if (!animateContainer1.value) return;
      const fancyTitles = animateContainer1.value.querySelectorAll(".fancy-title");

      fancyTitles.forEach((elem, index) => {
        const children = elem.children;
        gsap.from(children, {
          scrollTrigger: {
            id: `fancy-title-${index}`,
            trigger: elem,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
          y: 30,
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.95,
          stagger: {
            each: 0.03,
            from: "start",
          },
          duration: 1,
          ease: "power3.out",
        });
      });
    }, animateContainer1.value);
    //   if (!animateContainer2.value) return;
    //   const pinWrapper = animateContainer2.value.querySelector(".mask-pin-wrapper")!;
    //   const circle = animateContainer2.value.querySelector(".circle")!;
    //   const maskPrimary = animateContainer2.value.querySelector(".mask-primary")!;
    //   const maskSecondary = animateContainer2.value.querySelector(".mask-secondary")!;

    //   // 👁️ Blink eyes every 5 seconds (scale cheat)
    //   function blink() {
    //     gsap.to(["#left-eye-open", "#right-eye-open"], {
    //       scaleY: 0.1,
    //       transformOrigin: "center",
    //       duration: 0.1,
    //       yoyo: true,
    //       repeat: 1,
    //     });
    //   }

    //   setInterval(blink, 5000);

    //   // gsap.to(circle, {
    //   //   scale: 20,
    //   //   ease: "none",
    //   //   scrollTrigger: {
    //   //     trigger: maskSecondary,
    //   //     start: "top 80%", // when secondary hits bottom of viewport
    //   //     end: "top 25%", // until it reaches top of viewport
    //   //     scrub: true,
    //   //   },
    //   // });

    //   // gsap.to(maskPrimary, {
    //   //   autoAlpha: 0,
    //   //   ease: "none",
    //   //   scrollTrigger: {
    //   //     trigger: maskSecondary,
    //   //     start: "top center",
    //   //     end: "top top",
    //   //     scrub: true,
    //   //   },
    //   // });

    //   // const fancyTitles = animateContainer2.value.querySelectorAll(".fancy-title");

    //   // fancyTitles.forEach((elem, index) => {
    //   //   const children = elem.children;
    //   //   gsap.from(children, {
    //   //     scrollTrigger: {
    //   //       id: `fancy-title-${index}`,
    //   //       trigger: elem,
    //   //       start: "top 40%",
    //   //       toggleActions: "play reverse play reverse",
    //   //     },
    //   //     y: 30,
    //   //     opacity: 0,
    //   //     filter: "blur(10px)",
    //   //     scale: 0.95,
    //   //     stagger: {
    //   //       each: 0.03,
    //   //       from: "start",
    //   //     },
    //   //     duration: 1,
    //   //     ease: "power3.out",
    //   //   });
    //   // });
    // }, animateContainer2.value);
  });
</script>

<style lang="scss">
  .header {
    background-color: transparent !important;

    & ~ main {
      padding: 0;
    }
  }

  #petals path {
    pointer-events: all;
    cursor: pointer; /* optional: gives visual feedback */
  }
</style>
<style scoped lang="scss">
  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }

  .fancy-title {
    & > * {
      display: inline-block;
      will-change: transform;
      backface-visibility: hidden;
    }
  }

  .panel {
    &[data-theme="white"] {
      background: #03d1c5;
      color: #1e2028;

      --bs-heading-color: #1e2028;
    }

    &-grid {
      --grid-gap: calc(0.5 * 3.125rem);
      --grid-gutters: 3.125rem;
      --gap: 3.125rem;
      display: grid;
      grid-template-columns: repeat(var(--grid-cols), 1fr);
      grid-auto-rows: auto;
      grid-column-gap: var(--grid-gap);
      text-align: start;
      margin-block-end: auto;
      padding: var(--gap) var(--grid-gutters);
      will-change: transform;
    }
  }

  .panel--a {
    .panel-grid {
      --grid-cols: 12;
      --grid-gap: calc(0.5 * 3.125rem);
      --grid-gutters: 3.125rem;
      --gap: 3.125rem;

      & > h1,
      & > h2 {
        grid-column: span 12;
        margin-block: 1em;
      }

      & > h1 {
        font-size: 3rem;

        @media only screen and (min-width: 1200px) {
          font-size: 6.875rem;
          line-height: 0.8;
          width: 50%;
        }
      }

      & > h2 {
        font-size: 3rem;

        @media only screen and (min-width: 1200px) {
          font-size: 4.5rem;
          line-height: 0.8;
          width: 80%;
        }
      }

      & > p {
        grid-column: 7 / span 4;
      }
    }
  }

  .panel--parallax {
    min-height: 100vh;
  }
</style>
