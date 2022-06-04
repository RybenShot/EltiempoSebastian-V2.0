import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.config.productionTip = false

// import Vue from 'vue'
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';

// Vue.component('v-select', vSelect)

createApp(App).use(store).use(router).mount('#app')
