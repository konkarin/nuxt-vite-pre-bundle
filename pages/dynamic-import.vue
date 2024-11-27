<script setup lang="ts">
const comp = defineAsyncComponent(() => import("../components/comp.vue"));
</script>

<template>
  <h1>here is not dynamic-import</h1>
  <comp></comp>
</template>
