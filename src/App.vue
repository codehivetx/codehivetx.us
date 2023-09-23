<script setup lang="ts">
</script>

<template>
  <div>
    <center>
      <router-link to="/"><img class="logo" alt="[Code Hive Tx, LLC Logo]" src="./assets/codehivetx.png" height="50" /></router-link>
      <br />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/bees">Bees</router-link> |
      <router-link to="/privacy">Privacy</router-link>
    </center>
    <router-view></router-view>
    <hr />
    © 2021—{{ thisyear }} Code Hive Tx, LLC • <a href="https://github.com/codehivetx/codehivetx.us">Fork me on GitHub!</a>
    • Social: <code>@codehivetx</code> on <a href="https://twitter.com/codehivetx">Twitter</a> | <a
      href="https://github.com/codehivetx">GitHub</a>
  </div>
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
