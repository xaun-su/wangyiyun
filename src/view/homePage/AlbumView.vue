<template>
  <div class="album-view">
    <AppTitle/>
    <div class="album-view-items">
      <AlbumItem2 v-for="item in displayData" :key="item" :item="item" />
    </div>
    <AppTitle/>
    <div class="album-view-items">
      <AlbumItem2 v-for="item in displayData2" :key="item" :item="item" />
    </div>
    <div class="album-pager">
      <Pager/>
    </div>
    
  </div>
</template>

<script setup>
  import AppTitle from './appMain/AppTitle.vue';
  import Pager from '../../components/comment/Pager.vue';
  import AlbumItem2 from './album/AlbumItem2.vue';
  import axios from 'axios';
  import { onMounted, ref ,computed} from 'vue';
  const data = ref(null);
  onMounted(async () => {
    try {
      axios.get('http://127.0.0.1:4523/m1/6158319-5850355-default/discover/album')
        .then(response => {
          console.log(response.data);
          data.value = response.data.data.album;
          console.log(data.value);
        })
        .catch(error => {
          console.error('Error fetchingdata:', error);
        })
    }catch(err){
      console.error('Error fetching data:', err);
    }
  });
  const displayData = computed(() => {
    if (data.value) {
      return data.value.slice(0,10);
    }
    return [];
  });
  const displayData2 = computed(() => {
    if (data.value) {
      return data.value.slice(10,45);
    }
    return [];
  });
</script>

<style lang="less" scoped>
.album-view {
  padding: 40px;
  width: 900px;
  background-color: #fff;
}
.album-view-items{
  width: 933px;
  margin-left: -33px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  transform: translateX(33px);
}
.album-pager{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>