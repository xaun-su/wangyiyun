<template>
  <div class="title">
    <div class="title-left">
      <img src="@/assets/img/选择.png" alt="">
      <h2>热门推荐</h2>
      <span>华语</span>
      <span>|</span>
      <span>流行</span>
      <span>|</span>
      <span>摇滚</span>
      <span>|</span>
      <span>民谣</span>
      <span>|</span>
      <span>电子</span>
    </div>
    <div class="title-right">
      <span>
        更多
        <img src="@/assets/img/右指向.png" alt="">
      </span>
      
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
  height: 33px;
  width: flex;
  border-bottom: 2px solid #a40011;
  padding: 0 10px;
  box-sizing: border-box;
}
.title-left{
  display: flex;
  align-items: center;
  h2{
    color: #333333;
    font-size: 20px;
  }
  img{
    margin-right:5px;
  }
}
.title-right{
  display: flex;
  align-items: center;
  img{
    margin-left: 5px;
  }
}
span{
    color: #666;
    font-size: 12px;
    margin-left: 10px;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  img{
    width: 12px;
  }
</style>