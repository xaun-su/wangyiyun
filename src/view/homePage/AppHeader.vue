<template>
  <div class="nav-header">
    <div class="app-header">
      <img src="../../assets/img/wangyiyun.png">
      <h2>网易云音乐</h2>
      <router-link v-for="(item, index) in headerData" 
      :key="index"
      :to="item.path"
      class="header-item"
      >
        <div class="item" @click="selectItem(index)" :class="{ active: activeIndex === index }">
          {{ item.label }}
        </div>
      </router-link>
      <div class="search">
        <img src="../../assets/img/搜索.png" alt="搜说">
        <input type="text" name="" id="search" placeholder="音乐/电台/用户/视频">
      </div>
      <div class="creatorCenter">创作者中心</div>
      <div id="login">登录</div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// const headerData = ['发现音乐', '我的音乐', '关注', '商城', '音乐人', '云推歌', '下载客户端']
const headerData = [
  { label: '发现音乐', path: '/discover' },
  { label: '我的音乐', path: '/my' },
  { label: '关注', path: '/attention' },
  { label: '商城', path: '/' },
  { label: '音乐人', path: '/' },
  { label: '云推歌', path: '/' },
  { label: '下载客户端', path: '/' },
];
const activeIndex = ref(0)

// 选择项的方法
const selectItem = (index) => {
  activeIndex.value = index
}
</script>


<style scoped lang="less">
#login {
  padding: 15px;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    text-decoration: underline;
  }
}

h2 {
  padding: 15px;
}

.nav-header {
  width: 100%;
  display: flex;
  background: #242424;
  justify-content: center;
}
.header-item{
  text-decoration: none;
  color:rgb(204, 204, 204);
}
.app-header {
  width: 1100px;
  height: 70px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}

.app-header img {
  width: 45px;
}

.item {
  height: 70px;
  padding: 0 10px;
  font-size: @font-size;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #000;
    color: #fff;
  }

  &:hover {
    background-color: #000;
  }
}

.search {
  border-radius: 25px;
  border: none;
  height: 50%;
  margin: 10px;
  background-color: white;
  display: flex;
  align-items: center;

  img {
    width: 25px;
  }

  input {
    height: 90%;
    width: flex;
    border: none;
    border-radius: 25px;
  }
}

.creatorCenter {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    border: 1px solid #fff;
  }
}
</style>
