<template>
  <component
    :is="elementType"
    class="button"
    :to="link ? link.url : null"
    :external="link ? external : null"
    :target="link ? link.target : null"
    :type="!link ? type : null"
    :disabled="disabled"
    :data-variant="variant"
    :data-size="small ? 'small' : 'default'"
    :data-loading="loading ?? false"
    v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { type CallToAction, CallToActionVariant } from "~/types";
  const props = withDefaults(defineProps<CallToAction>(), {
    type: "button",
    variant: CallToActionVariant.Primary,
    disabled: false,
  });

  const elementType = computed(() => {
    if (props.link && !props.disabled) {
      return resolveComponent("NuxtLink");
    }

    if (!props.link && (props.type === "button" || props.type === "submit")) {
      return "button";
    }

    return "div";
  });
</script>

<style scoped></style>
