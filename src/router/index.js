import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'

const router = createRouter({
  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  },
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
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/subCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/detail/index.vue')
        },
        {
          path: 'cartlist',
          component: () => import('@/views/cartList/index.vue')
        },
        {
          path: 'checkout',
          component: () => import('@/views/checkout/index.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/pay/index.vue')
        },
        {
          path: 'member',
          component: () => import('@/views/member/index.vue'),
          redirect:'/member/userinfo',
          children: [
            {
              path: '/member/order',
              component: () => import('@/views/member/components/UserOrder.vue')
            },
            {
              path: '/member/userinfo',
              component: () => import('@/views/member/components/UserInfo.vue')
            }
          ]
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
