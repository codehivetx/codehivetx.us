<template>
  <h1>About Code Hive Tx, LLC</h1>
  <p>
    Code Hive Tx, LLC is a small consultancy with a focus on internationalization and
    global enablement. It was established in 2021, but brings many years of expertise to
    bear for your project.
  </p>

  <p>
    We are located in
    <a href="https://www.cityofdrippingsprings.com/welcome-visitors">Dripping Springs</a>,
    Hays County, Texas, USA. About 45 minutes from Austin.
  </p>

  <p>Our slogan <span class="tt">[Code, People, World];</span> represents:</p>

  <highlightjs
    language="json"
    code='{
  "Code": "Artisan crafted software, with an emphasis on careful test-driven design.",

  "People": "Projects that make a difference for real people. Careful discussion to understand your organization’s needs, and the followup to get the job done right."

  "World": "Enabling communications for all of the world’s people."
}'
  />

  <h2>Owner: Steven R. Loomis</h2>

  <img src="../assets/srl.jpg" class="srl" title="Steven R. Loomis" alt="Photo of Steven R. Loomis — wearing a black felt western hat" />

  <p>
    Steven brings more than two decades of experience to Code Hive Tx — innovating and developing processes, tools, and
    organizations critical to modern software globalization.
    </p>

    <p> He was with IBM’s corporate
    globalization group for 22 years. During this time, he worked on translation workflow
    modernization for internal teams, acquisitions, and external clients via the IBM
    Services consulting organization.</p>

    <p>Steven was part of the team which produced and
    maintained the IBM Globalization Pipeline Translation-as-a-service component,
    including work on its open-source SDKs and tools. While at IBM, he participated in the XLIFF-TC.
    </p>

    <p> He assisted with the formation of
    the Common Locale Data Repository (CLDR) project, and served as IBM’s Technical Lead
    for the International Components for Unicode for C/C++ (ICU4C).</p>

  <p>  He continues to work
      on CLDR’s Survey Tool and other tools and processes, work on the updated CLDR Keyboard
      specification, and work in SIL Keyman to implement the same CLDR specification.
    </p>

  <p>
    Steven is the current chair of Unicode’s
    <a href="https://cldr.unicode.org/ddl"
      >CLDR Digitally Disadvantaged Languages Subcommittee</a
    >, as well as vice-chair of Unicode
    <a href="https://www.unicode.org/consortium/techchairs.html"
      >Infrastructure Subcommittee</a
    >.
  </p>
  <p>
  <b class="tt">@srl295</b>:
  <a href="https://srl295.github.io/" target="_blank" rel="noopener">blog</a> |
  <a href="https://github.com/srl295/" target="_blank" rel="noopener">github</a>
</p>

  <h2>Recent Code Hive Tx Portfolio</h2>
  <p>(Partial list)</p>
  <ul>
    <li>
      <a href="https://cldr.unicode.org">CLDR</a> — modernization and tool improvements
    </li>
    <li>
      <a href="https://home.unicode.org/adopt-a-character/about-adopt-a-character/"
        >Unicode AAC Grant</a
      >
      — progessing the
      <a href="https://cldr.unicode.org/index/keyboard-workgroup">LDML Keyboard</a> spec.
    </li>
    <li>
      <a href="https://keyman.com/ldml">Keyman LDML</a> — design and implementation of
      LDML Keyboard support
    </li>
    <li>
      Fintech sector — implementation of a distributed computing system for testing and
      machine learning training. Improvements to automated build system and observability
      through custom Prometheus collectors. General IT support.
    </li>
  </ul>
  <h2>News</h2>
  <p>
    For a recent update, see our
    <a href="https://srl295.github.io/2022/12/26/code-hive-2022/">2022 Year-End Update</a
    >.
  </p>
</template>

<script lang="ts">
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>

<style>
pre > code {
  font-family: "Source Code Pro", "Courier New", Courier, monospace;
  background: inherit !important;
}

.srl {
  height: 15em;
  float: right;
  margin-left: 2em;
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
