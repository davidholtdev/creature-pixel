<template>
  <div class="project-card">
    <NuxtLink v-if="url" :to="url" class="project-card-image">
      <template v-if="image && image.src">
        <NuxtImg :src="image.src" :width="image.width" :height="image.height" :alt="image.altText"></NuxtImg>
      </template>
    </NuxtLink>
    <div v-else class="project-card-image"></div>
    <div class="project-card-body">
      <span v-if="type" class="project-card-type">{{ type }}</span>
      <h4 class="project-card-title">
        <NuxtLink v-if="url" :to="url">
          {{ title }}
        </NuxtLink>
        <template v-else>{{ title }}</template>
      </h4>
      <p v-if="summary" class="project-card-text">{{ truncateString(summary, 150) }}</p>
      <ul v-if="tags" class="list-inline font-mono fw-bold mb-0 project-card-tags">
        <li v-for="tag in tags" class="list-inline-item">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { truncateString } from "@/utils/stringUtils";
  import type { BaseCard } from "~/types/index";
  const props = defineProps<BaseCard>();
</script>

<style scoped></style>
