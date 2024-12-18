<script lang="ts">
import head from "lodash.head";

console.log(head.name);
</script>

<template>
  <div>
    <slot />
    <div>lodash.head</div>
    <div>this is test layout</div>
  </div>
</template>
