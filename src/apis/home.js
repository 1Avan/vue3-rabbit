//获取轮播图
import httpInstance from "@/utils/http"
export function getBannerAPI(){
    return httpInstance({
        url: '/home/banner'
    })
}

//获取新鲜好物内容
export function getFreshAndGoodAPI(params) {
    return httpInstance({
        url: '/home/new',
        params
    })
}

//获取新鲜好物内容
export function getHotAndGoodAPI(params) {
    return httpInstance({
        url: '/home/hot',
        params
    })
}