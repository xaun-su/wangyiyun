<template>
  <div class="rank-list">
    <table>
      <thead>
        <tr>
          <th class="th-1"></th>
          <th class="th-2">标题</th>
          <th class="th-3">时长</th>
          <th class="th-4">歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 3" :key="i" class="topFirst" @mouseenter="rowShows[i] = false" @mouseleave="rowShows[i] = true">
          <td class="td-1">
            <div class="td-1-content">
              <span class="num">{{ i }}</span>
              <img src="../../../assets/img/new.png" alt="" />
            </div>
          </td>
          <td class="td-2">
            <div class="td-2-content">
              <img src="../../../assets/img/张惠妹.jpg" alt="" />
              <i class="iconfont icon-bofang"></i>
              <span>夜路</span>
              <span class="subtitle"></span>
              <button class="playMv"><img src="../../../assets/img/MV.png" alt=""></button>
            </div>
          </td>
          <td class="td-3">
            <div v-show="rowShows[i]">03:03</div>
            <div v-show="!rowShows[i]">
              <i class="iconfont icon-jiahao"></i>
              <i class="iconfont icon-wenjianjia"></i>
              <i class="iconfont icon-zhuanfa"></i>
              <i class="iconfont icon-xiazai"></i>
            </div>
          </td>
          <td class="td-4"><span>许嵩</span></td>
        </tr>

        <tr v-for="i in 97" :key="i + 3" class="topTwo" @mouseenter="rowShows[i + 3] = false" @mouseleave="rowShows[i + 3] = true">
          <td class="td-1">
            <div class="td-12-content">
              <span class="num">{{ i + 3 }}</span>
              <img src="../../../assets/img/new.png" alt="" />
            </div>
          </td>
          <td class="td-2">
            <div class="td-2-content">
              <i class="iconfont icon-bofang"></i>
              <span>夜路</span>
              <span class="subtitle">-(11231)</span>
              <button class="playMv"><img src="../../../assets/img/MV.png" alt=""></button>
            </div>
          </td>
          <td class="td-3">
            <div v-show="rowShows[i + 3]">03:03</div>
            <div v-show="!rowShows[i + 3]">
              <i class="iconfont icon-jiahao"></i>
              <i class="iconfont icon-wenjianjia"></i>
              <i class="iconfont icon-zhuanfa"></i>
              <i class="iconfont icon-xiazai"></i>
            </div>
          </td>
          <td class="td-4"><span>许嵩</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 用于存储每一行的 show 状态
const rowShows = ref({});

onMounted(() => {
    for (let i = 1; i <= 100; i++) {
        rowShows.value[i] = true;
    }
});
</script>

<style lang="less" scoped>
.rank-list,
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  width: 100%;
  height: 38px;
  background-color: rgb(243, 243, 243);
}

tbody {
  border: 1px solid rgb(211, 211, 211);

  tr:nth-child(2n+1) {
    background-color: rgb(247, 247, 247);
  }
}

th {
  border-collapse: collapse;
  font-size: 12px;
  color: #666;
  background-color: #f7f7f7;
  text-align: left;
  border: 1px solid rgb(211, 211, 211);
}

.th-1 {
  width: 77px;
}

.th-2 {
  width: 326px;
}

.th-3 {
  width: 91px;
}

.th-4 {
  width: 174px;
}

.topFirst {
  height: 70px;
}

.topTwo {
  height: 30px;
}

.td-1 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .td-1-content,
  .td-12-content {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .td-12-content {
    height: 30px;
  }

  .num {
    font-size: 12px;
    color: #999;
  }

  img {
    width: 18px;
    vertical-align: middle;
  }
}

.td-2 {
  font-size: 12px;
  color: #333;
  span{
    &:hover{
      text-decoration: underline;
    }
  }
  .td-2-content {
    display: flex;
    align-items: center;
  }

  .subtitle {
    color: #AEAEAE;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 14px;
  }

  .iconfont {
    margin-right: 8px;
    font-size: 17px;
    color: #999;
  }

  .playMv {
    margin-left: 5px;
    width: 23px;
    height: 17px;
    text-align: center;

    img {
      width: 20px;
      height: 15px;
    }
  }
}

.td-3 {
  font-size: 12px;
  color: #666;
  .iconfont{
    font-size: 14px;
    margin: 3px;
    &:hover {
      color: #333;
    }
  }
}

.td-4 {
  font-size: 12px;
  color: #333;
  span {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
