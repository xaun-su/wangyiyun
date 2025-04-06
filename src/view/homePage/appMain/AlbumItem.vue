<template>
  <div class="album-item">
    <div class="album-item-img">
      <img :src="item.discImg" alt="">
    </div>
    <p class="name">{{ item.discContent }}</p>
    <p class="content">{{ item.discAuthor }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props=defineProps({
  item:{
    type:Object,
    required:true,
  }

})
</script>
<style scoped lang="less">
.album-item-img{
  width: 118px;
  height: 100px;
  background-image: url(@/assets/img/背景碟片.jpg);
  background-size:cover;
}
img{
  width: 100px;
  height: 100px;
}
p{
  font-size: 12px;
}
.content{
  color: #666666;
}
</style>