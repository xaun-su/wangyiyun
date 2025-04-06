<template>
  <div class="app-nav">
    <div class="app-list">
      <div class="list-left">
        <!--  router-link相当于 a标签的·二次·封装-->
        <router-link
          v-for="(item, index) in list"
          :key="index"
          :to="item.path"
          class="item"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  { label: '推荐', path: '/discover/home' },
  { label: '排行榜', path: '/discover/rank' },
  { label: '歌单', path: '/discover/playlist' },
  { label: '播客有声书', path: '/discover/podcast' },
  { label: '歌手', path: '/discover/artist' },
  { label: '新碟上架', path: '/discover/album' }
];
</script>

<style scoped lang="less">
.app-nav {
  width: 100%;
  height: 35px;
  background-color: #a40011;
  display: flex;
  justify-content: center;
}

.app-list {
  width: 1100px;
  height: 35px;
  display: flex;
  transform: translateX(50px);
  .list-left {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .item {
    font-size: 12px;
    height: 20px;
    color: aliceblue;
    padding: 0 15px;
    margin: 0 9px;
    cursor: pointer;
    text-decoration: none; /* 移除链接下划线 */
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }
  }
}
</style>
