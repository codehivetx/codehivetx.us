// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// import LanguageSwitcher from '../../src/LanguageSwitcher.vue';
import CodeHiveLayout from './CodeHiveLayout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: CodeHiveLayout,
  enhanceApp({ app, router, siteData }) {
    // app.component('LanguageSwitcher', LanguageSwitcher);
  },
} satisfies Theme
