<template>
  <div class="heading-block" :class="[blockAlignment, blockSize]">
    <div class="heading-block-content">
      <div v-if="hasTagline" class="heading-block-tagline">
        <slot name="tagline">{{ tagline }}</slot>
      </div>
      <component :is="resolvedTag" v-if="hasTitle" class="heading-block-title" :class="titleSize">
        <slot name="title">{{ title }}</slot>
      </component>
      <p v-if="hasDescription" class="heading-block-description">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { HeadingTagTypes, type HeadingBlock } from "~/types";
  const props = withDefaults(defineProps<HeadingBlock>(), {
    tag: HeadingTagTypes.H2,
  });

  const hasTagline = computed(() => !!props.tagline || !!useSlots().tagline);

  const hasTitle = computed(() => !!props.title || !!useSlots().title);

  const hasDescription = computed(() => !!props.description || !!useSlots().description);

  const resolvedTag = computed(() => {
    return Object.values(HeadingTagTypes).includes(props.tag as HeadingTagTypes) ? props.tag : HeadingTagTypes.H2;
  });

  const blockAlignment = computed(() => {
    return props?.alignment === "center" ? "heading-block--center" : "";
  });

  const blockSize = computed(() => {
    return props?.containerSize === "sm" ? "heading-block--slim" : "";
  });

  const titleSize = computed(() => {
    return props?.titleSize === "lg" ? "heading-block-title-lg" : "";
  });
</script>

<style scoped></style>
