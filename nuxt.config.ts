// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: false,
  ssr: false,
  vite: {
    optimizeDeps: {
      entries: [
        // all dependencies crawled before open localhost
        // "pages/**/*.vue",
        //
        // only components dependencies crawled
        // "components/**/*.vue",
      ],
    },
  },
});
