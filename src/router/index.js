import { createRouter, createWebHashHistory } from "vue-router"
import index from '../pages/Index.vue'

// 定义路由，path是url， component为vue文件 

const routes = [{
  path: '/',
  component: index
}]

const router = createRouter({

  history: createWebHashHistory(),
  routes,
})

export default router