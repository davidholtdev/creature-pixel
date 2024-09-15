<template>
  <div class="project-card">
    <NuxtLink :to="url" class="project-card-image"></NuxtLink>
    <div class="project-card-body">
      <span v-if="type" class="project-card-type">{{ type }}</span>
      <NuxtLink :to="url">
        <h4 class="project-card-title">{{ title }}</h4>
      </NuxtLink>
      <p v-if="summary" class="project-card-text">{{ summary }}</p>
      <ul v-if="tags" class="list-inline font-mono fw-bold mb-0 project-card-tags">
        <li v-for="tag in tags" class="list-inline-item">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BaseCard } from "~/types/index";
  const props = defineProps<BaseCard>();
</script>

<style scoped></style>
