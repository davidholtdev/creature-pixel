<template>
  <div>
    <div class="content-section">
      <div class="container" data-aos="fade-up">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Projects</template>
          <template #title>Some Things I’ve Worked On</template>
        </HeadingBlock>
      </div>
      <div v-if="projectCards && projectCards.length" class="container">
        <ProjectCardCollection :items="projectCards" />
      </div>
    </div>
    <Connect tag="h2" />
  </div>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";
  import { type Project, type BaseCard } from "@/types";

  const { get } = useProjects();

  const projects = ref<Project[]>([]);

  const projectCards = computed<BaseCard[]>(() => {
    return projects.value.map((x) => ({
      type: x.type,
      title: x.title,
      summary: x.summary,
      tags: x.tags,
      image: x.tileImage,
      url: `${appRoutes.projects.path}/${x.slug}`,
    }));
  });

  const { success, data, message } = await get();

  if (!success) {
    console.error("Error fetching products:", message);
  }

  if (success && data) {
    projects.value = data;
  }

  useHead({
    title: getPageTitle(appRoutes.projects.label),
    meta: [
      {
        name: "description",
        content: "Selected projects covering everything from full stack web development, UI/UX design and wireframing to company branding and graphic design.",
      },
    ],
  });
</script>

<style scoped></style>
