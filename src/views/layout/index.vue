<template>
<LayoutNavVue></LayoutNavVue>
<LayoutHeaderVue></LayoutHeaderVue>
<!-- 二级路由出口 -->
<router-view></router-view>
<LayoutFooterVue></LayoutFooterVue>
</template>
<script setup >
import LayoutFooterVue from "./components/LayoutFooter.vue";
import LayoutHeaderVue from "./components/LayoutHeader.vue";
import LayoutNavVue from "./components/LayoutNav.vue";
</script>
<style scoped lang="scss">
</style>