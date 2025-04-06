<template>
  <div class="play-list-view">
    <PlayTop></PlayTop>
    <div class="play-list-items">
      <div v-for="item in displayedList " class="play-list-item">
        <PlayItem :item="item"></PlayItem>
      </div>
    </div>
    <Pager></Pager>
  </div>
</template>

<script setup>
import PlayTop from './playlist/PlayTop.vue';
import Pager from '../../components/comment/Pager.vue';
import PlayItem from './playlist/PlayItem.vue';

import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

// 定义用于存储数据的 ref
const data = ref([]);
const error = ref(null); // 用于存储错误信息

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:4523/m1/6158319-5850355-default/discover/playlist');
    console.log(response.data);
    if (response.data && response.data.data) {
      data.value = response.data.data.playList;
      console.log(data.value);
    } 
  } catch (err) {
    error.value = 'Failed to fetch data from API';
    console.error('Error fetching data:', err);
  }
});
const displayedList = computed(() => {
  return data.value;
});
</script>

<style lang="less" scoped>
.play-list-view{
  width: 900px;
  // height: 1670px;
  padding: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.play-list-items{
  width: 950px;
  height: 1500px;
  margin-top:30px;
  padding-left: -50px;
  display: flex;
  flex-wrap: wrap;
  transform: translateX(-25px);
}
.play-list-item{
  padding-left: 50px;
  padding-bottom: 30px;
}
</style>