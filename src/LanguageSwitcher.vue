<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const path = window.location.pathname;
  const base = '/';

  if (!['es', 'en'].some((lang) => path.startsWith(base + lang + '/'))) {
    const lang = window.navigator.language || '';
    window.location.href = base + (/es/.test(lang) ? 'es' : 'en') + path.slice(base.length - 1);
  }
});

</script>

<template>
  <span />
  <!-- <ul>
    <li><a href="/en">English</a></li>
    <li><a href="/es">español</a></li>
  </ul> -->
</template>



<style scoped>
</style>

<script lang="ts">
export default {
  computed: {
    thisyear() {
      return new Date().getFullYear();
    }
  }
}
</script>
