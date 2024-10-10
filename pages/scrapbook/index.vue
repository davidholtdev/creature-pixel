<template>
  <div>
    <div class="content-section">
      <div class="container" data-aos="fade-up">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Scrapbook</template>
          <template #title>I Also Draw, Sometimes</template>
        </HeadingBlock>
      </div>
      <div v-if="items && items.length" class="container container-slim">
        <BoxCollection :items="items" />
      </div>
    </div>
    <Connect tag="h2" />
  </div>
</template>

<script setup lang="ts">
  import type { Scrapbook } from "@/types";
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";
  import useScrapbook from "@/composables/useScrapbook.js";

  const { get } = useScrapbook();

  const items = ref<Scrapbook[]>([]);

  const { success, data, message } = await get();

  if (!success) {
    console.error("Error fetching scrapbook:", message);
  }

  if (success && data) {
    items.value = data;
  }

  useHead({
    title: getPageTitle(appRoutes.scrapbook.label),
    meta: [
      {
        name: "description",
        content: "Selected illustrations and mixed media projects.",
      },
    ],
  });
</script>

<style scoped></style>
