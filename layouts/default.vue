<template>
  <div>
    <NuxtLoadingIndicator :height="5" :color="'var(--bs-primary)'" />
    <SiteHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts"></script>
