import 'vuetify/styles';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/style.css';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const vuetify = createVuetify({});

createApp(App)
    .use(pinia)
    .use(vuetify)
    .mount('#app');
