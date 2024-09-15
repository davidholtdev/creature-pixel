<template>
  <div>
    <h1>Projects</h1>
    <div class="container">
      <div class="project-card-list">
        <ProjectCard v-for="item in projectCards" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type Project, type BaseCard } from "@/types";
  import useProjects from "~/composables/useProducts";

  const { getProjects } = useProjects();

  const projects = ref<Project[]>([]);

  const projectCards = computed<BaseCard[]>(() => {
    return projects.value.map((x) => ({
      type: x.type,
      title: x.title,
      summary: x.summary,
      tags: x.tags,
      image: x.tileImage,
      url: `/projects/${x.slug}`,
    }));
  });

  const { success, data, message } = await getProjects();

  if (!success) {
    console.error("Error fetching products:", message);
  }

  if (data?.value) {
    projects.value = data.value;
  }
</script>

<style scoped></style>
