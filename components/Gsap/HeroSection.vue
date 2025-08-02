<template>
  <section ref="wrapperElem" class="panel panel--scale">
    <div class="mask-pin-wrapper">
      <div ref="maskPrimary" class="mask-primary">
        <template v-if="enableGuide">
          <div :style="{ position: 'absolute', top: '80px', left: '80px', zIndex: 90, color: 'black' }">
            <p>Cursor: X - {{ cursorX }}, Y - {{ cursorY }}</p>
            <p>SVG: X - {{ svgCenterX }}, Y - {{ svgCenterY }}</p>
            <p>SVG: {{ svgIsOutside }}</p>
          </div>
          <div>
            <div ref="guideDot" :style="guideDotStyle"></div>
            <div ref="guideLine" :style="guideLineStyle"></div>
          </div>
        </template>
        <svg
          ref="svgRef"
          width="50%"
          height="50%"
          viewBox="0 0 4167 4167"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 1.5">
          <rect id="flower" x="0" y="0" width="4166.67" height="4166.67" style="fill: none" />
          <g id="flower1" serif:id="flower">
            <g id="petals">
              <g class="petal-wrapper" id="petal-wrapper-1">
                <path
                  id="petal-1"
                  d="M1398.66,1759c0,0 -136.852,-781.689 15.206,-1127.33c152.059,-345.645 278.774,-409.456 476.45,-281.834c197.676,127.623 293.98,643.432 329.46,888.042c35.481,244.61 96.304,632.796 -111.509,824.23c-207.814,191.434 -598.097,159.528 -709.607,-303.104Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-2">
                <path
                  id="petal-2"
                  d="M1799.94,1533.33c0,-0 463.866,-699.632 833.421,-852.565c369.554,-152.932 514.089,-108.575 573.992,134.676c59.903,243.251 -241.544,709.329 -392.381,922.857c-150.837,213.528 -386.714,555.712 -687.003,549.459c-300.289,-6.252 -578.955,-317.903 -328.029,-754.427Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-3">
                <path
                  id="petal-3"
                  d="M2369.08,1419.08c-0,0 811.361,-54.429 1249.31,3.526c362.479,47.967 570.414,283.397 422.49,469.92c-156.312,197.099 -772.911,341.478 -1066.78,370.508c-293.869,29.03 -760.332,79.663 -984.785,-135.588c-224.454,-215.251 -177.07,-608.605 379.768,-708.366Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-4">
                <path
                  id="petal-4"
                  d="M2596.95,1757.06c0,0 733.095,337.268 1051,644.008c263.126,253.883 368.185,660.95 137.625,720.234c-535.763,137.762 -949.491,-174.742 -1203.15,-325.929c-253.661,-151.188 -659.005,-387.508 -711.731,-693.992c-52.727,-306.483 219.026,-594.795 726.256,-344.321Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-5">
                <path
                  id="petal-5"
                  d="M2780.64,2220.79c-0,-0 132.1,622.465 113.954,1198.17c-13.634,432.578 -187.409,553.844 -429.616,386.379c-345.206,-238.679 -470.592,-647.326 -566.067,-910.825c-95.474,-263.499 -251.929,-680.628 -68.994,-940.606c182.935,-259.977 721.585,-221.341 950.723,266.882Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-6">
                <path
                  id="petal-6"
                  d="M2298.72,2922.39c-0,-0 -218.351,225.895 -422.204,436.508c-309.032,319.281 -833.015,460.579 -943.913,323.53c-145.545,-179.865 157.385,-717.495 295.172,-939.778c137.786,-222.282 353.026,-577.85 639.252,-605.08c286.225,-27.231 658.663,336.758 431.693,784.82Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-7">
                <path
                  id="petal-7"
                  d="M1990.49,2723.95c0,-0 -845.05,272.62 -1323.2,335.254c-395.754,51.842 -675.194,-119.627 -565.651,-340.236c115.754,-233.117 731.983,-539.99 1035.7,-647.746c303.722,-107.757 784.677,-283.208 1076.51,-135.744c291.836,147.464 340.853,540.979 -223.372,788.472Z"
                  style="fill: #df2a23" />
              </g>
              <g class="petal-wrapper" id="petal-wrapper-8">
                <path
                  id="petal-8"
                  d="M1789.67,2469.85c0,-0 -961.161,-204.204 -1297.47,-522.826c-336.304,-318.623 -357.231,-483.4 -127.146,-638.39c230.085,-154.99 866.824,-26.688 1164.53,45.101c297.707,71.789 772.04,180.863 906.728,490.089c134.689,309.226 -65.064,714.104 -646.648,626.026Z"
                  style="fill: #df2a23" />
              </g>
            </g>
            <g id="head">
              <path
                ref="svgFace"
                id="face"
                d="M1670.38,2320.55c-0,-0 -110.454,-160.879 -52.826,-372.183c57.628,-211.304 285.74,-319.357 468.23,-312.153c182.489,7.204 417.805,86.442 465.828,290.543c48.024,204.1 -31.215,427.409 -160.879,513.852c-129.663,86.442 -204.1,100.849 -338.566,84.041c-134.466,-16.808 -132.065,-19.209 -211.303,-57.628c-79.239,-38.419 -122.461,-76.838 -170.484,-146.472Z"
                style="fill: #fff" />
              <g ref="facialFeatures" id="facial-features">
                <g id="mouth">
                  <path
                    ref="mouth"
                    id="mouth-smile"
                    d="M1960.92,2106.84c0,-0 2.402,192.094 108.053,192.094c105.652,0 117.658,-129.663 122.461,-177.687"
                    style="fill: none; stroke: #000; stroke-width: 57.63px" />
                </g>
                <g ref="eyeGroup" id="eyes">
                  <ellipse ref="rightEyeOpen" id="right-eye-open" cx="2171.02" cy="1923.15" rx="69.234" ry="70.034" />
                  <ellipse ref="leftEyeOpen" id="left-eye-open" cx="1974.13" cy="1931.15" rx="66.032" ry="69.234" />
                  <path ref="rightEyeShut" id="right-eye-shut" d="M2130.16,1937.12c-0,-0 33.636,15.874 73.579,-0.722" style="fill: none; stroke: #000; stroke-width: 57.63px" />
                  <path ref="leftEyeShut" id="left-eye-shut" d="M1935.66,1937.12c0,-0 33.636,15.874 73.579,-0.722" style="fill: none; stroke: #000; stroke-width: 57.63px" />
                </g>
              </g>
            </g>
          </g>
        </svg>

        <div ref="circle" class="circle" :style="circleStyle"></div>
      </div>
    </div>
    <div ref="maskSecondary" class="mask-secondary">
      <div class="panel-grid">
        <!-- <h2 class="fancy-title">
          <span v-for="word in splitTitle3">
            {{ word }}
          </span>
        </h2>
        <p>
          My creative journey began as a hobby but quickly became a meaningful career. Over the years, I’ve worked on various illustration projects—from brand collaborations to marketing
          campaigns—bringing playful, colourful, and expressive visuals to life.
        </p>
        <p>
          In 2023, I stepped into the world of tattooing, where I translate my artistic language into bold and vibrant designs on skin. Whether I’m creating illustrations or tattoos, my work is rooted
          in storytelling, emotion, and everyday beauty, with a touch of humour and heart.
        </p>
        <p>I love working with creatives and brands who share thoughtful values and a passion for art that connects.</p> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import gsap from "gsap";
  import { useElementBounding, useMouse, useMouseInElement } from "@vueuse/core";
  import { transform } from "typescript";
  import type { CSSProperties } from "vue";

  let ctx: gsap.Context;
  let trigger: ScrollTrigger;

  const maskPrimary = ref<HTMLDivElement>();
  const maskSecondary = ref<HTMLDivElement>();
  const circle = ref<HTMLDivElement>();

  const { x: cursorX, y: cursorY } = useMouse(); // document-level

  const svgRef = ref<SVGElement>();
  const svgFace = ref<SVGElement>();

  const intoComplete = ref<boolean>(false);

  const angleRanges: { start: number; end: number }[] = [
    { start: 315, end: 6 },
    { start: 6, end: 54 },
    { start: 54, end: 95 },
    { start: 95, end: 139 },
    { start: 139, end: 184 },
    { start: 184, end: 228 },
    { start: 228, end: 265 },
    { start: 265, end: 315 },
  ];
  const { isOutside: svgIsOutside } = useMouseInElement(svgRef);
  const { top: svgTop, left: svgLeft, width: svgWidth, height: svgHeight } = useElementBounding(svgRef);
  const svgCenterX = computed(() => svgLeft.value + svgWidth.value / 2);
  const svgCenterY = computed(() => svgTop.value + svgHeight.value / 2);
  const { width: svgFaceWidth } = useElementBounding(svgFace);

  const dx = computed(() => cursorX.value - svgCenterX.value);
  const dy = computed(() => cursorY.value - svgCenterY.value);
  const distance = computed(() => Math.sqrt(dx.value * dx.value + dy.value * dy.value));
  const rawAngle = computed(() => (Math.atan2(dy.value, dx.value) * 180) / Math.PI); // Raw angle from center to cursor
  const adjustedAngle = computed(() => (rawAngle.value + 360 + 90) % 360); // Adjusted so 0° is top, clockwise rotation

  // Eyes
  const facialFeatures = ref<SVGElement>();
  const eyeGroup = ref<SVGElement>();
  const leftEyeShut = ref<SVGElement>();
  const rightEyeShut = ref<SVGElement>();
  const leftEyeOpen = ref<SVGElement>();
  const rightEyeOpen = ref<SVGElement>();
  const mouth = ref<SVGPathElement>();

  const enableGuide = ref<boolean>(false);
  const guideDot = ref<HTMLDivElement>();
  const guideDotStyle = computed(
    (): CSSProperties => ({
      position: "fixed",
      left: `${svgCenterX.value - 4}px`,
      top: `${svgCenterY.value - 4}px`,
      width: "8px",
      height: "8px",
      background: "red",
      borderRadius: "50%",
      zIndex: 9999,
    })
  );
  const guideLine = ref<HTMLDivElement>();
  const guideLineStyle = computed(
    (): CSSProperties => ({
      position: "fixed",
      width: "2px",
      height: `${distance.value}px`,
      background: "red",
      transformOrigin: "top center",
      zIndex: 9999,
      top: `${svgCenterY.value}px`,
      left: `${svgCenterX.value}px`,
      transform: `rotate(${adjustedAngle.value + 180}deg)`,
    })
  );

  const circleStyle = computed(
    (): CSSProperties => ({
      width: `${svgFaceWidth.value}px`,
      height: `${svgFaceWidth.value}px`,
    })
  );

  let currentPetalIndex: number = -1;

  watch([adjustedAngle, svgIsOutside], () => {
    if (!intoComplete.value) return;

    if (svgIsOutside.value) {
      resetPetalAnimations();
    } else {
      updatePetalAnimations();
    }
  });

  watch([cursorX, cursorY], () => {
    // // Your logic here (like eye tracking or animation)
    // updateEyes();
    if (!intoComplete.value) return;

    const groupRect = facialFeatures.value.getBoundingClientRect();

    const groupCenterX = groupRect.left + groupRect.width / 2;
    const groupCenterY = groupRect.top + groupRect.height / 2;

    const offsetX = (cursorX.value - groupCenterX) / 10;
    const offsetY = (cursorY.value - groupCenterY) / 10;

    gsap.to(facialFeatures.value, {
      x: offsetX,
      y: offsetY,
      duration: 0.2,
      ease: "power2.out",
      overwrite: true,
    });
  });

  function startSwayAnimation() {
    gsap.utils.toArray("#petals path").forEach((petal, i) => {
      const scaleMin = 0.92;
      const scaleMax = 1.08;
      const rotationMin = -2;
      const rotationMax = 2;
      const duration = 2.5 + i * 0.2;
      const delay = i * 0.1;
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: delay,
      });
      tl.to(petal!, {
        scale: scaleMax,
        rotation: rotationMax,
        transformOrigin: "50% 50%",
        duration: duration,
        ease: "sine.inOut",
      }).to(petal!, {
        scale: scaleMin,
        rotation: rotationMin,
        transformOrigin: "50% 50%",
        duration: duration,
        ease: "sine.inOut",
      });
    });
  }

  function startBlinkingAnimation() {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    gsap.set([leftEyeShut.value, leftEyeShut.value], { autoAlpha: 0 });

    tl.to([leftEyeOpen.value, rightEyeOpen.value], {
      autoAlpha: 0,
      duration: 0.1,
      ease: "power1.inOut",
    })
      .to(
        [leftEyeShut.value, rightEyeShut.value],
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: "power1.inOut",
        },
        "<"
      ) // sync with previous
      .to(
        [leftEyeOpen.value, rightEyeOpen.value],
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: "power1.inOut",
        },
        "+=0.2"
      ) // after blink
      .to(
        [leftEyeShut.value, rightEyeShut.value],
        {
          autoAlpha: 0,
          duration: 0.1,
          ease: "power1.inOut",
        },
        "<"
      );
  }

  function getPetalIndexFromAngle(angle: number, ranges: { start: number; end: number }[]): number {
    for (let i = 0; i < ranges.length; i++) {
      const { start, end } = ranges[i];
      if (start < end) {
        if (angle >= start && angle < end) return i;
      } else {
        if (angle >= start || angle < end) return i;
      }
    }
    return -1;
  }

  function updatePetalAnimations() {
    const index = getPetalIndexFromAngle(adjustedAngle.value, angleRanges);

    if (index === currentPetalIndex) return;

    currentPetalIndex = index;

    for (let i = 0; i < angleRanges.length; i++) {
      const isActive = i === index;
      gsap.to(`#petal-wrapper-${i + 1}`, {
        scale: isActive ? 0.9 : 1,

        duration: 0.3,
        transformOrigin: "center center",
        ease: isActive ? "power2.out" : "power1.inOut",
        overwrite: true,
      });
    }
  }

  function resetPetalAnimations() {
    if (currentPetalIndex === -1) return;
    currentPetalIndex = -1;

    for (let i = 0; i < angleRanges.length; i++) {
      ctx.add(() => {
        gsap.to(`#petal-wrapper-${i + 1}`, {
          scale: 1,

          duration: 0.3,
          transformOrigin: "center center",
          ease: "power2.out",
          overwrite: true,
        });
      });
    }
  }

  onMounted(() => {
    useLenis();

    ctx = gsap.context(() => {
      const flowerSway = gsap.timeline({ repeat: -1, yoyo: true });

      let introTimeline = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1 },
        paused: true, // ← prevents autoplay on creation
      });

      const pathLength = mouth.value.getTotalLength();
      console.log(pathLength);
      mouth.value.style.strokeDasharray = `${pathLength}`;
      mouth.value.style.strokeDashoffset = `${pathLength}`;

      introTimeline
        // Petals scale in (in staggered fashion)
        .from("#face", { scale: 0, transformOrigin: "center center", opacity: 0, duration: 1 })
        .from("#petal-wrapper-1", { opacity: 0, transformOrigin: "center center" })
        .from("#petal-wrapper-2", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-3", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-4", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-5", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-6", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-7", { opacity: 0 }, "-=0.8")
        .from("#petal-wrapper-8", { opacity: 0 }, "-=0.8")
        .from("#facial-features", { opacity: 0, duration: 0.5 }, "-=0.6")
        // Eyes pop in together
        .to(["#right-eye-open", "#left-eye-open"], { autoAlpha: 0, duration: 0.25 }) // first blink close
        .to(["#right-eye-shut", "#left-eye-shut"], { autoAlpha: 1, duration: 0.08 }, "<")
        .to(["#right-eye-open", "#left-eye-open"], { autoAlpha: 1, duration: 0.08 }, "+=0.15") // first blink open
        .to(["#right-eye-shut", "#left-eye-shut"], { autoAlpha: 0, duration: 0.08 }, "<")

        .to(["#right-eye-open", "#left-eye-open"], { autoAlpha: 0, duration: 0.08 }, "+=0.2") // second blink close
        .to(["#right-eye-shut", "#left-eye-shut"], { autoAlpha: 1, duration: 0.08 }, "<")
        .to(["#right-eye-open", "#left-eye-open"], { autoAlpha: 1, duration: 0.08 }, "+=0.15") // second blink open
        .to(["#right-eye-shut", "#left-eye-shut"], { autoAlpha: 0, duration: 0.08 }, "<")

        .fromTo(
          mouth.value!,
          { opacity: 0 },
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "+=0.5"
        ) // Starts a bit earlier, overlapping with final eye open

        // When done, trigger sway and enable watchers
        .add(() => {
          intoComplete.value = true;
          startBlinkingAnimation();
          startSwayAnimation();
        });

      introTimeline.play();
      //   gsap.to(circle.value!, {
      //     scale: 20,
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: maskSecondary.value,
      //       start: "top 80%", // when secondary hits bottom of viewport
      //       end: "top 25%", // until it reaches top of viewport
      //       scrub: true,
      //     },
      //   });

      gsap.to(maskPrimary.value!, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: maskSecondary.value,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });

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
    });
  });
</script>

<style lang="scss">
  #petals path {
    pointer-events: all;
    cursor: pointer; /* optional: gives visual feedback */
  }
</style>
<style scoped lang="scss">
  .circle {
    position: fixed;
    width: 0px;
    height: 0px;
    transform: scale(0);
    border-radius: 50%;
    background: white;
  }

  .panel {
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

  .panel--scale {
    position: relative;
    min-height: 200vh;
    isolation: isolate;
    background: orange; // red: #dd2a23

    .fancy-title {
      font-size: 4rem;
    }

    .mask {
      &-pin-wrapper {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;
      }
      &-primary {
        position: absolute;
        inset: 0;
        background: #f48cc7;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        pointer-events: none;

        // .circle {
        //   width: 100px;
        //   height: 100px;
        //   background: white;
        //   border-radius: 50%;
        // }
      }
      &-secondary {
        background: orange;
        min-height: 100vh;
        z-index: 0;
      }
    }
  }
</style>
