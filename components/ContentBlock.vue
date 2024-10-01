<template>
  <div class="content-section is-content" data-aos="fade-up">
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
      <NuxtImg
        :src="image.src"
        :width="image.width"
        :height="image.height"
        format="webp"
        sizes="xs: 516px sm:516px md:696px lg:936px xl:1116px xxl:1296px"
        :alt="image.altText"
        densities="x1 x2"
        loading="lazy"></NuxtImg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type ContentBlock } from "~/types";
  const props = defineProps<ContentBlock>();

  const combinedContent = computed(() => {
    return Array.isArray(props.content) ? props.content.join(" ") : props.content;
  });
</script>

<style scoped></style>
