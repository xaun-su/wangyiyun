<template>
  <div class="footer">
    <div class="app-footer">
      <div class="iconItems">
        <div class="iconItem">
          <i class="iconfont icon-yunpingtai"></i>
          <p>音乐开放平台</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-jiaoyiguanli"></i>
          <p>云村交易所</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-geshou"></i>
          <p>X StudioAI歌手</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-yonghurenzheng"></i>
          <p>用户认证</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-format_icon3_normal"></i>
          <p>AI 免费写歌</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-guanzhu"></i>
          <p>云推歌</p>
        </div>
        <div class="iconItem">
          <i class="iconfont icon-shang"></i>
          <p>赞赏</p>
        </div>
      </div>
      <div class="copyright">
        <p>服务条款&nbsp;&nbsp;|&nbsp;&nbsp;隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;儿童隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;版权投诉&nbsp;&nbsp;|&nbsp;&nbsp;投资者关系&nbsp;&nbsp;|&nbsp;&nbsp;广告合作&nbsp;&nbsp;|&nbsp;&nbsp;联系我们</p>
        <p>廉正举报&nbsp;&nbsp;不良信息举报邮箱:51jubao@service.netease.com&nbsp;&nbsp;客服热线:95163298</p>
        <p>互联网宗教信息服务许可证: 浙(2022)0000120 增值电信业务经营许可证:浙B2-20150198 粤B2-20090191-18 工业和信息化部备案管理系统网站</p>
        <p>网易公司版权所有©1997-2025&nbsp;&nbsp;杭州乐读科技有限公司运营: 浙网文[2024]0900-042号 &nbsp; ◎浙公网安备 33010802013307号 算法服务公示信息</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加一些 JavaScript 代码
</script>

<style scoped lang="less">
@import "@/assets/iconfont/底部/iconfont.css";

.footer {
  width: 100%;
  height: 326px;
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgb(221, 221, 221);
}

.app-footer {
  width: 1100px;
  height: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iconItems {
  width: 980px;
  margin-top: 33px;
  height: 71px;
  display: flex;
  justify-content: space-evenly;
}
.iconItem{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

}
.iconfont {
  font-size: 40px;
  margin: 0 10px;
  color: rgb(253, 77, 96);
}
p{
    color: rgb(121, 121, 121);
  }
  .copyright{
    width: 980px;
    height: 90px;
    padding-top: 60px;
    color: #666666;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copyright p{
    height: 24px;
  }
</style>
