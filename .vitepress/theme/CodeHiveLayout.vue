<!--.vitepress/theme/CodeHiveLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      My custom sidebar top content
    </template> -->
    <template #layout-bottom>
      <div class="chtx-footer">
        © 2021—{{ thisyear }} Code Hive Tx, LLC • <a href="https://github.com/codehivetx/codehivetx.us">Fork me on GitHub!</a>
      • Social: <code>@codehivetx</code> on <a href="https://twitter.com/codehivetx">Twitter</a> | <a
        href="https://github.com/codehivetx">GitHub</a>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #302705aa);
}
a:hover {
  filter: drop-shadow(0 0 1em #302705aa);
}

.chtx-footer {
  padding: 0.25em;
}

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
