<template>
  <div class="radio-item">
    <img src="../../../assets/img/有书图片.jpg" alt="">
    <div class="radio-item-info">
      <p class="radio-item-title">徐徐的</p>
      <p class="radio-item-desc">NHK制作人带你一起领略日本生活方式</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.radio-item{
  width: 435px;
  height: 120px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  img{
    width: 120px;
    height: 120px;
    margin-right: 20px;
  }
  .radio-item-info{
    display: flex;
    flex-direction: column;
    .radio-item-title{
      color: #333;
      font-size: 18px;
      padding: 20px 0;
      font-weight: 600;
      &:hover{
        color: #000;
        text-decoration: underline;
      }
    }
    .radio-item-desc{
      color: #666;
      font-size: 12px;
      margin-bottom: 6px;
    }
  }
}
</style>