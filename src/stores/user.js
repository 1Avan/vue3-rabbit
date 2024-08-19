import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginByPassword  } from '@/apis/user.js'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    // 异步请求获取用户信息
    const getUserInfo = async ({account,password}) => {
        const res = await loginByPassword({account,password})
        userInfo.value = res.result
    }

    //退出登录
    const clearData = ()=>{
        userInfo.value = {}
    }

    return {
        userInfo,
        getUserInfo,
        clearData
    }
},{
    persist:true
})