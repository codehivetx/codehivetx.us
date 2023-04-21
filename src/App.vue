<script setup lang="ts">
import About from './pages/About.vue';
import Bees from './pages/Bees.vue';
import Contact from './pages/Contact.vue';
import Index from './pages/Index.vue';
import PrivacyAgreement from './pages/PrivacyAgreement.vue';
// import { defineComponent } from 'vue';
</script>

<template>
  <div>
    <h4><i>Pardon our dust.. upgrade to Vue3 in progress.</i></h4>
    <center>
      <a href="/"><img alt="[Code Hive Tx, LLC Logo]" src="./assets/codehivetx.png" height="50"/></a>
    </center>
  <!-- <a-carousel > -->
    <Index/>
    <hr/>
    <a name="about" />
    <About/>
    <hr/>
    <Contact/>
    <hr/>
    <a name="bees" />
    <Bees/>
    <hr/>
    <PrivacyAgreement/>
    <hr/>
    © 2021—{{ thisyear }} Code Hive Tx, LLC • <a href="https://github.com/codehivetx/codehivetx.us">Fork me on GitHub!</a>
    • Social:         <code>@codehivetx</code> on <a href="https://twitter.com/codehivetx">Twitter</a> | <a href="https://github.com/codehivetx">GitHub</a>
  <!-- </a-carousel> -->
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
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
