<template>
  <!-- 顶部区域 -->
  <div class="rank-right-top">
    <div class="top-content">
      <div class="top-content-left">
        <img src="../../../assets/img/飙升榜.jpg" alt="">
      </div>
      <div class="top-content-right">
        <h2>飙升榜</h2>
        <span>最近更新：04月01日 <span>（每天更新）</span></span>
        <div class="top-content-right-bottom">
          <div class="top-play-btn">
            <div class="top-play"><i class="iconfont icon-bofang"></i>播放</div>
            <div class="top-add"><i  class="iconfont icon-jiahao"></i></div>
          </div>
          <div class="top-btn"><i  class="iconfont icon-wenjianjia"></i>(4147022)</div>
          <div class="top-btn"><i  class="iconfont icon-zhuanfa"></i>(16461)</div>
          <div class="top-btn"><i  class="iconfont icon-xiazai"></i>下载</div>
          <div class="top-btn"><i  class="iconfont icon-xiaoxi"></i>(225167)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped lang="less">

.rank-right-top {
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-content {
  width: 660px;
  height: 155px;
  display: flex;

  .top-content-left {
    width: 158px;
    height: 158px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(211, 211, 211);

    img {
      width: 150px;
      height: 150px;
    }
  }

  .top-content-right {
    margin-left: 30px;
    width: 475px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    h2 {
      font-size: 20px;
      color: #333;
      font-family: Arial, Helvetica, sans-serif;
    }

    span {
      font-size: 12px;
      color: #666;

      span {
        color: #999;
      }
    }
  }
}

.top-content-right-bottom {
  display: flex;
  justify-content: center;

  .top-btn {
    border: 1px solid rgb(211, 211, 211);
    background-color: rgb(241, 241, 241);
    margin-right: 5px;
    margin-left: 5px;
    font-size: 12px;
    color: #333;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-play-btn {
    color: #fff;
    background-color: rgb(29, 110, 190);
    display: flex;
    height: 30px;

    .top-add,
    .top-play {
      font-size: 12px;
      padding: 0 5px;
      border-right: 1px solid rgb(211, 211, 211);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .top-add {
      border-right: none;
    }
  }
}
.iconfont{
  font-size: 15px;
  margin-right: 5px;
  color: #666;
  &.icon-bofang,
  &.icon-jiahao{
    color: #fff;
  }
}

</style>