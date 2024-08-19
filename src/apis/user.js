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