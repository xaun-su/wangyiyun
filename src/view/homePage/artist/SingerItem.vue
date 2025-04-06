<template>
  <div class="singer-item">
    <div class="singer-item-name"><span>张惠妹</span><i class="iconfont icon-kefu"></i></div>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
.singer-item {
  padding-left: 13px;
  width: 130px;
  height: 30px;
  cursor: pointer;

}

.singer-item-name {
  font-size: 12px;
  color: #000;
  display: flex;
  span {
      &:hover {
        text-decoration: underline;
      }
    }
  i {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .icon-kefu {
    font-size: 12px;
    color: #fff;
  }
}
</style>