// import { createApp } from 'vue'
// import { createRouter, createWebHashHistory } from 'vue-router';
// import Antd from 'ant-design-vue';
// import VueGtag from "vue-gtag";

// // pages
import About from './pages/About.vue';
// import Bees from './pages/Bees.vue';
// import Contact from './pages/Contact.vue';
import Index from './pages/Index.vue';
// import PrivacyAgreement from './pages/PrivacyAgreement.vue';

import {createApp, h} from 'vue';
import { createRouter, createWebHashHistory} from 'vue-router';
/*
//TODO: sets body wid/hei = 100%
// import 'ant-design-vue/dist/antd.css';
// import './style.css'
// import App from './App.vue'

const routes = [
    {
        path: '/',
        // component: Index,
        component: { template: '<div>Hello</div>'},
    },
    // {
    //     path: '/about',
    //     component: About,
    // },
    // {
    //     path: '/bees',
    //     component: Bees,
    // },
    // {
    //     path: '/contact',
    //     component: Contact,
    // },
    // {
    //     path: '/privacy-agreement',
    //     component: PrivacyAgreement,
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});



createApp({}) // TODO: no App.vue
    .use(router)
    // .use(Antd)
    // .use(VueGtag, {
    //     config: {
    //         id: "G-QHK7PH5P59",
    //         params: {
    //             anonymize_ip: true,
    //             send_page_view: true, // while we're not yet a SPA
    //         }
    //     }
    // })
    .mount('#app');

    */

    // 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp({
    render: ()=>h(Index)
});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!

