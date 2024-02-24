import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import header from './components/header.vue'
import canvas from './components/canvas.vue'
createApp(App).use(router).mount('#app')
createApp(header).use(router).mount('#header')
createApp(canvas).use(router).mount('#canvas')