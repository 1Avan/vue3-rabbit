import axios from "axios";
import { useUserStore } from "@/stores/user";

const httpInstance  = axios.create({
    //axios基础路径
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,//5s
    headers: {'X-Custom-Header': 'foobar'}
})

//请求拦截器
httpInstance.interceptors.request.use(config=>{
    // 1.从pinia获取用户token
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // 2.将token设置到请求头中
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e=>{
    return Promise.reject(e)
})


//响应拦截器
httpInstance.interceptors.response.use(res=>{
    return res.data
},e=>{
     //统一错误提示
     ElMessage({
        type: 'warning',
        message:e.response.data.message
    })
    //处理401无权限
    const userStore = useUserStore()
    if(e.response.status === 401){
        //清空数据
        userStore.clearData()
        //跳转到登录页
        router.push('/login')
    }
    return Promise.reject(e)
}
)


export default httpInstance