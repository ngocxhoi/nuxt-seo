// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/devtools", "@pinia/nuxt", "nuxt-swiper"],
  devtools: { enabled: true },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "/public/css/font-responsive.css",
    "/public/css/var.css",
    "~/assets/style/main.scss",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
