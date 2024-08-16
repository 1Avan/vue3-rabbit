import httpInstance from "@/utils/http"

//获取轮播图banner数据
export function getBannerAPI(params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
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

/**
 *获取商品模块Product
 */
 export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}