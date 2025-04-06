<template>
  <div class="anchorItem">
    <img src="../assets/img/陈立.jpg" alt="">
    <div class="anchorContent">
      <p>陈立</p>
      <p>心理学家、美食家陈立教授</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.anchorItem {
  display: flex;
  margin-top: 14px;
  width: 210px;
  height: 40px;
}

.anchorItem img {
  display: block;
  width: 40px;
  height: 40px;
}

.anchorContent {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 10px;
}

.anchorContent p {
  width: 150px;
  height: 19px;
}

.anchorContent p:first-child {
  font-size: 12px;
  color: #333;
}

.anchorContent p:last-child {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}
</style>