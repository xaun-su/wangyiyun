<template>
  <div class="hot-item">
    <div class="hot-item-img" :style="{ backgroundImage: `url(${item.hotImg})` }">
      <div class="broadcastVolume">
        <div>
          <img src="../../../assets/img/耳机.png" alt="耳机图标">
          <span>
            {{ formatNumber(item.hotNum) }}万
          </span>
        </div>
        <img src="../../../assets/img/播放.png" alt="播放图标" class="play">
      </div>
    </div>
    <p>{{ item.hotContext }}</p>
  </div>
</template>

<script setup>
// 使用 defineProps 声明组件可以接收的 props
// import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
    //以上条件都满足，则认为 item prop 的值有效
    validator: (value) => {
      return value && value.hotImg && value.hotContext;
    }
  }
});

// 格式化数字，确保显示正确的单位
const formatNumber = (num) => {
  const number = Number(num);
  if (isNaN(number)) {
    return '0'; // 或者其他默认值
  }
  return number.toFixed(0); // 去除小数部分
};
</script>

<style scoped>
.hot-item {
  width: 140px;
  font-size: 14px;
  margin-bottom: 20px; /* 增加底部间距 */
}

/* 确保图片铺满容器 */
.hot-item-img {
  width: 100%;
  height: 140px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  border-radius: 5px; /* 添加圆角 */
  overflow: hidden; /* 确保内容不超出容器 */
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
  cursor: pointer;
}

.broadcastVolume img {
  width: 14px;
  height: 14px;
  margin-right: 5px; /* 调整图标间距 */
}

.play {
  width: 16px;
  height: 16px;
}

/* 文本样式 */
/* .hot-item p {
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
} */
</style>
