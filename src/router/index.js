import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import('@/views/category/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      //路由懒加载
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
