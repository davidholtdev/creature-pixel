<template>
  <div>
    <div class="content-section">
      <div class="container">
        <HeadingBlock tag="h1" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Scrapbook</template>
          <template #title>I Also Draw, Sometimes</template>
        </HeadingBlock>
      </div>
      <div class="container container-slim">
        <BoxCollection />
      </div>
    </div>
    <Connect />
  </div>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";

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
