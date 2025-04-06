<template>
  <div class="app">
    <AppHeader />
    <router-view />
    <AppFooter/>
  </div>
</template>

<script setup>
import AppHeader from './homePage/AppHeader.vue';
import AppFooter from './homePage/AppFooter.vue';
</script>
首页
<style scoped lang="less">
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  z-index: 1;
}
</style>
