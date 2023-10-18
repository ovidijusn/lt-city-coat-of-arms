import { createApp } from 'vue'
import "primeflex/primeflex.css";
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import PrimeVue from 'primevue/config';
import './assets/style.css'
import App from './App.vue'

createApp(App)
    .use(PrimeVue)
    .mount('#app')
