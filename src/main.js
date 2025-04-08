import { createApp } from 'vue'
import './style.less'
import App from './view/App.vue'
import router from './router/index.js'
import './assets/iconfont/排行榜/iconfont.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')



