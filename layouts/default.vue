<template>
  <div class="page-wrapper">
    <NuxtLoadingIndicator :height="5" :color="'#adb5bd'" />
    <Overlay :animateIn="animateIn" :animateOut="animateOut" />
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const animateIn = ref(false);
  const animateOut = ref(false);
  const ANIM_DURATION = 900;

  onMounted(() => {
    router.beforeEach((to, from, next) => {
      animateIn.value = true;
      animateOut.value = false;

      setTimeout(() => {
        next();
      }, ANIM_DURATION);
    });

    router.afterEach(() => {
      animateIn.value = false;
      animateOut.value = true;

      setTimeout(() => {
        animateOut.value = false;
      }, ANIM_DURATION);
    });
  });
</script>
