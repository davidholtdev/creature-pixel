<template>
  <article class="project-card">
    <NuxtLink v-if="url" :to="url" class="project-card-image">
      <template v-if="image && image.src">
        <NuxtImg :src="image.src" :width="image.width" format="webp" :alt="image.altText" sizes="sm:640px md:340px lg:300px xl:360px xxl:420px" densities="x1 x2"></NuxtImg>
      </template>
    </NuxtLink>
    <div v-else class="project-card-image"></div>
    <div class="project-card-body">
      <span v-if="type" class="project-card-type">{{ type }}</span>
      <component :is="resolvedTag" class="project-card-title">
        <NuxtLink v-if="url" :to="url">
          {{ title }}
        </NuxtLink>
        <template v-else>{{ title }}</template>
      </component>
      <p v-if="summary" class="project-card-text">{{ truncateString(summary, 150) }}</p>
      <ul v-if="tags" class="list-inline font-mono fw-bold mb-0 project-card-tags">
        <li v-for="tag in tags" class="list-inline-item">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { truncateString } from "@/utils/stringUtils";
  import { type BaseCard, HeadingTagTypes } from "~/types/index";
  const props = withDefaults(defineProps<BaseCard>(), {
    tag: HeadingTagTypes.H3,
  });

  const resolvedTag = computed(() => {
    return Object.values(HeadingTagTypes).includes(props.tag as HeadingTagTypes) ? props.tag : HeadingTagTypes.H2;
  });
</script>

<style scoped></style>
