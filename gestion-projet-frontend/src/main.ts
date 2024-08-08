import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import 'flowbite'

const app = createApp(App)

// Global component
// app.use(VueSidebarMenu)
app.use(createPinia())
app.use(router)

app.mount('#app')
