import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import ElementPlus from 'element-plus'
import '@unocss/reset/tailwind.css'
import baiduMap from 'vue3-baidu-map-gl'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.use(baiduMap,{
    ak: '',
  plugins: ['TrackAnimation']
})
app.mount('#app')
