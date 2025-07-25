<template>
  <div>
    <div class="content-section">
      <div class="container container-slim">
        <div class="row">
          <div class="col">
            <HeadingBlock tag="h1" title-size="xl" :container-size="'sm'" class="mb-3">
              <template #tagline>Experience</template>
              <template #title>David Holt</template>
            </HeadingBlock>
          </div>
        </div>
        <p class="lead"><strong>Full-stack developer with a design background, focused on building scalable, maintainable systems that perform well and feel great to use.</strong></p>
        <p>
          I design and build modern web applications — from CMS-powered platforms and booking flows to custom APIs and accessible user interfaces. With over a decade of experience, I care about
          writing code that lasts, works hard, and stays easy to work with.
        </p>
        <p class="font-mono mt-5 mb-2 h6">Core Technologies:</p>
        <ul v-if="tags && tags.length" class="list-inline font-mono small">
          <li v-for="(tag, index) in tags" class="list-inline-item me-2">{{ tag }}<span v-if="index !== tags.length - 1">,</span></li>
        </ul>
        <div class="accolades mt-5">
          <div>
            <NuxtImg :src="'/images/accolade-umbraco_expert_certification.png'" :width="120" format="webp" :alt="'Umbraco Expert Certification'" densities="x1 x2"></NuxtImg>
          </div>
          <div>
            <NuxtImg :src="'/images/accolade-mastering-nuxt.png'" :width="120" format="webp" :alt="'Mastering Nuxt Certification'" densities="x1 x2"></NuxtImg>
          </div>
        </div>

        <hr class="my-5" />
      </div>
      <div class="container container-slim">
        <HeadingBlock tag="h2" title-size="sm" :container-size="'sm'">
          <template #title>Professional</template>
        </HeadingBlock>
        <div class="resume-list">
          <div class="resume-list-item">
            <div class="d-flex flex-column flex-lg-row justify-content-lg-between mb-4">
              <div class="order-0 order-lg-1"><span class="font-mono small">Sep 2018 ~ Present</span></div>
              <div class="order-1 order-lg-0">
                <h3 class="h4">Newmarket Holidays</h3>
                <p class="text-primary"><strong>Web Developer</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>
                Worked across two generations of the company’s digital platform — first maintaining and extending a legacy Umbraco 7 MVC site, and now contributing to a modern headless setup built on
                Umbraco 10, Nuxt, and .NET Core.
              </p>
              <ul>
                <li class="mb-3">Developed features across the stack: front-end components, CMS workflows, APIs, and data handling.</li>
                <li class="mb-3">
                  Delivered end-to-end solutions including a custom Net Promoter Score (NPS) system and a customer experience platform — both built with Azure Blob Storage and Entity Framework,
                  featuring back-office management and reporting dashboards.
                </li>
                <li class="mb-3">
                  Led technical enhancements across performance, accessibility, analytics, and automation — including page speed optimisation, Google Analytics data-layer integration, cookie consent
                  and CMP implementation, and automated content imports from third-party APIs and partner feeds.
                </li>
                <li class="mb-3">
                  Worked within a modern n-tier architecture using CQRS (with MediatR), Redis caching, and Azure Storage Queues to support scalable data flow and background processing.
                </li>
                <li class="mb-3">Collaborated closely with business stakeholders, designers, and QA to align technical solutions with commercial goals.</li>
              </ul>
            </div>
          </div>
          <div class="resume-list-item">
            <div class="resume-item">
              <div class="d-flex flex-column flex-lg-row justify-content-lg-between mb-4">
                <div class="order-0 order-lg-1"><span class="font-mono small">Jul 2013 ~ Aug 2018</span></div>
                <div class="order-1 order-lg-0">
                  <h3 class="h4">Secure Cloudlink</h3>
                  <p class="text-primary"><strong>Front-end Developer / Designer</strong></p>
                </div>
              </div>
              <div class="rte-content">
                <p>
                  Worked as a front-end developer and sole designer, leading the design and implementation of web applications across multiple projects — blending visual design with hands-on
                  development to deliver clean, consistent user experiences.
                </p>
                <ul>
                  <li class="mb-3">Designed and wireframed responsive UI/UX workflows for internal tools and client-facing platforms — covering both mobile and desktop experiences.</li>
                  <li class="mb-3">Built and maintained front-end architecture using HTML, CSS, JavaScript, and jQuery — ensuring performance, accessibility, and maintainability.</li>
                  <li class="mb-3">Partnered with back-end engineers to integrate UI components into fully functional web applications, ensuring consistency across systems.</li>
                  <li class="mb-3">Led brand and design efforts across internal projects — establishing visual guidelines and creating reusable asset libraries.</li>
                  <li class="mb-3">Produced a wide range of design collateral, from digital graphics and UI assets to marketing materials, motion graphics, and print-ready assets.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-5" />
        <HeadingBlock tag="h2" title-size="sm" :container-size="'sm'">
          <template #title>Education</template>
        </HeadingBlock>
        <div class="resume-list">
          <div class="resume-list-item">
            <div class="resume-item">
              <div class="d-flex flex-column flex-lg-row justify-content-lg-between mb-4">
                <div class="order-0 order-lg-1"><span class="font-mono small">Sep 2008 ~ Jul 2011</span></div>
                <div class="order-1 order-lg-0">
                  <h3 class="h4">Solent University</h3>
                  <p class="text-primary"><strong>BA Hons Degree - Graphic Design</strong></p>
                </div>
              </div>
              <div class="rte-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Connect tag="h2" />
  </div>
</template>

<script setup lang="ts">
  import { Tags } from "~/types";
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";

  const tags = ref<Tags[]>([
    Tags.NET_CORE,
    Tags.C_SHARP_MVC,
    Tags.UMBRACO_CMS,
    Tags.AZURE,
    Tags.NUXT3,
    Tags.TYPESCRIPT,
    Tags.JAVASCRIPT,
    Tags.ANGULAR_JS,
    Tags.SCSS_CSS,
    Tags.HTML5,
    Tags.BOOTSTRAP,
    Tags.ALGOLIA,
    Tags.ADOBE_SUITE,
  ]);

  useHead({
    title: getPageTitle(appRoutes.experience.label),
    meta: [
      {
        name: "description",
        content: "Professional experience and résumé of David Holt, web developer, designer and UI/UX engineer.",
      },
    ],
  });
</script>

<style scoped></style>
