// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      // Choose the font families you need
      Roboto: [300, 400, 700],
      "Roboto+Mono": [300, 400, 700],
    },
    display: "swap", // Ensures fonts render with minimal layout shift
    prefetch: true, // Prefetches the font
    preload: true, // Preloads the font
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
