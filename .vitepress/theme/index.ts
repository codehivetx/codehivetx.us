// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MissionStatement from './MissionStatement.vue';
import CodeHiveLayout from './CodeHiveLayout.vue';
import './style.css';
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/900.css";
import { vueVimeoPlayer } from 'vue-vimeo-player'


export default {
  extends: DefaultTheme,
  Layout: CodeHiveLayout,
  enhanceApp({ app, router, siteData }) {
  app.component('MissionStatement', MissionStatement);
  app.component('vimeo-player', vueVimeoPlayer);
  },
} satisfies Theme
