import { createApp } from 'vue'
import App from './App.vue'

// Including CSS responsive grid
import './vendors/bootstrap-grid.min.css'

// Including event bus
import mitt from 'mitt'
const emitter = mitt()

const app = createApp(App)
app.provide('emitter', emitter)

app.mount('#app')