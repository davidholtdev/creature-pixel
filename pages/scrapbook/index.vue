<template>
  <div>
    <div class="content-section">
      <div class="container">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Scrapbook</template>
          <template #title>I Also Draw, Sometimes</template>
        </HeadingBlock>
      </div>
      <div v-if="items && items.length" class="container container-slim">
        <BoxCollection :items="items" />
      </div>
    </div>
    <Connect />
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
    console.error("Error fetching products:", message);
  }

  if (data?.value) {
    items.value = data.value;
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
