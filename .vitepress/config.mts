import { defineConfig, HeadConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'


const title =  "Code Hive Tx, LLC";
const description = "Code Hive Tx, LLC is a small software consultancy located in Dripping Springs, Texas, USA.";
const thisYear = new Date().getFullYear();
const RSS: RSSOptions = {
  title,
  description,
  baseUrl: 'https://codehivetx.us',
  copyright: `Copyright (c) 2021-${thisYear}, Code Hive Tx, LLC`,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    if (pageData?.frontmatter?.title) {
      head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }]);
    }
    if (pageData?.frontmatter?.description) {
      head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }]);
    }

    // unconditionally add the RSS feed link
    head.push(['link', {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'RSS',
      href: 'https://codehivetx.us/feed.rss',
    }]);
    return head;
  },
  vite: {
    plugins: [RssPlugin(RSS)],
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
    attrs: { disable: true },
  },
  head: [
    // thx: https://favicon.io
    [
      'link',
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      'link',
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      'link',
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      'link',
      {
        rel: "manifest",
        href: "/site.webmanifest",
      }
    ],
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
  title,
  description,
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'About', link: '/en/about', activeMatch: '\/.*\/(about|resume).*' },
      { text: 'Blog', link: '/en/blog', activeMatch: '\/.*\/(blog|posts).*' },
      { text: 'Contact', link: '/en/contact' },
      { text: 'Bees', link: '/en/bees', activeMatch: '\/.*\/(bees).*' },
    ],
    // search: {
    //   provider: 'local'
    // },

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
      link: '/es', // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
      // title: 'Code Hive Tx, LLC', // same
      themeConfig: {
        nav: [
          { text: 'Principal', link: '/es/' },
          { text: 'Acerca', link: '/es/about', activeMatch: '\/.*\/(about|resume).*' },
          { text: 'Blog', link: '/es/blog', activeMatch: '\/.*\/(blog|posts).*' },
          { text: 'Contacto', link: '/es/contact' },
          { text: 'Abejas', link: '/es/bees', activeMatch: '\/.*\/(bees).*' },
        ],
      }
    },
  },
})
