<script lang="ts">
import head from "lodash.head";

console.log(head.name);
</script>

<template>
  <div>
    <slot />
    <h2>this is test layout</h2>
    <div>lodash.head</div>
  </div>
</template>
