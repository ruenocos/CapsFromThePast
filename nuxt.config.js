export default {
  router: {
    base: "/CapsFromThePast/"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "capsfromthepast",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/google-fonts"
  ],
  svgSprite: {},

  googleFonts: {
    families: {
      Arvo: true,
      "Noto+Sans": true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: { host: "0.0.0.0", port: 8080 }
};
