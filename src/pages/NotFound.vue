<template>
      <h1>404 — can’t find that</h1>

      <p>
        We couldnt’t find the page you navigated to, something ending in {{  $route.params.pathMatch }}
      </p>

      <p>
        Let’s get <router-link to="/">back to the Hive</router-link>.
      </p>

  </template>

  <script lang="ts">
  export default {
    props: ['pathMatch'],
    metaInfo: {
      title: '404'
    }
  }
  </script>
