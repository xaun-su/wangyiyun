<template>
  <div class="programItem">
    <img src="@/assets/img/图片1.jpg" alt="">
    <div class="programContent">
      <p>每个人都有自己的节奏型，你的人生可以像吉他和弦一样清爽</p>
      <p>小螺号|比奇堡里听什么歌</p>
    </div>
    <button>音乐博客</button>
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

  img {
    display: block;
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }
  button {
    margin-left: 10px;
    font-size: 12px;
    color: #999;
    padding: 0 6px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #999;
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
  width: 250px;
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