import { createApp } from 'vue'
import App from './App.vue'
import * as components from './components'

const app = createApp(App)

Object.entries(components).forEach(([key, component]) =>
  app.component(key, component)
)

app.mount('#app')
