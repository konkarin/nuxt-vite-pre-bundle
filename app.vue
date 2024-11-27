<script setup lang="ts">
console.log("setup app.vue");
</script>

<template>
  <div>
    <nuxt-link to="/">index</nuxt-link> |
    <nuxt-link to="/crawl">crawl</nuxt-link> |
    <button @click="useRouter().push('/not-crawl')">not-crawl</button> |
    <nuxt-link to="/dynamic-import">dynamic-import</nuxt-link> |
  </div>
  <NuxtPage />
</template>
