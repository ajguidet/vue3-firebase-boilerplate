import { createApp, inject } from 'vue'

import App from './App.vue'
import router from './router/index'
import './index.css'
import { auth } from './plugins/firebase'

const app = createApp(App)

app.use(router)
app.provide('$auth', auth)

app.mount('#app')
