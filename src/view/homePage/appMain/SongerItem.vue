<template>
  <div class="singerItem">
    <img src="../../../assets/img/张惠妹.jpg" alt="">
    <div class="content">
      <p>张惠妹aMEI</p>
      <p>台湾歌手张惠妹</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.singerItem {
  display: flex;
  margin-top: 14px;
  border-bottom: 1px solid #ccc;
  width: 210px;
  height: 62px;
}

.singerItem img {
  display: block;
  width: 62px;
  height: 62px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.content p {
  width: 120px;
  height: 19px;
}

.content p:first-child {
  font-size: 14px;
  color: #333;
}

.content p:last-child {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}
</style>