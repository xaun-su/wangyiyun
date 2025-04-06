<template>
    <div class="podcast-themes">
      <div class="themes-items">
        <div class="themes-item" v-for="i in 18">
          <i class="iconfont icon-xiaoxi"></i>
          <span>音乐博主</span>
        </div>
      </div>
      <div class="points">
        <div class="point"></div>
        <div class="point"></div>
      </div>
      <div class="themes-lt">&lt;</div>
      <div class="themes-gt">&gt;</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.podcast-themes {
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  position: relative;

  .points {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .point {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: red;
      margin-right: 15px;
    }
  }
}

.themes-items {
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  flex-wrap: wrap;
  // align-content: space-between;
  .themes-item{
    height: 70px;
    width: calc(100%/9);
    color: rgb(116, 116, 116);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont{
      margin-top: 2px;
      font-size: 48px;
    }
    span{
      margin-top: -3px;
      font-size: 12px;
    }
    &:hover{
      background-color: rgb(246, 247, 247);
    }
  }
}
.themes-lt,
.themes-gt{
  position: absolute;
  font-size: 30px;
  color: rgb(116, 116, 116);
}
.themes-lt{
  left: -20px;
  top: 25%;
}
.themes-gt{
  right: -20px;
  top: 25%;
}
</style>