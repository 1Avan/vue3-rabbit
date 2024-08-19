<!--views/subCategory/index.vue-->
<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const categoryFilter = ref({})
const loading  = ref(false)

//获取面包屑导航数据
const getCategoryFilter = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    categoryFilter.value = res.result
    console.log(res);
}
//获取基础列表数据
const baseListData = ref({
    category: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

const subCategory = ref({})
//获取分类数据
const getSubCategory = async () => {
    const res = await getSubCategoryAPI(baseListData.value)  //数据要传进去
    subCategory.value = res.result.items
}
//当tab切换时触发
const tabChange = (name) => {
    baseListData.value.page = 1  //重置页数
    getSubCategory()
}
//列表加载
const  load = async ()=>{
    baseListData.value.page += 1 
    loading.value = true;
      //获取下一页的数据
    const res = await getSubCategoryAPI(baseListData.value)  
    loading.value = false; 
    subCategory.value = [...subCategory.value,...res.result.items]
    //当请求的数据为空时，禁用加载更多
    if(res.result.items.length === 0){
        disabled = true
    }
}
//列表数据加载完
let disabled = ref(false)
onMounted(() => {
    getCategoryFilter()
    getSubCategory()
})


</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/category/'+categoryFilter.parentId }">{{categoryFilter.parentName}}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{categoryFilter.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!-- 商品列表-->
                <good-item v-for="item in subCategory" :good="item" :key="item.id"></good-item>
                <div class="loading" v-if="loading">
                    加载中...
                </div>
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        .loading {
            width: 100%;
            text-align: center;
        }
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

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

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>
