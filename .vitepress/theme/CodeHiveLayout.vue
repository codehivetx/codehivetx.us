<!--.vitepress/theme/CodeHiveLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { data as posts } from '../../src/blog.data';
import formatDate from '../../src/formatDate';

const { Layout } = DefaultTheme
const { frontmatter, page, lang } = useData()

</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      My custom sidebar top content
    </template> -->
    <template #layout-bottom>
      <div class="chtx-footer">
        © 2021—{{ thisyear }} Code Hive Tx, LLC • <a href="https://github.com/codehivetx/codehivetx.us">Fork me on GitHub!</a> • <a href="/en/privacy">Privacy</a> •
      Social: <code>@codehivetx</code> on <!-- <a href="https://twitter.com/codehivetx">Twitter</a> | --> <a
        href="https://github.com/codehivetx">GitHub</a>
      </div>
    </template>
    <template #doc-before v-if="frontmatter.date">
      <h1 class="blogtitle">{{ frontmatter.title }}</h1>
      <p class="blogdate">
        <b>Date:</b> {{ formatDate(frontmatter.date)[1] }}
      </p>
    </template>
    <template #doc-after v-if="frontmatter.index">
      <ul>
        <li class="bloglink" v-for="post of posts">
          <a :href="post.url"><h1><b>{{ post.title }}</b></h1></a>
          <h2>{{ post.date[1] }}</h2>
          <p v-if="post.excerpt" v-html="post.excerpt"/>
          <a :href="post.url" v-if="post.excerpt"><i>Read more…</i></a>
        </li>
      </ul>
    </template>
    <template #doc-after v-if="!frontmatter.index">
      <MissionStatement :lang="lang" />
    </template>
  </Layout>
</template>
<style scoped>


.bloglink i {
  font-weight: bolder;
}

li.bloglink {
  list-style-type: circle;
  margin-left: 3em;
  padding-bottom: 1em;
}

li.bloglink h1 {
  font-size: x-large;
}

li.bloglink a:hover {
  color: goldenrod;
}

h1.blogtitle {
  font-size: xx-large;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1em;
}

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
    },
    slug() {
      return "e";
      // && page.filePath.split('/')[1].split('.')[0] == 'about'
      // return page.filePath.split('/')[1].split('.')[0];
    },
  },
}
</script>
