<template>
  <div v-if="items && items.length" class="project-card-list">
    <ProjectCard v-for="item in items" v-bind="item" />
  </div>
</template>

<script setup lang="ts">
  import { type ProjectCardCollection } from "~/types";

  const props = defineProps<ProjectCardCollection>();
</script>

<style scoped></style>
