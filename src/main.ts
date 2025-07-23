import './assets/main.css'
import './assets/markdown.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import { router } from './router'
import PostWrapper from './components/posts/post-wrapper.vue'

const app = createApp(App)
const head = createHead()

// Register PostWrapper globally for markdown files
app.component('PostWrapper', PostWrapper)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
