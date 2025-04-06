<template>
  <div class="album2-item">
    <div class="album2-item-img">
      <img :src="item.discImg" alt="">
    </div>
    <p class="name">{{ item.discAuthor }}</p>
    <span class="content">{{item.discContent}}</span>
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
<style scoped lang="less">
.album2-item{
  padding:0 33px 30px 0;
}
.album2-item-img{
  width: 153px;
  height: 130px;
  background-image: url(@/assets/img/背景碟片.jpg);
  background-size:cover;
}
img{
  width: 130px;
  height: 130px;
}
p{
  font-size: 14px;
}
span{
  font-size: 12px;
}
.content{
  color: #666666;
}
</style>