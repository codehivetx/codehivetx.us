<template>
  <div class="layout">
    <header class="header">
      <a href="/"><img alt="[Code Hive Tx, LLC Logo]" src="/codehivetx.png" height="50"/></a>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/bees/">Bees</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
      <tt>[Code, People, World];</tt>
    </header>
    <slot/>
    <hr/>
    © 2021—2022 Code Hive Tx, LLC • <a href="https://github.com/codehivetx/codehivetx.us">Fork me on GitHub!</a>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-image: url('/hive.png')
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

h1,h2,h3,h4,h5 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>
