import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import VueGtag from "vue-gtag";

//TODO: sets body wid/hei = 100%
// import 'ant-design-vue/dist/antd.css';
import './style.css'
import App from './App.vue'

createApp(App)
    .use(Antd)
    .use(VueGtag, {
        config: {
            id: "G-QHK7PH5P59",
            params: {
                anonymize_ip: true,
                send_page_view: true, // while we're not yet a SPA
            }
        }
    })
    .mount('#app');
