<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page of your Nuxt 3 website!</p>
    <a href="">I am a simple link</a>
  </div>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";

  useHead({
    title: getPageTitle(),
    meta: [
      {
        name: "description",
        content: "",
      },
    ],
  });
</script>

<style scoped></style>
