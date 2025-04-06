<template>
  <div class="app-swiper">
    <!-- Swiper 容器 -->
    <div class="swiper-container">
      <!-- Swiper 组件 -->
      <swiper
        :modules="modules"
        :autoplay="autoplay"
        :pagination="pagination"
        :slides-per-view="1"
        :space-between="10"
        @slideChange="onSlideChange"
        @init="onSwiperInit"
      >
        <!-- 循环渲染 Swiper Slide -->
        <swiper-slide v-for="(item, index) in list" :key="index">
          <!-- 图片 -->
          <img :src="item.image" :alt="item.alt">
        </swiper-slide>
      </swiper>
    </div>
    <!-- 下载图片 -->
    <img src="../../../assets/img/down.png" alt="" class="down">
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';  // 引入 Swiper 组件和 Slide 组件
import { Autoplay, Pagination } from 'swiper/modules';  // 引入 Swiper 模块 (自动播放, 分页器)
import 'swiper/css';  // 引入 Swiper 核心 CSS
import 'swiper/css/pagination';  // 引入 Swiper 分页器 CSS
import { ref, onMounted } from 'vue';  // 引入 Vue 的响应式 API 和生命周期钩子

// 引入图片
import image1 from '../../../assets/img/109951170671763245.jpg';
import image2 from '../../../assets/img/109951170671769223.jpg';
import image3 from '../../../assets/img/109951170671789902.jpg';
import image4 from '../../../assets/img/109951170671791327.jpg';
import image5 from '../../../assets/img/109951170671812113.jpg';
import image6 from '../../../assets/img/109951170672902228.jpg';
import image7 from '../../../assets/img/轮播1.jpg';
import image8 from '../../../assets/img/轮播2.jpg';

// 注册 Swiper 模块
const modules = ref([Autoplay, Pagination]);

// 自动播放配置
const autoplay = {
  delay: 2000,  // 轮播间隔 2 秒
  disableOnInteraction: false,  // 用户交互后不停止自动播放
};

// 分页器配置
const pagination = {
  clickable: true,  // 允许点击分页器切换 slide
};

// 图片列表
const list = [
  { image: image1, alt: 'Image 1' },
  { image: image2, alt: 'Image 2' },
  { image: image3, alt: 'Image 3' },
  { image: image4, alt: 'Image 4' },
  { image: image5, alt: 'Image 5' },
  { image: image6, alt: 'Image 6' },
  { image: image7, alt: 'Image 7' },
  { image: image8, alt: 'Image 8' }
];

// slide 切换时的回调函数
const onSlideChange = (swiper) => {
  // 获取当前激活的 slide 的索引
  const activeIndex = swiper.activeIndex;
  // 获取当前 slide 对应的图片 URL
  const imageUrl = list[activeIndex].image;
  // 设置 CSS 变量，用于动态改变背景图片
  document.documentElement.style.setProperty('--swiper-bg-image', `url(${imageUrl})`);
};

// Swiper 初始化时调用的回调函数
const onSwiperInit = (swiper) => {
  // 在 Swiper 初始化后调用 onSlideChange 函数
  onSlideChange(swiper);
};
</script>

<style scoped lang="less">
.nav-swiper {
  width: 100%;
  height: 285px;
  display: flex;
  justify-content: center;
}

.app-swiper {
  width: 100%;
  height: 285px;
  display: flex;
  justify-content: center;
  position: relative; 
  overflow: hidden; 
}

/* ::before 伪元素创建背景 */
.app-swiper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--swiper-bg-image); /**将路劲地址赋值给变量 */
  background-size: cover;
  background-position: center;
  filter: blur(15px); /* 模糊效果 */
  z-index: 2;
}

.swiper-container {
  width: 730px;
  height: 100%;
  position: relative; 
  z-index: 3;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.down {
  width: 254px;
  height: 285px;
  z-index: 4;
}
</style>
