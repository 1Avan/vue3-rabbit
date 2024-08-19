import httpInstance from "@/utils/http";

//获取详情数据
export function getDetailAPI(id) {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}

//获取热门商品
export function getHotAPI({ id, type, limit = 3 }){
    return httpInstance({
        url: '/goods/hot',
        params:{
            id,
            type,
            limit
        }
    })
}