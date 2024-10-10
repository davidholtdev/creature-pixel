<template>
  <div class="overlay" :class="{ 'overlay-animate-in': animateIn, 'overlay-animate-out': animateOut }"></div>
</template>

<script setup lang="ts">
  interface OverlayProps {
    animateIn: Boolean;
    animateOut: Boolean;
  }

  const props = defineProps<OverlayProps>();
</script>
