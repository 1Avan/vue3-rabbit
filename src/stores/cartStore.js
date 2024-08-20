import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user.js'
import {insertCart,findNewCartListAPI,delCartAPI} from '@/apis/cart.js'


// persist是pinia安装了插件后的一个属性，可以自动将购物车数据持久化到本地localstore
//注意：pinia的持久化插件需要手动安装，并且需要配置pinia的插件，pinia本身不支持持久化要借助插件
export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    //1.定义购物车state
    const cartList = ref([])
    //用computed映射一下token，方便数据转换，响应式更新
    const isLogin = computed(() => userStore.userInfo.token)
    //2.定义添加商品到购物车方法
    const addCart = async (goods) => {
        if (isLogin.value) {
            //登录状态下
            //调用加入购物车接口
            await insertCart(goods)
            updateCartList()

        } else {
            //判断购物车中是否有该商品
            const isHas = cartList.value.some(item => item.skuId === goods.skuId)
            if (isHas) {
                //有则数量+count
                cartList.value.forEach(item => {
                    if (item.skuId === goods.skuId) {
                        item.count += goods.count
                    }
                })
            } else {
                //没有则添加
                cartList.value.push(goods)
            }
        }
    }

    //3.删除购物车商品
    const delCart = async (skuId) => {
        if (isLogin.value) {
            //登录状态下
            await delCartAPI([skuId])
            updateCartList()
        }
        else {
            cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        }
    }

    //4.清空购物车
    const clearCart = () => {
        cartList.value = []
    }
    //5.单选
    const singleCheck = (skuId, selected) => {
        cartList.value.forEach(item => {
            if (item.skuId === skuId) {
                item.selected = selected
            }
        })
    }
    //6.全选
    const allCheck = (selected) => {
        cartList.value.forEach(item => {
            item.selected = selected
        })
    }
    //7.更新购物车列表
    const updateCartList = async () => {
        if (isLogin.value) {
            //登录状态下
            //调用购物车列表接口
            const res = await findNewCartListAPI()
            //覆盖本地购物车
            cartList.value = res.result
        }
    }

    //计算购物车件数和总价格
    //总数
    const allCount = computed(() =>
        cartList.value.reduce((a, c) => a + c.count, 0)
    );
    //总价
    const allPrice = computed(() =>
        cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    // 是否全选计算属性
    const isAll = computed(() => cartList.value.every((item) => item.selected))


    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        allCount,
        allPrice,
        delCart,
        clearCart,
        singleCheck,
        allCheck,
        selectedCount,
        selectedPrice,
        isAll
    }

}, {
    persist: true
}
)