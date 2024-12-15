<script setup lang="ts">
const DynamicImport = defineAsyncComponent(
  () => import("../components/dynamicImport.vue")
);
</script>

<template>
  <h1>here is dynamic-import</h1>
  <DynamicImport></DynamicImport>
</template>
