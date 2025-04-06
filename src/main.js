import { createApp } from 'vue'
import './style.less'
import App from './view/App.vue'
import router from './router/index.js'
import './assets/iconfont/排行榜/iconfont.css'


createApp(App)
  .use(router)
  .mount('#app')



