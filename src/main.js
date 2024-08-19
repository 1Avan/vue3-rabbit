import '@/styles/common.scss'
import '@/assets/icons/iconfont/iconfont.css'  // 引入阿里云字体图标css
import { lazyPlugin } from './directive'
import { componentPlugin } from './components/index.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//pinia持久化插件，借助localstory
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

// app.use(createPinia())
app.use(pinia)//使用安装了持久化插件的pinia
app.use(router)
//在main.js中注册自定义插件,引入自定义指令
app.use(lazyPlugin)
//引入共用组件
app.use(componentPlugin)
app.mount('#app')
