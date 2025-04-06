<template>
  <div class="artist-container">
    <div class="artist-left">
      <CountryTitle/>
      <div v-for="i in 4">
        <CountryItem/>
      </div>
    </div>
    <div class="artist-right">
      <ThemeTitle/>
      <div class="artist-right-content">
        <div v-for="i in 10">
          <ArtistItem/>
        </div>
      </div>
      <ThemeTitle/>
      <div class="artist-right-content">
        <div v-for="i in 10">
          <ArtistItem/>
        </div>
      </div>
      <div  class="artist-right-singers">
        <div v-for="i in 100">
          <SingerItem/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeTitle from './podacast/ThemeTitle.vue';
import ArtistItem from './artist/ArtistItem.vue';
import SingerItem from './artist/SingerItem.vue';
import CountryTitle from './artist/CountryTitle.vue';
import CountryItem from './artist/CountryItem.vue';

</script>

<style scoped lang="less">
html,
body {
  height: 100%;
  margin: 0;
}

.artist-container {
  width: 100%;
  display: grid; /* 使用 Grid 布局 */
  grid-template-columns: 180px 800px; /* 定义两列的宽度 */
  justify-content: center;
}

.artist-left {
  background-color: rgb(249, 249, 249);
  border: 1px solid rgb(211, 211, 211);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 51px;
  padding-bottom: 40px;
}

.artist-right {
  padding: 40px;
  background-color: white;
  border-right: 1px solid rgb(211, 211, 211);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.artist-right-content{
  width: 720px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-evenly;
}
.artist-right-singers{
  width: 100%;
  border-top: 1px dotted rgb(211, 211, 211);
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
}
</style>
