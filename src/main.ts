// import Antd from 'ant-design-vue';
import VueGtag from "vue-gtag-next";
import { trackRouter } from "vue-gtag-next";

// pages
import App from './App.vue';
import About from './pages/About.vue';
import Bees from './pages/Bees.vue';
import Contact from './pages/Contact.vue';
import Index from './pages/Index.vue';
import PrivacyAgreement from './pages/PrivacyAgreement.vue';
import NotFound from './pages/NotFound.vue';

import 'highlight.js/styles/github.css'
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import hljsVuePlugin from "@highlightjs/vue-plugin";


import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// import 'ant-design-vue/dist/antd.css';
import './style.css'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/bees',
        component: Bees,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/privacy',
        component: PrivacyAgreement,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// install gtag on the router
trackRouter(router);

const app = createApp(App);

app.use(router);
// app.use(Antd);
hljs.registerLanguage('json', json);

app.use(hljsVuePlugin)
app.use(VueGtag, {
    property: {
        id: "G-QHK7PH5P59",
        params: {
            anonymize_ip: true,
            send_page_view: false,
        }
    }
});

app.mount('#app');
