import httpInstance from "@/utils/http.js";

export const loginByPassword = ({account,password})=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })

}

//猜你喜欢 接口
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}