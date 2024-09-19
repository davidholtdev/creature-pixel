<template>
  <div class="content-section content-section-lg is-content" data-aos="fade-up">
    <div class="container container-slim">
      <slot name="content" v-if="useSlots().content" class="rte-content"></slot>
      <div v-else-if="combinedContent" v-html="combinedContent" class="rte-content"></div>
      <div v-if="link" class="mt-5">
        <CallToAction :link="link">{{ link.name }}</CallToAction>
      </div>
    </div>
  </div>
  <div v-if="images && images.length" class="container">
    <div v-for="image in images" class="image-wrapper">
      <NuxtImg :src="image.src" :width="image.width" :height="image.height" :alt="image.altText" densities="x1 x2"></NuxtImg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type ContentBlock } from "~/types";
  const props = defineProps<ContentBlock>();

  const combinedContent = computed(() => {
    // Check if the content is a string, return as is; if array, join with space
    return Array.isArray(props.content) ? props.content.join(" ") : props.content;
  });
</script>

<style scoped></style>
