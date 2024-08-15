import axios from "axios";

const httpInstance  = axios.create({
    //axios基础路径
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,//5s
    headers: {'X-Custom-Header': 'foobar'}
})

//请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>{
    return Promise.reject(e)
})


//响应拦截器
httpInstance.interceptors.response.use(res=>{
    return res.data
},e=>{
    return Promise.reject(e)
}
)


export default httpInstance