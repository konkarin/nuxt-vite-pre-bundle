<script setup lang="ts">
import after from "lodash.after";

console.log(after.name);

const compact = await import("lodash.compact");
console.log(compact.default.name);

const DynamicImport = defineAsyncComponent(
  () => import("./components/dynamicImport.vue")
);
</script>

<template>
  <div>
    <h1>app.vue</h1>
    <div>lodash.after</div>

    <ImportFromApp></ImportFromApp>

    <DynamicImport></DynamicImport>
  </div>

  <div>
    <h1>links</h1>

    <button @click="useRouter().push('/')">index</button> |

    <nuxt-link to="/prefetch">prefetch</nuxt-link> |

    <nuxt-link to="/no-prefetch" no-prefetch>no-prefetch</nuxt-link> |

    <nuxt-link to="/layout">layout</nuxt-link> |
  </div>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
