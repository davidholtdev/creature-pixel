// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  // app: {
  //   pageTransition: {
  //     name: "page",
  //     mode: "out-in",
  //   },
  //   layoutTransition: {
  //     name: "page",
  //     mode: "out-in",
  //   },
  // },
  // build: {
  //   loaders: {
  //     scss: {
  //       implementation: require("sass"),
  //     },
  //   },
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["mixed-decls"],
        },
      },
    },
  },

  modules: ["@nuxt/image"],
});