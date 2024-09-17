<template>
  <div>
    <div class="content-section">
      <div class="container">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Projects</template>
          <template #title>Some Things I’ve Worked On</template>
        </HeadingBlock>
      </div>
      <div v-if="projectCards && projectCards.length" class="container">
        <ProjectCardCollection :items="projectCards" />
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

  useHead({
    title: "Projects | Creature Pixel",
    meta: [
      {
        name: "description",
        content: "Selected projects covering everything from full stack web development, UI/UX design and wireframing to company branding and graphic design.",
      },
    ],
  });
</script>

<style scoped></style>
