<template>
  <div class="comments">
    <div class="iptarea">
      <i class="iconfont icon-kefu"></i>
      <div class="iptarea-ipt-box">
        <textarea placeholder="评论" v-model="iptarea" class="iptarea-ipt"></textarea>
        <div class="iptarea-btn">
          <div>
            <i class="iconfont icon-biaoqing"></i>
            <i class="iconfont icon-aite"></i>
          </div>
          <div>
            <span>140</span>
            <button>评论</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.comments {
  width: 100%;
  margin-top: 20px;
}

.iptarea {
  width: 100%;
  height: 100px;
  // margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.iptarea i {
  width: 50px;
  height: 50px;
  background: rgb(178, 178, 178);
}

.icon-kefu {
  font-size: 50px;
  color: #fff;
}

.iptarea-ipt-box {
  width: 610px;
  height: 100px;
  display: flex;
  flex-direction: column;
}

.iptarea-ipt {
  resize: none;
  width: 595px;
  height: 50px;
  padding: 5px 6px 6px 6px;
  border: 1px solid rgb(178, 178, 178);
}

.iptarea-btn {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    background-color: #fff;
  }

  .iconfont {
    font-size: 18px;
    font-weight: 600;
    color: rgb(178, 178, 178);
    margin-right: 10px;
  }

  span {
    font-size: 12px;
    color: rgb(178, 178, 178);
    margin-right: 10px;
  }

  button {
    width: 45px;
    height: 25px;
    border: none;
    background-color: rgb(38, 119, 197);
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
}

</style>