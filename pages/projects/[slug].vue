<template>
  <div>
    <div class="content-section">
      <div v-if="project?.type || project?.title" class="container container-slim">
        <HeadingBlock tag="h1" title-size="lg">
          <template v-if="project?.type" #tagline>{{ project.type }}</template>
          <template v-if="project?.title" #title>{{ project.title }}</template>
        </HeadingBlock>
        <ul v-if="project.tags && project.tags.length" class="list-inline font-mono">
          <li v-for="tag in project.tags" class="list-inline-item me-3">{{ tag }}</li>
        </ul>
      </div>
    </div>
    <div v-if="project?.image" class="container">
      <div class="image-wrapper">
        <NuxtImg :src="project.image.src" :width="project.image.width" :height="project.image.height" :alt="project.image.altText" densities="x1 x2"></NuxtImg>
      </div>
    </div>
    <ContentBlock v-if="project?.components && project.components.length" v-for="item in project?.components" v-bind="item" />
    <div v-if="projectCards && projectCards.length" class="content-section">
      <div class="container">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Projects</template>
          <template #title>You might also like</template>
        </HeadingBlock>
      </div>
      <div class="container">
        <ProjectCardCollection :items="projectCards" />
      </div>
    </div>
    <Connect />
  </div>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";
  import type { Project, BaseCard } from "@/types";

  import useProjects from "~/composables/useProducts";

  const { getProjects } = useProjects();

  const route = useRoute();
  const slug = route.params.slug as string;

  const project = ref<Project | null>(null);
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

  const { success, data } = await getProjects(true);

  if (!success || !data?.value) {
    throw createError({
      statusCode: 500,
      message: "Error fetching data!",
    });
  }

  project.value = data.value.find((x: { slug: string }) => x.slug === slug) ?? null;

  if (!project.value) {
    throw createError({
      statusCode: 404,
      message: "Page cannot be found",
    });
  }

  projects.value = data.value!.filter((x) => x.id !== project.value!.id).slice(0, 3);

  useHead({
    title: getPageTitle(project.value?.metaData?.title),
    meta: [
      ...(project.value?.metaData?.description
        ? [
            {
              hid: "description",
              name: "description",
              content: project.value.metaData.description,
              key: "description",
            },
          ]
        : []),
    ],
  });
</script>

<style scoped></style>
