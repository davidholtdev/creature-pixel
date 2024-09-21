<template>
  <div>
    <div class="box-grid">
      <div v-for="(image, index) in tileImages" :key="index" class="box-grid-item">
        <a class="box" @click="openLightbox(index)" role="button">
          <div class="box-image">
            <NuxtImg :src="image.src" :alt="image.alt" sizes="sm:250px md:221px lg:301px" densities="x1 x2" loading="lazy"></NuxtImg>
          </div>
        </a>
      </div>
    </div>
    <ClientOnly>
      <vue-easy-lightbox :visible="showLightbox" :imgs="images" :index="currentImageIndex" @hide="showLightbox = false" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  interface Scrapbook {
    slug: string;
    name: string;
  }

  interface Img {
    src?: string;
    title?: string;
    alt?: string;
  }

  const showLightbox = ref(false);
  const currentImageIndex = ref(0);

  const scrapbookItems = ref<Scrapbook[]>([
    {
      slug: "deer-skull",
      name: "Deer skull",
    },
    {
      slug: "diamond-skull",
      name: "Diamond skull",
    },
    {
      slug: "double-koi",
      name: "Double koi",
    },
    {
      slug: "koi",
      name: "Koi",
    },
    {
      slug: "native-skull",
      name: "Native skull",
    },
    {
      slug: "pink-skull",
      name: "Pink skull",
    },
    {
      slug: "pistol",
      name: "Pistol",
    },
    {
      slug: "ram-skull",
      name: "Ram skull",
    },
    {
      slug: "vans",
      name: "Vans",
    },
  ]);

  const tileImages = computed<Img[]>(() => {
    return scrapbookItems.value.map((x) => ({
      src: generateFilePath(x.slug, false),
      alt: generateAltText(x.name),
    }));
  });

  const images = computed<Img[]>(() => {
    return scrapbookItems.value.map((x) => ({
      src: generateFilePath(x.slug, true),
      alt: generateAltText(x.name),
    }));
  });

  const generateAltText = (value: string) => `${value} scrapbook illustration`;
  const generateFilePath = (slug: string, isFull: boolean) => `/images/scrapbook/${slug}-${isFull ? "full" : "tile"}.jpg`;
  const openLightbox = (index: number) => {
    currentImageIndex.value = index;
    showLightbox.value = true;
  };
</script>

<style scoped></style>
