import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements } from '@telekom/scale-components/loader'
import '@telekom/scale-components/dist/scale-components/scale-components.css'

defineCustomElements()

const app = createApp(App)

app.use(router)

app.mount('#app')
