<template>
  <Layout>
    <h1>About Code Hive Tx, LLC</h1>
    <p>Code Hive Tx, LLC is a small consultancy with a focus on
      internationalization and global enablement. It was established in 2021,
      but brings many years of expertise to bear for your project.
    </p>

    <p>
      We are located in
      <a href="https://www.cityofdrippingsprings.com/welcome-visitors">Dripping Springs</a>, Hays County, Texas, USA.
      About 45 minutes from Austin.
    </p>

    <p>
      Our slogan <tt>[Code, People, World];</tt> represents:
    </p>

<pre v-highlightjs><code class="json">
{
  "Code": "Artisan crafted software, with an emphasis on careful test-driven design.",

  "People": "Projects that make a difference for real people. Careful discussion to understand your organization’s needs, and the followup to get the job done right."

  "World": "Enabling communications for all of the world’s people."
}</code></pre>

    <p class="home-links">
      Owner: <a href="https://srl295.github.io/" target="_blank" rel="noopener">@srl295</a>
    </p>

    <h2>Recent Portfolio</h2>
    <p>(Partial list)</p>
    <ul>
      <li><a href="https://cldr.unicode.org">CLDR</a> — modernization and tool improvements</li>
      <li><a href="https://home.unicode.org/adopt-a-character/about-adopt-a-character/">Unicode AAC Grant</a> — progessing the <a href="https://cldr.unicode.org/index/keyboard-workgroup">LDML Keyboard</a> spec.</li>
      <li><a href="https://keyman.com/ldml">Keyman LDML</a> — design and implementation of LDML Keyboard support</li>
      <li>Fintech sector — implementation of a distributed computing system for testing and machine learning training. Improvements to automated build system and observability through custom Prometheus collectors.  General IT support.</li>
    </ul>
    <h2>News</h2>
    <p>
      For a recent update, see our <a href="https://srl295.github.io/2022/12/26/code-hive-2022/">2022 Year-End Update</a>.
    </p>

  </Layout>
</template>

<script lang="ts">
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
pre > code {
  font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
  background: inherit !important;
}

.hljs-attr {
  font-weight: 600;
  color: darkslategray;
}

.hljs-string {
  color: darkslateblue;
  white-space: pre-wrap;
}

.hljs-punctuation {
  color: slategray;
}

</style>
