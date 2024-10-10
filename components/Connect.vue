<template>
  <div class="content-section">
    <div class="container container-slim" data-aos="fade-up">
      <HeadingBlock :tag="tag" :alignment="alignment" :container-size="containerSize">
        <template #tagline>Contact</template>
        <template #title>Want to Connect</template>
        <template #description>Got a question or proposal, or just want to say hello? I’ll try my best to get back to you!</template>
      </HeadingBlock>
    </div>
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-auto">
          <CallToAction :link="{ name: '', url: 'https://www.linkedin.com/in/davidholtdev/', target: '_blank' }" class="mx-auto">Connect</CallToAction>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { HeadingTagTypes, type HeadingBlock } from "~/types";
  const props = withDefaults(defineProps<HeadingBlock>(), {
    tag: HeadingTagTypes.H3,
    alignment: "center",
    containerSize: "sm",
  });
</script>

<style scoped></style>
