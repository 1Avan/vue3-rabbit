<!-- DetailHot.vue -->
<script setup>
import {getHotAPI} from '@/apis/detail.js'
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let goods = ref({})
//热门商品类型
const TYPEMAP  = {
    '1':'24小时热销榜',
    '2':'热销榜'
}

const props = defineProps({
    hotType:{
        type:Number,
        default:1
    }
})
const getHot = async ()=>{
    let res = await getHotAPI({id: route.params.id,type: props.hotType,limit:3})
    goods.value = res.result
    console.log(res);
}
getHot()



const title = computed(() => TYPEMAP[props.hotType])

</script>


<template>
    <div class="goods-hot">
        <h3>{{title}}</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="good in goods" :key="good.id">
            <img :src="good.picture" alt="" />
            <p class="name ellipsis">{{good.name}}</p>
            <p class="desc ellipsis">{{good.desc}}</p>
            <p class="price">&yen;{{good.price}}</p>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>
