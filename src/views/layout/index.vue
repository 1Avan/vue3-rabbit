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
import LayoutFixed from './components/LayoutFixed.vue'
</script>
<style scoped lang="scss">
</style>