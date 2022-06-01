import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import Vue from 'vue'
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';

// Vue.component('v-select', vSelect)

createApp(App).use(store).use(router).mount('#app')
