<template>
  <div class="rank">
    <div class="rank-left">
      <div class="left-content">
        <h2>云音乐特色榜</h2>
        <div v-for="i in 5" class="rank-item">
          <AnchorItem />
        </div>
        <h2 class="rank-title">全球媒体榜</h2>
        <div v-for="i in 40" class="rank-item">
          <AnchorItem />
        </div>
      </div>
    </div>
    <div class="rank-right">
      <rankTop />
      <div class="rank-main">
        <RankTitle />
        <RankList />
        <div class="rank-comments">
          <RankTitle />
          <Comments />
          <CommentTitle />
          <div v-for="i in 15">
            <CommentItem />
          </div>
          <CommentTitle />
          <div v-for="i in 20">
            <CommentItem />
          </div>
          <Pager />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnchorItem from '../../components/AnchorItem.vue';
import RankTop from './rankView/RankTop.vue';
import RankTitle from './rankView/RankTitle.vue';
import RankList from './rankView/RankList.vue';
import Comments from '../../components/comment/Comments.vue';
import CommentItem from '../../components/comment/CommentItem.vue'
import CommentTitle from '../../components/comment/CommentTitle.vue';
import Pager from '../../components/comment/Pager.vue';
</script>

<style scoped lang="less">
html,
body {
  height: 100%;
  margin: 0;
}

.rank {
  width: 100%;
  display: grid; /* 使用 Grid 布局 */
  grid-template-columns: 240px 740px; /* 定义两列的宽度 */
  justify-content: center;
}

.rank-left {
  background-color: rgb(249, 249, 249);
  border: 1px solid rgb(211, 211, 211);
}

.rank-right {
  padding-bottom: 50px;
  background-color: white;
  border-right: 1px solid rgb(211, 211, 211);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-content {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    padding: 0 10px 12px 15px;
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

  .rank-item {
    width: 100%;
    height: 62px;
    padding-left: 20px;
    box-sizing: border-box;

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }

  .rank-title {
    margin-top: 20px;
  }
}

.rank-main {
  width: 670px;
  /* height: flex;  无效的属性 */
  /* height: auto;  或者 flex: 1，根据需要选择 */
  padding: 0 40px 40px 30px;
}

.rank-comments {
  width: 100%;
  // height: 3750px;  不需要显式设置高度
  margin-top: 40px;
}
</style>
