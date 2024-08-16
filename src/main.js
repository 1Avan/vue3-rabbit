import '@/styles/common.scss'
import '@/assets/icons/iconfont/iconfont.css'  // 引入阿里云字体图标css
import { lazyPlugin } from './directive'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//在main.js中注册自定义插件,引入自定义指令
app.use(lazyPlugin)
app.mount('#app')
