// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MissionStatement from './MissionStatement.vue';
import CodeHiveLayout from './CodeHiveLayout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: CodeHiveLayout,
  enhanceApp({ app, router, siteData }) {
  app.component('MissionStatement', MissionStatement);
  },
} satisfies Theme
