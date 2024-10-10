export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "/",
    },
  },
  app: {
    baseURL: process.env.BASE_URL || "/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: `${process.env.BASE_URL || "/"}icons/favicon.ico` },
        { rel: "apple-touch-icon", sizes: "180x180", href: `${process.env.BASE_URL || "/"}icons/apple-touch-icon.png` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${process.env.BASE_URL || "/"}icons/favicon-32x32.png` },
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${process.env.BASE_URL || "/"}icons/favicon-16x16.png` },
        { rel: "manifest", href: `${process.env.BASE_URL || "/"}api/webmanifest` },
      ],
      meta: [{ name: "theme-color", content: "#03D1C5" }],
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "nuxt-aos"],
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
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    //anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    // Adding console log when AOS initializes
    init: () => {
      console.log("AOS has been initialized");
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
