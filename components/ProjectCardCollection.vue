<template>
  <div v-if="items && items.length" class="project-card-list">
    <div v-for="(item, index) in items" :key="item.title" class="project-card-list-item" data-aos="fade-up" :data-aos-delay="100 + index * 100">
      <ProjectCard v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type ProjectCardCollection } from "~/types";

  const props = defineProps<ProjectCardCollection>();
</script>

<style scoped></style>
