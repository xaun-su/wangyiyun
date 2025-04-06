<template>
  <div class="artist-item">
    <div class="artist-item-img">
      <img src="@/assets/img/张惠妹.jpg" alt="">
    </div>
    <div class="artist-item-name"><span>张惠妹</span><i class="iconfont icon-kefu"></i></div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.artist-item-img {
  width: 130px;
  height: 130px;
  background-size: cover;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
}

.artist-item-name {
  font-size: 12px;
  color: #000;
  display: flex;
  justify-content: space-between;

  span {
    &:hover {
      text-decoration: underline;
    }
  }

  i {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-kefu {
    font-size: 12px;
    color: #fff;
  }
}
</style>