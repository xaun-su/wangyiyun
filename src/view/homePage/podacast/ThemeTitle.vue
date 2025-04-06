<template>
  <div class="play-top">
    <div class="left">
      <h3 class="title">全部</h3>
    </div>
    <div class="right">更多&gt;</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.play-top{
  width: 100%;
  height: 40px;
  border-bottom: 2px solid rgb(194, 12, 12);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .title{
    font-size: 24px;
    color: #333;
  }
  .right{
    font-size: 12px;
    color: #666;
    margin-top: 14px;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>