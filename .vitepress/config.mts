import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'script',
      {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-QHK7PH5P59',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-QHK7PH5P59');",
    ],
  ],
  title: "Code Hive Tx, LLC",
  description: "Code Hive Tx, LLC is a small software consultancy located in Dripping Springs, Texas, USA.",
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'About', link: '/en/about', activeMatch: '\/.*\/about.*' },
      { text: 'Blog', link: '/en/blog', activeMatch: '\/.*\/(blog|posts).*' },
      { text: 'Contact', link: '/en/contact' },
      { text: 'Bees', link: '/en/bees' },
      { text: 'Privacy', link: '/en/privacy' },
    ],
    search: {
      provider: 'local'
    },

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
