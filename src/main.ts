import { createApp } from 'vue'
import Antd from 'ant-design-vue';
//TODO: sets body wid/hei = 100%
// import 'ant-design-vue/dist/antd.css';
import './style.css'
import App from './App.vue'

createApp(App)
    .use(Antd)
    .mount('#app');
