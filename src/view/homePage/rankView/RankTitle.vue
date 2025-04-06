<template>
  <div class="title">
    <div class="title-left">
      <h2>歌曲列表</h2>
      <span>97首歌</span>
    </div>
    <div class="title-right">
      <div class="more">
        播放：<span>6198739456</span>次
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  width: flex;
  border-bottom: 2px solid #a40011;
  padding: 0 10px;
  box-sizing: border-box;
}

.title-left {
  display: flex;
  align-items: flex-end;

  h2 {
    color: #333333;
    font-size: 20px;
  }
  span{
    margin-left: 20px;
    font-size: 12px;
    color: #999999;
  }
}

.title-right {
  display: flex;
  align-items: center;
}
.more {
  span {
    color: red;
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>