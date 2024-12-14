<script setup lang="ts">
const comp = defineAsyncComponent(() => import("../components/comp.vue"));
</script>

<template>
  <h1>here is dynamic-import</h1>
  <comp></comp>
</template>
