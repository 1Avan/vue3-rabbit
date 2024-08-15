import '@/styles/common.scss'
import '@/assets/icons/iconfont/iconfont.css'  // 引入阿里云字体图标css
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
