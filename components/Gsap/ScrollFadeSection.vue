<template>
  <section ref="panel" class="panel">
    <div ref="panelWrapper" class="panel-wrapper" :style="wrapperStyle">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useDebounceFn, useElementSize, useEventListener, useWindowSize } from "@vueuse/core";
  import gsap from "gsap";

  const panel = ref<HTMLElement>();
  const panelWrapper = ref<HTMLElement>();

  const { height: elemHeight } = useElementSize(panelWrapper);
  const { height: windowHeight } = useWindowSize();

  const translateY = ref(0);
  const scale = ref(1);
  const opacity = ref(1);

  const wrapperStyle = computed(() => ({
    transform: `translate3d(0, ${translateY.value}px, 0) scale(${scale.value})`,
    opacity: opacity.value.toFixed(3),
  }));

  let ctx: gsap.Context;
  let trigger: ScrollTrigger;

  onMounted(() => {
    useLenis();

    if (!panel.value || !panelWrapper.value) {
      return;
    }

    ctx = gsap.context(() => {
      trigger = ScrollTrigger.create({
        trigger: panel.value,
        start: () => {
          return elemHeight.value < windowHeight.value ? "top top" : "bottom bottom";
        },
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const scrollDelta = self.scroll() - self.start;
          const maxY = self.end - self.start;
          const clampedDelta = Math.max(0, Math.min(scrollDelta, maxY));
          const progress = clampedDelta / maxY;

          translateY.value = clampedDelta;
          scale.value = 1 - progress * 0.05; // from 1 => 0.95
          opacity.value = 1 - progress; // from 1 => 0
        },
      });
    }, panelWrapper.value);

    const debounceFn = useDebounceFn(() => {
      trigger?.refresh();
    }, 250);

    useEventListener(window, "resize", debounceFn);
  });

  onUnmounted(() => {
    ctx?.revert();
  });
</script>

<style scoped lang="scss">
  .panel {
    position: relative;
    display: flex;
    color: white;
    overflow: hidden;
    background: black;

    &-wrapper {
      will-change: transform, opacity;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
  }
</style>
