<template>
  <div class="pager">
    <button class="previousPage">&lt;上一页</button>
    <div v-for="i in 8">
      <button class="pager-item">{{ i }}</button>
    </div>
    <span>...</span>
    <button class="pager-item">1000</button>

    <button class="nextPage">下一页&gt;</button>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.pager {
  margin-top: 20px;
  width: 670px;
  height: 26px;
  display: flex;
  justify-content: center;
}

.pager-item {
  // width: 24px;
  // min-width: 24px;
  font-size: 12px;
  padding: 0 8px;
  height: 24px;
  &:hover{
  background-color: #f35555;
  color: #fff;
}
}
button{
  margin: 0 4px;
  padding: 0 8px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.previousPage{
  background-color: rgb(232, 232, 232);
  color: #999;
}
.nextPage{
  background-color: rgb(245, 245, 245);
  color: #666;
}
</style>