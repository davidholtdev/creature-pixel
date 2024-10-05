<template>
  <div>
    <div class="box-grid">
      <div v-for="(item, index) in items" :key="index" class="box-grid-item">
        <a class="box" @click="openLightbox(index)" role="button">
          <div class="box-image">
            <template v-if="item.tileImage && item.tileImage.src">
              <NuxtImg :src="item.tileImage.src" :alt="item.tileImage.altText" format="webp" sizes="sm:250px md:221px lg:301px" densities="x1 x2"></NuxtImg>
            </template>
          </div>
        </a>
      </div>
    </div>
    <ClientOnly>
      <vue-easy-lightbox :visible="showLightbox" :imgs="lightboxImages" :index="currentImageIndex" @hide="showLightbox = false" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import type { Scrapbook } from "@/types";
  import { getBaseUrl } from "~/utils/helpers.js";

  interface BoxCollection {
    items: Scrapbook[];
  }

  const props = defineProps<BoxCollection>();

  interface Img {
    src?: string;
    title?: string;
    alt?: string;
  }

  const showLightbox = ref(false);
  const currentImageIndex = ref(0);

  const lightboxImages = computed<Img[]>(() => {
    return props.items.map((x) => {
      const { src, altText } = x.image;
      return { src: `${getBaseUrl()}${src.startsWith("/") ? src.substring(1) : src}`, alt: altText };
    });
  });

  const openLightbox = (index: number) => {
    currentImageIndex.value = index;
    showLightbox.value = true;
  };
</script>

<style scoped></style>
