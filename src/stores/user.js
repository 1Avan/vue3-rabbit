import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginByPassword } from '@/apis/user.js'
import { useCartStore } from './cartStore.js'
import { mergeCartAPI } from '@/apis/cart.js'



export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    // 异步请求获取用户信息
    const getUserInfo = async ({ account, password }) => {
        const res = await loginByPassword({ account, password })
        userInfo.value = res.result
        //合并购物车
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
    }

    //退出登录
    const clearData = () => {
        userInfo.value = {}
        //清空购物车
        cartStore.clearCart()
    }

    return {
        userInfo,
        getUserInfo,
        clearData
    }
}, {
    persist: true
})