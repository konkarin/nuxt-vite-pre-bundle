<script setup lang="ts">
import defaults from "lodash.defaults";

console.log(defaults);

const DynamicImport = defineAsyncComponent(
  () => import("./components/dynamicImport.vue")
);
</script>

<template>
  <div>
    <h1>app.vue</h1>

    <DynamicImport></DynamicImport>

    <ImportFromApp></ImportFromApp>
  </div>

  <div>
    <h1>links</h1>

    <nuxt-link to="/">index</nuxt-link> |

    <nuxt-link to="/layout">layout</nuxt-link> |

    <nuxt-link to="/prefetch">prefetch</nuxt-link> |

    <nuxt-link to="/no-prefetch1" no-prefetch>no-prefetch1</nuxt-link> |

    <button @click="useRouter().push('/no-prefetch2')">no-prefetch2</button> |

    <nuxt-link to="/auto-imports">auto-imports</nuxt-link> |
  </div>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
