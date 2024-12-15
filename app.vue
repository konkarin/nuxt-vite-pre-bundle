<script setup lang="ts">
import defaults from "lodash.defaults";

console.log("setup app.vue");

console.log(defaults({}));
</script>

<template>
  <div>
    <nuxt-link to="/">index</nuxt-link> |
    <nuxt-link to="/prefetch">prefetch</nuxt-link> |
    <nuxt-link to="/not-prefetch1" no-prefetch>not-prefetch1</nuxt-link> |
    <button @click="useRouter().push('/not-prefetch2')">not-prefetch2</button> |
    <nuxt-link to="/dynamic-import">dynamic-import</nuxt-link> |
    <nuxt-link to="/auto-imports">auto-imports</nuxt-link> |
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
