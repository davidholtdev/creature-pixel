<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">&copy; Creature Pixel {{ currentYear }}</div>
        <div class="col-auto">
          <div class="social-links">
            <NuxtLink :to="socialLinks.linkedIn.url" target="_blank" rel="noopener" class="social-links-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <span class="visually-hidden">{{ socialLinks.linkedIn.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { socialLinks } from "~/utils/constants";
  const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
