<template>
  <div class="hot-item">
    <div class="hot-item-img" :style="{ backgroundImage: `url(${item.hotImg})` }">
      <div class="broadcastVolume">
        <div>
          <img src="../../../assets/img/耳机.png" alt="">
          <span>
            {{ item.num }}万
          </span>
        </div>
        <img src="../../../assets/img/播放.png" alt="" class="play">
      </div>
    </div>
    <p class="hot-item-text">{{item.hotName}}</p>
    <span class="hot-item-classification">by</span>
    <span class="hot-item-author">{{item.hotContext}}</span>
    <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png" alt="">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped>
.hot-item {
  width: 140px;
  font-size: 14px;
}
img{
  width: 14px;
  height: 14px;
}
.play{
  width: 16px;
  height: 16px;
}
.hot-item-img {
  width: 140px;
  height: 140px;
  background-image: url(../../../assets/img/18890709277132382.jpg);
  display: flex;
  align-items: flex-end;
}

.broadcastVolume {
  width: 100%;
  height: 27px;
  color: #cccccc;
  font-size: 12px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hot-item-text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  width: 140px; /* 设置容器宽度 */
  overflow: hidden; /* 隐藏超出容器的内容 */
  text-overflow: ellipsis; /* 使用省略号 */
  white-space: nowrap; /* 防止文本换行 */
}
.hot-item-classification,
.hot-item-author,
.iconfont.icon-dianzan{
  font-size: 12px;
}
.hot-item-classification{
  color: #999;
  margin-right: 5px;
}
.hot-item-author {
  width: 106px; /* 设置容器宽度 */
  overflow: hidden; /* 隐藏超出容器的内容 */
  text-overflow: ellipsis; /* 使用省略号 */
  white-space: nowrap; /* 防止文本换行 */
  display: inline-block; /* 确保宽度生效 */
  vertical-align: top; 
}
</style>