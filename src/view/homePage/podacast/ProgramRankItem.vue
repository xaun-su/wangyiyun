<template>
  <div class="programItem">
    <div class="programNum">
      <p>01</p>
      <p class="programNum2">-0</p>
    </div>
    <img src="@/assets/img/图片2.jpg" alt="">
    <div class="programContent">
      <p>DJ阿智作品单曲集-第十四季</p>
      <p>DJ阿智Remix（单曲集合）</p>
    </div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.programItem {
  display: flex;
  padding: 10px 0;
  width: 100%;
  height: 40px;
  align-items: center;
  .programNum{
    width: 47px;
    font-size: 14px;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .programNum2{
      font-size: 10px;
      color: #666;
    }
  }
  img {
    display: block;
    width: 40px;
    height: 40px;
  }
  .progressBar {
    width: 100px;
    height: 8px;
    margin-left: 10px;
    background-color: rgb(222, 222, 222);
    border: 1px solid #999;
    border-radius: 12px;
    .progress{
      width: 90%;
      height: 100%;
      background-color: rgb(197, 197, 197);
      border-radius: 12px;
    }
  }
}



.programContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 10px;
  height: 40px;
}

.programContent p {
  width: 208px;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
}

.programContent p:first-child {
  font-size: 12px;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
}

.programContent p:last-child {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}
</style>