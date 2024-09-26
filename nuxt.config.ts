import { getBaseUrl } from "./utils/helpers";

const baseURL = getBaseUrl();

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  app: {
    baseURL: baseURL,
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: `${baseURL}icons/favicon.ico` },
        { rel: "apple-touch-icon", sizes: "180x180", href: `${baseURL}icons/apple-touch-icon.png` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${baseURL}icons/favicon-32x32.png` },
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${baseURL}icons/favicon-16x16.png` },
        { rel: "manifest", href: `${baseURL}site.webmanifest` },
      ],
      meta: [{ name: "theme-color", content: "#03D1C5" }],
    },
  },
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
  nitro: {
    preset: "github-pages",
  },
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
