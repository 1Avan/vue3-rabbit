import httpInstance from "@/utils/http.js";

//获取目录
export function getCategoryAPI() {
    return httpInstance({
        url: '/home/category/head'
    })
}