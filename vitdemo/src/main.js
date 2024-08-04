import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
// 从 pinia-plugin-persistedstate 模块中导入 piniaPluginPersistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入路由
import router from './router'

// 使用 pinia 进行全局状态管理，若想持久化存储还要添加其它插件 
const pinia = createPinia()
// 将插件应用于 pinia
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
// 使用路由
app.use(router)
app.mount('#app')
