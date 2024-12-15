<script lang="ts">
import partition from "lodash.partition";

console.log(partition);
</script>

<template>
  <div>
    <slot />
    <div>this is test layout</div>
    <div>lodash.partition</div>
  </div>
</template>
