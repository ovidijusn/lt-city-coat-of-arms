import { createApp } from 'vue'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

import './assets/style.css';
import App from './App.vue';

const vuetify = createVuetify({})

createApp(App)
    .use(vuetify)
    .mount('#app')
