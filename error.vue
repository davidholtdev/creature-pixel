<template>
  <NuxtLayout v-if="error.statusCode === 404">
    <div class="content-section">
      <div class="container container-slim">
        <HeadingBlock tag="h1" alignment="center" title-size="lg" container-size="sm">
          <template #tagline>404 - Page not found</template>
          <template #title>Oops! We couldn't find the page you're looking for</template>
          <template #description>This content might have moved or been deleted</template>
        </HeadingBlock>
      </div>
    </div>
  </NuxtLayout>
  <NuxtLayout name="error" v-else>
    <div class="content-section">
      <div class="container container-slim">
        <HeadingBlock tag="h1" alignment="center" title-size="lg" container-size="sm">
          <template #tagline>500 - Internal server error</template>
          <template #title>Oops! Well this is unexpected&hellip;</template>
          <template #description><p>Sorry the page you are looking for is currently unavailable</p></template>
        </HeadingBlock>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-auto">
              <CallToAction class="mx-auto" @click="handleError">Return home</CallToAction>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";

  const error = useError();

  const handleError = () => {
    clearError({
      redirect: appRoutes.home.path,
    });
  };

  const pageTitle = error.value.statusCode === 404 ? "404 Page not found" : "500 Internal server error";

  useHead({
    title: getPageTitle(pageTitle),
  });
</script>

<style scoped></style>
