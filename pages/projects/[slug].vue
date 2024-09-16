<template>
  <div>
    <h1>{{ project?.title }}</h1>
  </div>
</template>

<script setup lang="ts">
  import type { Project } from "@/types";
  import useProjects from "~/composables/useProducts";

  const route = useRoute();
  const slug = route.params.slug as string;
  const { getProjects } = useProjects();

  const project = ref<Project | null>(null);

  const { success, data } = await getProjects();

  if (!success) {
    throw createError({
      statusCode: 500,
      message: "Error fetching data!",
    });
  }

  project.value = data?.value?.find((x: { slug: string }) => x.slug === slug) ?? null;

  if (!project.value) {
    throw createError({
      statusCode: 404,
      message: "Page cannot be found",
    });
  }

  useHead({
    title: project.value?.metaData?.title ?? "",
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
