<template>
  <div class="play-top">
    <div class="left">
      <span class="title">全部</span>
      <button class="classification">选择分类 <span>&gt;</span></button>
    </div>
    <button class="top-hot">热门</button>
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
  .classification{
    width: 86px;
    height: 30px;
    padding-right: 5px;
    margin: 2px  0px 0px 12px;
    font-size: 12px;
    color: rgb(12, 115, 194);
    background-color: rgb(242, 242, 242);
    border-radius: 5px;
    border: 1px solid #666;
    span{
      display: inline-block;
      transform: rotate(90deg);
    }
  }
  .top-hot{
    width: 45px;
    height: 30px;
    background-color: rgb(197, 12, 13);
    border: 1px;
    color: #fff;
    border-radius: 5px;
  }
}
</style>