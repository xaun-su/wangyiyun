<template>
  <div class="app-right">
    <div class="vip-card">
      <img src="../../../assets/img/优惠购买.png" alt="">
    </div>
    <div class="login-content"> 
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button id="login">用户登录</button>
    </div>
    <div class="singer">
      <div class="singer-title">
        <span>入住歌手</span>
        <span>查看全部&gt;</span>
      </div>
      <div class="singer-list">
        <div v-for="i in 5">
          <SongerItem/>
        </div>
      </div>
      <button class="application">申请成为网易音乐人</button>
    </div>
    <div class="anchor">
      <div class="anchor-title">
        <span>热门主播</span>
      </div>
      <div class="anchor-list">
        <div v-for="i in 5">
          <AnchorItem/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SongerItem from '../appMain/SongerItem.vue';
import AnchorItem from '../../../components/AnchorItem.vue';
</script>

<style scoped lang="less">
.vip-card{
  width: 100%;
  height: 93px;
  background-color: rgb(233, 233, 233);
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 95%;
    height: 85px;
  }
}
.login-content{
  width: 100%;
  height: 130px;
  background-color: rgb(233, 233, 233);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  p{
    padding: 16px 0;
    margin: 0 23px;
    font-size: 12px;
    line-height: 1.5;
    color: #666666;
  }
  button{
    width: 100px;
    height: 30px;
    background-color: rgb(199, 11, 18);
    border: none;
    box-shadow: 1px 1px 1px 1px rgba(199, 11, 18, 0.9);
    color: #fff;
    font-size: 12px;
  }
}
.singer,.anchor{
  width: 100%;
  height: 455px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.singer-title,
.anchor-title{
  width: 210px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 0 20px;
 border-bottom: 1px solid #666666;
}
.singer-title span:last-child{
    color: #666;
  }
.singer-title span:first-child,
.anchor-title span:first-child{
    font-weight: 600;
  }
.singer-list,
.anchor-list{
  width: 230px;
  height: 380px;
  margin-left: 20px;
  margin-top: 6px;
}
.application{
  margin-top: 20px;
  width: 205px;
  height: 30px;
  padding-right: 5px;
  margin-left: 20px;
  font-size: 12px;
  color: #333;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>