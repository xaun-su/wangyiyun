<template>
  <div class="radio">
  <ThemeTitle/>
  <div class="radio-content">
    <div v-for="i in 4">
      <RadioItem/>
    </div>
  </div>
  </div>
</template>

<script setup>
import ThemeTitle from './ThemeTitle.vue';
import RadioItem from './RadioItem.vue';
</script>

<style lang="less" scoped>
.radio {
  margin-top: 35px;
  width: 100%;
  height: 365px;
  display: flex;
  flex-direction: column;
}
.radio-content{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>