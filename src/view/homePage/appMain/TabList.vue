<template>
  <div class="tab-list">
    <div class="tab-list-top">
      <img src="../../../assets/img/飙升榜.jpg" alt="" class="listImg">
      <div class="list-top-content">
        <p>飙升榜</p>
        <img src="../../../assets/img/播放.png" alt="" class="play">
        <img src="../../../assets/img/收藏.png" alt="" class="down">
      </div>
    </div>
    <div class="lists">
      <ol>
        <li v-for="(item, index) in itemList" :key="index" @mouseover="hoverIn(index)" @mouseout="hoverOut">
          <span class="id">{{ index+1 }}</span>&nbsp;&nbsp;<span class="songName" :class="hoveredIndex === index?'truncate-text':''">{{ item.songName }}</span>
          <div v-show="hoveredIndex === index" class="icon-list">
            <i class="iconfont icon-bofang"></i>
            <i class="iconfont icon-jiahao"></i>
            <i class="iconfont icon-wenjianjia"></i>
          </div>
        </li>
        <li>
          <span class="more"> 查看全部&gt;</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  itemList: {
    type: Array, // 修改为 Array
    required: true,
  },
});
console.log('排行榜数据', props.itemList);

// 使用 ref 创建一个变量来存储当前鼠标悬停的列表项的索引
const hoveredIndex = ref(null);

// 鼠标移入事件处理函数
const hoverIn = (index) => {
  hoveredIndex.value = index; // 设置当前悬停的索引
};

// 鼠标移出事件处理函数
const hoverOut = () => {
  hoveredIndex.value = null; // 鼠标移出时，将索引设置为 null，隐藏所有图标
};
</script>

<style scoped>
/* 你的 CSS 样式保持不变 */
.tab-list-top {
  width: 229px;
  height: 120px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.lists {
  width: 229px;
  height: 350px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

  ol {
    /* padding-left: 20px; */
    height: 100%;

    li {
      list-style: none;
      height: calc(100% / 11);
      display: flex;
      align-items: center;
      position: relative;
    }

    .icon-list {
      position: absolute;
      right: 0;
    }

    .iconfont {
      font-size: 18px;
      color: rgb(153, 153, 153);
      margin-right: 10px;

      &:hover {
        color: rgb(81, 81, 81);
        cursor: pointer;
      }
    }
  }

}

.listImg {
  display: block;
  width: 80px;
  height: 80px;
}

.list-top-content {
  height: 80px;
  margin-left: 10px;

  p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }
}

.down,
.play {
  width: 22px;
  height: 22px;
}

.id {
  font-size: 12px;
  color: #333;
  margin-left: 20px;
}

li:nth-child(2n+1) {
  background-color: rgb(232, 232, 232);
}

li:nth-child(1),
li:nth-child(2),
li:nth-child(3) {
  .id {
    color: red;
  }
}

li:last-child {
  justify-content: flex-end;
}

.more,
.songTitle {
  font-size: 12px;
}

.more {
  margin-right: 30px;
}
.songName{
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.truncate-text {
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
</style>
