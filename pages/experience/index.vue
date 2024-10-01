<template>
  <div>
    <div class="content-section">
      <div class="container container-slim">
        <div class="row">
          <div class="col order-1 order-sm-0">
            <HeadingBlock tag="h1" title-size="xl" :container-size="'sm'">
              <template #tagline>Experience</template>
              <template #title>David Holt</template>
              <template #description>Web developer, designer and UI/UX engineer</template>
            </HeadingBlock>
          </div>
          <div class="col-sm-auto order-0 order-sm-1">
            <div class="box box--profile box--profile-small">
              <div class="box-image"></div>
            </div>
          </div>
        </div>
        <p class="lead">A London-based web developer with over 10 years of experience designing and building digital solutions.</p>
        <p class="font-mono mt-5 mb-2 h6">Core Technologies:</p>
        <p class="small font-mono">Umbraco CMS, C# ASP.NET MVC, Entity Framework, Azure, NuxtJs, AngularJs, JavaScript / jQuery, CSS / SCSS, HTML5, Adobe Creative Suite, Affinity Suite</p>
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
                I have been with the company for several years, primarily serving as a full-stack developer. In this role, I have been responsible for the company's customer-facing website and its
                integrated CMS system. My responsibilities have encompassed maintaining the entire codebase, architecting and implementing end-to-end solutions for new features, overseeing databases,
                API integrations, automation, and more.
              </p>
              <ul>
                <li class="mb-3">Managed the full end-to-end codebase, including front-end, back-end, database management, APIs, and data layers.</li>
                <li class="mb-3">Maintained and developed the DevOps workflow, leveraging platforms such as Azure, AWS, and Cloudflare</li>
                <li class="mb-3">Architected, designed, and implemented a comprehensive NPS solution, featuring back-office management and reporting dashboards.</li>
                <li class="mb-3">Developed a full end-to-end customer experience solution, integrating custom Azure Blob Storage, back-office management, and reporting dashboards.</li>
                <li class="mb-3">Integrated several API-driven workflows to enhance automation and data management.</li>
                <li class="mb-3">Incorporated new workflows into the system's SPA booking journey, including UI/UX workflows, data layer enhancements, and API integrations.</li>
                <li class="mb-3">Designed and implemented a full end-to-end blog website within the existing CMS.</li>
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
  import { getPageTitle } from "@/utils/helpers";
  import { appRoutes } from "@/utils/constants.js";

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
