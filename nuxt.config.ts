// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: false,
  vite: {
    optimizeDeps: {
      entries: [
        // all dependencies crawled before open localhost
        // "pages/**/*.vue",
        // "layouts/**/*.vue",
        // "components/**/*.vue",
        //
        // or
        // "**/*.vue",
      ],
    },
  },
});
