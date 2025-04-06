<template>
  <div class="podcast-view">
    <Themes />
    <div class="podcast-container">
      <!-- 推荐节目 -->
      <div class="recommendedProgram">
        <ThemeTitle />
        <div v-for="i in 10" class="recommendedProgram-item">
          <ProgramItem />
        </div>
      </div>
      <!-- 节目榜单 -->
      <div class="ProgramRank">
        <ThemeTitle />
        <div v-for="i in 10" class="ProgramRank-item">
          <ProgramRankItem />
        </div>
      </div>
    </div>
        <!-- 电台 -->
        <div v-for="i in 5">
      <Radio />
     </div>
  </div>
</template>

<script setup>
import Themes from './podacast/Themes.vue';
import ThemeTitle from './podacast/ThemeTitle.vue';
import Radio from './podacast/Radio.vue';
import ProgramItem from './podacast/ProgramItem.vue';
import ProgramRankItem from './podacast/ProgramRankItem.vue';
</script>

<style lang="less" scoped>
.podcast-view {
  width: 900px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #eee;
}
.podcast-container{
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.recommendedProgram,
.ProgramRank{
  width: 426px;
}
.recommendedProgram-item:nth-child(2n+1),
.ProgramRank-item:nth-child(2n+1){
  background-color: rgb(247, 247, 247);
}
.recommendedProgram-item,
.ProgramRank-item{
  &:hover{
    background-color: rgb(238, 238, 238);
  }
}
</style>