import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import App from './App.vue'

createApp(App)
    .use(PrimeVue)
    .mount('#app')
