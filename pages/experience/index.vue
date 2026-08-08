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
        <p>
          Full-stack developer with over 13 years of experience designing and building modern web applications, from CMS-powered platforms and booking flows to custom APIs and accessible user
          interfaces. I care about writing code that lasts, works hard and stays easy to work with.
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
              <div class="order-0 order-lg-1"><span class="font-mono small">Apr 2026 ~ Present</span></div>
              <div class="order-1 order-lg-0">
                <h3 class="h4">Codehouse</h3>
                <p class="text-primary"><strong>Web Developer</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>
                Working within an agency development team on the modernisation of a large client web platform, migrating an existing Sitecore server-rendered .NET / MVC application to a modern
                headless architecture using React and Next.js.
              </p>
              <ul>
                <li class="mb-3">Developed and migrated functionality and content from an existing C# / MVC application to a React and Next.js headless implementation.</li>
                <li class="mb-3">Built reusable React components integrated with a headless CMS using Sitecore JSS.</li>
                <li class="mb-3">Worked with GraphQL and CMS APIs to retrieve and render structured content.</li>
                <li class="mb-3">Developed and integrated REST API endpoints supporting functionality within the headless application.</li>
              </ul>
            </div>
          </div>
          <div class="resume-list-item">
            <div class="d-flex flex-column flex-lg-row justify-content-lg-between mb-4">
              <div class="order-0 order-lg-1"><span class="font-mono small">Sep 2018 ~ Apr 2026</span></div>
              <div class="order-1 order-lg-0">
                <h3 class="h4">Newmarket Holidays</h3>
                <p class="text-primary"><strong>Web Developer</strong></p>
              </div>
            </div>
            <div class="rte-content">
              <p>
                Full-stack developer responsible for the development and evolution of the company's customer-facing web platform and CMS, working across front-end, back-end, APIs, data and cloud
                services.
              </p>
              <ul>
                <li class="mb-3">
                  Managed and developed the full-stack customer-facing web platform, working across C# / ASP.NET MVC, Umbraco CMS, front-end development, databases, APIs, data layers and third-party
                  integrations.
                </li>
                <li class="mb-3">
                  Architected and delivered end-to-end features including customer experience tooling, back-office management, reporting dashboards and enhancements to the application's booking flow.
                </li>
                <li class="mb-3">Helped modernise the platform through the adoption of headless CMS architecture, .NET and Vue / Nuxt.</li>
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
                <p>Front-end developer and lead designer responsible for the design and implementation of inhouse and client-facing web applications.</p>
                <ul>
                  <li class="mb-3">Designed and developed responsive web interfaces using HTML, CSS, JavaScript and jQuery.</li>
                  <li class="mb-3">Produced UI/UX designs and wireframes, working closely with back-end developers to deliver complete web applications.</li>
                  <li class="mb-3">Managed visual design and branding across the company's digital products.</li>
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
    Tags.SITECORE_CMS,
    Tags.AZURE,
    Tags.NUXT3,
    Tags.NEXT,
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
