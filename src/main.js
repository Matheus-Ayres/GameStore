import { createApp } from 'vue'
import App from './views/HomeView.vue'
import router from './router'

import './assets/main.css' // Tailwind aqui

const app = createApp(App)
app.use(router)

app.mount('#app')
