import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Hive Tx, LLC",
  description: "Code Hive Tx, LLC is a small software consultancy located in Dripping Springs, Texas, USA.",
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
      { text: 'About', link: './about' },
      { text: 'Contact', link: './contact' },
      { text: 'Bees', link: './bees' },
      { text: 'Privacy', link: './privacy' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codehivetx/codehivetx.us' }
    ],

  },
  locales: {
    // todo: make this a function!
    en: {
      label: 'English',
      lang: 'en',
      link: '/en',
    },
    es: {
      label: 'español',
      lang: 'es', // optional, will be added  as `lang` attribute on `html` tag
      link: '/es' // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    }
  },
})