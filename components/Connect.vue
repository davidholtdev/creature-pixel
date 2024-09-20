<template>
  <div class="content-section">
    <div class="container container-slim">
      <HeadingBlock tag="h1" alignment="center" container-size="sm">
        <template #tagline>Contact</template>
        <template #title>Want to Connect</template>
        <template #description>Got a question or proposal, or just want to say hello? I’ll try my best to get back to you!</template>
      </HeadingBlock>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <CallToAction :link="{ name: '', url: 'https://www.linkedin.com/in/davidholtdev/', target: '_blank' }" class="mx-auto">Connect</CallToAction>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
