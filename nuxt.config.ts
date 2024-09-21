// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: [300, 400, 700],
      "Roboto+Mono": [300, 400, 700],
    },
    display: "swap",
    prefetch: true,
    preload: true,
  },
  image: {
    screens: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
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
});
