<template>
  <div class="home">
    <top-nav></top-nav>
    <SwiperCom></SwiperCom>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/topNav";
import SwiperCom from "@/components/SwiperCom"
import IconList from "@/components/IconList";
import MusicList from "@/components/MusicList";
export default {
  name: 'HomeView',
  components: {
    MusicList,
    IconList,
    SwiperCom,
    TopNav,
  },

}
</script>

