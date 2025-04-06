<template>

  <div class="comment-item">
    <img src="../../assets/img/头像.jpg" alt="" class="comment-avatar">
    <div class="comment-right">
      <div class="comment-content">
        <a href="#">苏黎世飞毯上的无敌战神</a>
        <img src="../../assets/img/网易云等级.png" alt="" class="comment-level">
        <span>
         ghygSBCJzbdvjk3123123
          f</span>
      </div>
      <div class="comment-bottom">
        <span>2019年6月27日</span>
        <div>
          <i class="iconfont icon-dianzan"></i>
          <span>(3909)</span>
          <span>|</span>
          <span>回复</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.comment-item {
  width: 100%;
  border-top: 1px solid #999;
  padding: 15px 0;
  display: flex;

  font-size: 12px;

}
.comment-right{
  display: flex;
  flex-direction: column;
}
.comment-avatar {
  display: block;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

a {
  text-decoration: none;
}

.comment-level {
  height: 12px;
  padding-right: 5px;
}

.comment-content {
  width: 610px;
  // min-height: 40px;
}

.comment-bottom {
  width: 100%;
  height: 16px;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  i,span{
    margin-right: 5px;
  }
  .iconfont{
    color: rgb(115, 171, 221);
  }
  span:nth-child(1) {
    color: #999;
  }
  span:nth-child(2) {
    color: #333;
  }
  span:nth-child(3) {
    color: #ccc;
  }
  span:nth-child(4) {
    color: #666;
  }
}
</style>