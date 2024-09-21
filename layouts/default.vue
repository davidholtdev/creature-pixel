<template>
  <div class="page-wrapper">
    <NuxtLoadingIndicator :height="5" :color="'var(--bs-primary)'" />
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts"></script>
