// import Antd from 'ant-design-vue';
import VueGtag from "vue-gtag";

// pages
import App from './App.vue';
import About from './pages/About.vue';
import Bees from './pages/Bees.vue';
import Contact from './pages/Contact.vue';
import Index from './pages/Index.vue';
import PrivacyAgreement from './pages/PrivacyAgreement.vue';

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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);
// app.use(Antd);
app.use(VueGtag, {
    config: {
        id: "G-QHK7PH5P59",
        params: {
            anonymize_ip: true,
            send_page_view: false, // while we're not yet a SPA
        }
    }
});


app.mount('#app');
