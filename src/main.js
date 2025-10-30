import { createApp } from 'vue'
import { createNotivue } from 'notivue'

import App from './App.vue'
import router from './router'
import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css'

import './assets/main.css' // Tailwind aqu

const notivue = createNotivue({
    position: 'top-center',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    theme: 'pastel',
    notifications: {
        global: {
            duration: 4000
        }
    }
})

const app = createApp(App)

app.use(router)
app.use(notivue)
app.mount('#app')
