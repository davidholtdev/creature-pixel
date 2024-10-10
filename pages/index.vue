<template>
  <div>
    <section class="hero">
      <div class="container">
        <h1 class="hero-title" data-aos="fade-down">
          <span class="font-mono small">Hi! I'm David,</span>
          <span>I build things with code <span class="hero-emoji">&#x1F528;</span></span>
        </h1>
        <div class="hero-body">
          <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">I'm a London-based web developer with over 10 years of experience designing and building digital solutions.</p>
        </div>
      </div>
    </section>
    <section class="content-section">
      <div class="container" data-aos="fade-up">
        <HeadingBlock tag="h2" :alignment="'left'" :container-size="'sm'" class="mb-3">
          <template #tagline>Introduction</template>
          <template #title>About me</template>
        </HeadingBlock>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <p class="lead">
                I started out as a Graphic Designer and Illustrator, but since 2013, I've been pursuing my true passion &mdash; web development. Turns out there is something oddly satisfying about
                adjusting pixels and organising data.
              </p>
              <p class="font-mono mt-5 mb-2 h6">Core Technologies:</p>
              <ul v-if="tags && tags.length" class="list-inline font-mono small">
                <li v-for="(tag, index) in tags" class="list-inline-item me-2">{{ tag }}<span v-if="index !== tags.length - 1">,</span></li>
              </ul>
              <div class="mt-4 pt-4">
                <CallToAction :link="{ name: '', url: appRoutes.experience.path }" class="mx-auto">View experience</CallToAction>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="box box--profile" data-aos="zoom-out" data-aos-delay="300">
              <div class="box-image">
                <picture>
                  <NuxtImg src="/images/profile-photo.png" format="webp" alt="David Holt profile photo" width="350" loading="lazy"></NuxtImg>
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="projectCards && projectCards.length" class="content-section">
      <div class="container" data-aos="fade-up">
        <HeadingBlock tag="h2" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Projects</template>
          <template #title>Some Things I’ve Worked On</template>
        </HeadingBlock>
      </div>
      <div class="container">
        <ProjectCardCollection :items="projectCards" />
      </div>
      <div v-if="projectsShowMore" class="container mt-5" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-auto">
            <CallToAction :link="{ name: '', url: appRoutes.projects.path }" class="mx-auto">View more</CallToAction>
          </div>
        </div>
      </div>
    </div>
    <div v-if="scrapbookItems && scrapbookItems.length" class="content-section">
      <div class="container" data-aos="fade-up">
        <HeadingBlock tag="h2" :alignment="'center'" :container-size="'sm'">
          <template #tagline>Scrapbook</template>
          <template #title>I Also Draw, Sometimes</template>
        </HeadingBlock>
      </div>
      <div class="container container-slim">
        <BoxCollection :items="scrapbookItems" />
      </div>
      <div v-if="scrapbookShowMore" class="container mt-5" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-auto">
            <CallToAction :link="{ name: '', url: appRoutes.scrapbook.path }" class="mx-auto">View more</CallToAction>
          </div>
        </div>
      </div>
    </div>
    <Connect />
  </div>
</template>

<script setup lang="ts">
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";
  import { type Project, type BaseCard, type Scrapbook, Tags } from "@/types";

  const { get: getProjects } = useProjects();

  const tags = ref<string[]>(Object.values(Tags));

  const projectItems = ref<Project[]>([]);

  const projectCards = computed<BaseCard[]>(() => {
    return projectItems.value.map((x) => ({
      type: x.type,
      title: x.title,
      summary: x.summary,
      tags: x.tags,
      image: x.tileImage,
      url: `${appRoutes.projects.path}/${x.slug}`,
    }));
  });

  const projectsShowMore = computed(() => {
    if (!projectsTotal || !projectItems.value.length) return false;
    return projectItems.value.length < projectsTotal;
  });

  let { success: projectsSuccess, data: projectsData, total: projectsTotal } = await getProjects();

  if (projectsSuccess && projectsData) {
    projectItems.value = projectsData;
  }

  const { get: getScrapbook } = useScrapbook();
  const scrapbookItems = ref<Scrapbook[]>([]);
  const scrapbookShowMore = computed(() => {
    if (!scrapbookTotal || !scrapbookItems.value.length) return false;
    return scrapbookItems.value.length < scrapbookTotal;
  });

  const { success: scrapbookSuccess, data: scrapbookData, total: scrapbookTotal } = await getScrapbook(6);

  if (scrapbookSuccess && scrapbookData) {
    scrapbookItems.value = scrapbookData;
  }

  useHead({
    title: getPageTitle(),
    meta: [
      {
        name: "description",
        content: "David Holt is a London-based web developer with over 10 years of experience designing and building digital solutions.",
      },
    ],
  });
</script>

<style scoped></style>
