import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/index'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router/index'
createApp(App).use(store).use(router).use(Element3).mount('#app')
