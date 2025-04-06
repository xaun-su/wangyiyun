import { createRouter, createWebHashHistory } from 'vue-router';

// 引入需要切换的组件
import HomeView from '../view/homePage/AppMain.vue'; // 这是首页组件 (推荐)
import RankView from '../view/homePage/RankView.vue'; // 这是榜单页组件
import PlayListView from '../view/homePage/PlayListView.vue';
import PodcastView from '../view/homePage/PodcastView.vue';
import DiscoverMusic from '../view/homePage/DiscoverMusic.vue';
import ArtistView from '../view/homePage/ArtistView.vue';
import AlbumView from '../view/homePage/AlbumView.vue';
import MyView from '../view/homePage/MyView.vue';
import AttentionView from '../view/homePage/AttentionView.vue';
const routes = [
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverMusic,
    redirect: '/discover/home', 
    children: [
      {
        path: 'home', 
        name: 'discover-home',
        component: HomeView
      },
      {
        path: 'rank',
        name: 'discover-rank',
        component: RankView
      },
      {
        path: 'playlist', 
        name: 'discover-playlist',
        component: PlayListView
      },
      {
        path: 'podcast', 
        name: 'discover-podcast',
        component: PodcastView
      },{
        path: 'artist',
        name: 'discover-artist',
        component: ArtistView
      },{
        path: 'album',
        name: 'discover-album',
        component: AlbumView
      }
    ]
  },{
    path:'/my',
    name: 'my',
    component:MyView
  },{
    path:'/attention',
    name: 'attention',
    component:AttentionView
  },
  {
    path: '/', 
    redirect: '/discover/home' 
  }
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes
});

export default router;
