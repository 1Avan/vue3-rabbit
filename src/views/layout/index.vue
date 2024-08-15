<template>
  <LayoutNavVue></LayoutNavVue>
  <LayoutHeaderVue></LayoutHeaderVue>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooterVue></LayoutFooterVue>
  <LayoutFixed></LayoutFixed>
</template>
<script setup >
import LayoutFooterVue from "./components/LayoutFooter.vue";
import LayoutHeaderVue from "./components/LayoutHeader.vue";
import LayoutNavVue from "./components/LayoutNav.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";
const categoryStore = useCategoryStore();
categoryStore.getCategory(); //获取分类数据
</script>
<style scoped lang="scss">
</style>