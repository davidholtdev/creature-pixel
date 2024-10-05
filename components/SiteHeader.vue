<template>
  <header id="Header" class="header">
    <NuxtLink :to="appRoutes.home.path" class="header-logo">{{ appName }}</NuxtLink>
    <div class="header-navigation">
      <div id="MenuPlugin" class="header-menu">
        <div class="header-menu-bg"></div>
        <div class="header-menu-main">
          <NuxtLink :to="appRoutes.home.path" class="header-logo">{{ appName }}</NuxtLink>
          <nav>
            <ul class="header-nav">
              <li class="header-nav-item">
                <NuxtLink :to="appRoutes.experience.path">{{ appRoutes.experience.label }}</NuxtLink>
              </li>
              <li class="header-nav-item">
                <NuxtLink :to="appRoutes.projects.path">{{ appRoutes.projects.label }}</NuxtLink>
              </li>
              <li class="header-nav-item">
                <NuxtLink :to="appRoutes.scrapbook.path">{{ appRoutes.scrapbook.label }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="header-widgets">
        <button id="MenuTrigger" type="button" :aria-label="isOpen ? 'Close menu' : 'Open menu'" :aria-expanded="isOpen" class="hamburger" @click="toggle" :class="{ active: isOpen }">
          <span class="hamburger-inner">
            <span></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { appRoutes, appName } from "@/utils/constants.js";
  import { KeydownKeys, EventListeners } from "@/types";

  const router = useRouter();
  const isOpen = ref<boolean>(false);
  const isOpenClass = "header--open";

  const handleKeydownEvent = (event: KeyboardEvent) => {
    if (event.key === KeydownKeys.Escape) close();
  };

  const open = () => {
    document.addEventListener(EventListeners.KeyDown, handleKeydownEvent);
    isOpen.value = true;
  };

  const close = () => {
    document.removeEventListener(EventListeners.KeyDown, handleKeydownEvent);
    isOpen.value = false;
  };

  const toggle = () => {
    if (isOpen.value) close();
    else open();
  };

  watch(
    () => router.currentRoute.value,
    () => {
      if (isOpen.value) close();
    }
  );

  useHead({
    bodyAttrs: {
      class: computed(() => (isOpen.value ? isOpenClass : "")),
    },
  });

  onBeforeUnmount(() => {
    document.removeEventListener(EventListeners.KeyDown, handleKeydownEvent);
  });
</script>

<style scoped></style>
