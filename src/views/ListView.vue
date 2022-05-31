<template>
  <div class="list-view">
      <listViewTop :playDetaillist="playDetaillist"></listViewTop>
      <play-list :playDetaillist="playDetaillist"></play-list>
  </div>

</template>

<script>
import {getPlaylistDetail} from "@/api/index";
import { reactive,toRefs,onMounted} from 'vue';
import {useRoute} from 'vue-router'
import listViewTop from '@/components/listViewTop'
import PlayList from "@/components/playList";
import store from '@/store/index'
export default {
  name: "ListView",
  setup(){
    const route = useRoute()
    const state =reactive({
      playDetaillist:{
        creator:[],
        tracks:[

        ],

      }
    })
    onMounted(async ()=>{
      console.log(route)
      let id=route.query.id
      let result =await getPlaylistDetail(id)
      state.playDetaillist =result.data.playlist
      store.commit('setPlaylist',state.playDetaillist.tracks)
      console.log(state.playDetaillist.tracks)
    })
    return{
      ...toRefs(state),
    }
  },
  components:{
    PlayList,
    listViewTop
  }
}
</script>

<style scoped>

</style>