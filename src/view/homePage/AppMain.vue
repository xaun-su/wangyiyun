<template>
  <AppSwiper />
  <div class="app-main">
    <div>
      <div class="app-left">
        <!-- 热门推荐区域 -->
        <AppTitle title="热门推荐" />
        <div class="hot-list">
          <!-- 遍历 displayedHotItems 数组，并将数据传递给 HotItem 组件 -->
          <div v-for="item in displayedHotItems" :key="item.hotId">
            <HotItem :item="item" />
          </div>
        </div>
        <!-- 新碟上架区域 -->
        <div class="new-list">
          <AppTitle title="新碟上架" />
          <div class="album-list">
            <p><</p>
            <div v-for="(item,index) in displayedDiscItems" :key="index">
              <AlbumItem  :item="item" />
            </div>
            <p>></p>
          </div>
        </div>
        <!-- 榜单区域 -->
        <div class="rank-list">
          <AppTitle title="榜单" />
          <div class="rank-list-item">
            <div class="rank-item">
                <TabList  :itemList="displayedRankItems" />
                <TabList  :itemList="displayedRank2Items" />
                <TabList  :itemList="displayedRank3Items" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-right">
      <AppRight />
    </div>
  </div>
</template>

<script setup>
import AppRight from './appMain/AppRight.vue';
import HotItem from './appMain/HotItem.vue';
import AlbumItem from './appMain/AlbumItem.vue';
import TabList from './appMain/TabList.vue';
import AppTitle from './appMain/AppTitle.vue';
import AppSwiper from './appMain/AppSwiper.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

// 定义用于存储数据的 ref
const data = ref([]);
const error = ref(null); // 用于存储错误信息

onMounted(async () => {
  try {
    const response = await axios.get('https://mock.presstime.cn/mock/67f33492aa477834147779e7/WYW/discover/home');
    console.log(response.data);
    // 确保 response.data.data 存在且是数组
    if (response.data && response.data.data) {
      data.value = response.data.data;
      console.log(data.value);
    } else {
      error.value = 'API 返回的数据格式不正确';
      console.error('API 返回的数据格式不正确');
    }
  } catch (err) {
    error.value = 'Failed to fetch data from API';
    console.error('Error fetching data:', err);
  }
});

// 计算属性，用于提取 data 数组的 hot 属性
const displayedHotItems = computed(() => {
  return data.value?.hot || []; // 使用 ?. 确保 data.value 存在
});
// console.log(displayedHotItems);
// 用于提取 data 数组的 得片属性
const displayedDiscItems= computed(() => {
  return data.value?.disc || [];
});
// 用于提取 data 数组的 得片属性
const displayedRankItems = computed(() => {
  return data.value?.rank?.slice(0, 10) || [];
});
const displayedRank2Items = computed(() => {
  return data.value?.rank?.slice(10, 20) || [];
});
const displayedRank3Items = computed(() => {
  return data.value?.rank?.slice(20, 30) || [];
});

</script>

<style scoped lang="less">
.app-main {
  width: 1100px;
  display: flex;
  justify-content: center;
  // background-color: #fff;
}

.app-left {
  width: 730px;
  height: 1430px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px;
  box-sizing: border-box;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  background-color: #fff;

  .hot-list {
    width: 100%;
    height: 470px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    margin-bottom: 40px;
  }
}

.new-list {
  height: 243px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  p {
    font-weight: 800;
    color: #333333;

    &:hover {
      color: #000;
    }
  }

  .album-list {
    margin: auto;
    width: 100%;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(245, 245, 245);
  }
}

.rank-list {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .rank-list-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .rank-item {
      width: 100%;
      height: 470px;
      background-color: rgb(244, 244, 244);
      display: flex;
    }
  }
}

.app-right {
  width: 254px;
  height: 1430px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  background-color: #fff;
}
</style>
