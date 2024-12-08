<template>
  <div>
    <div class="content-section">
      <div class="container container-slim">
        <div class="row">
          <div class="col">
            <HeadingBlock tag="h1" title-size="xl" :container-size="'sm'">
              <template #tagline>Experience</template>
              <template #title>David Holt</template>
              <template #description>Web developer, designer and UI/UX engineer</template>
            </HeadingBlock>
          </div>
        </div>
        <p class="lead">A London-based web developer with over 10 years of experience designing and building digital solutions.</p>
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
                I joined Newmarket Holidays in 2018 and have seen the company grow and change, much like my own role here. Over the years, I’ve been part of significant projects, including solely
                managing the previous Umbraco website and now working as part of a team on a modern headless setup with Umbraco backend and Nuxt.js frontend.
              </p>
              <ul>
                <li class="mb-3">
                  Full-Stack Development: Managed the complete codebase, encompassing front-end, back-end, database management, APIs, and data layers, ensuring seamless functionality across the
                  system.
                </li>
                <li class="mb-3">
                  DevOps and Cloud Infrastructure: Maintained and developed the DevOps workflow, leveraging platforms like Azure, AWS, and Cloudflare to enhance deployment and system reliability.
                </li>
                <li class="mb-3">
                  Customer Experience Solutions: Designed and implemented end-to-end solutions, including a comprehensive NPS system and a customer experience platform, both featuring custom Azure
                  Blob Storage integration, back-office management, and reporting dashboards.
                </li>
                <li class="mb-3">Collaborating with stakeholders to align technical solutions with business objectives.</li>
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
                <p>I worked as a front-end developer and sole designer, responsible for designing, wireframing, and implementing the complete user experience for several innovative projects.</p>
                <ul>
                  <li class="mb-3">Designed and wireframed UI/UX workflows for all in-house and client web-based projects, including both mobile and desktop applications.</li>
                  <li class="mb-3">Developed and maintained front-end code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery.</li>
                  <li class="mb-3">Worked closely with lead back-end engineer on all in-house projects to ensure fluid user experiences across all web applications.</li>
                  <li class="mb-3">Managed company branding guidelines across all in-house development projects.</li>
                  <li class="mb-3">Designed and managed all in-house marketing material, covering everything from graphics, web assets, and animations to business cards and letterheads.</li>
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

  const tags = ref<string[]>(Object.values(Tags));

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
