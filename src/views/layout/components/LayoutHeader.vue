<template>
  <header class="layout-header">
    <div class="container">
      <!-- logo -->
      <div class="logo">
        <router-link to="/">小兔鲜</router-link>
      </div>
      <!-- app头部导航 -->
      <div class="app-header-nav">
        <!-- 动态获取导航栏内容 -->
        <li v-for="item in categoryList" :key="item.id">
             <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
  </header>
</template>
<script setup >
import { getCategoryAPI } from '@/apis/layout'
import { onMounted, ref } from 'vue'

const categoryList = ref([])
const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
    console.log(res)
}

onMounted(() => getCategory())
</script>
<style scoped lang="scss">
.layout-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px /
        contain;
    }
  }

  .app-header-nav {
    font-size: 16px;
    font-weight: 500;
    margin: 0 50px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
    }
  }
  .search {
    width: 200px;
    height: 32px;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    .icon-cart {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
}
</style>