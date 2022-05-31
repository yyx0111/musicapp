<template>
  <div class="playController">
    <div class="left" @click="show=!show">
      <img v-bind:src="$store.state.playlist[$store.state.playCurrentIndex].al.picUrl">
      <div class="content">
        <div  class="title">{{$store.state.playlist[$store.state.playCurrentIndex].name}}</div>
        <div class="tips">横滑切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg  v-if="paused" class="icon " aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else-if="!$store.state.flag" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon search" aria-hidden="true" >
        <use xlink:href="#icon-24gl-playlistMusic"></use>
      </svg>
    </div>
    <play-music @back="show=!show" :paused="paused" :play="play" v-show="show" :show="show" :playDetail="$store.state.playlist[$store.state.playCurrentIndex]"></play-music>

    <audio ref="audio"  v-bind:src="'https://music.163.com/song/media/outer/url?id='+$store.state.playlist[$store.state.playCurrentIndex].id+'.mp3'"></audio>
  </div>

</template>

<script>
import {mapState,mapMutations,} from 'vuex'
import PlayMusic from "@/components/playMusic";
import store from '@/store/index'
export default {
  name: "playController",
  components: {PlayMusic},
  data(){
    return{
      paused:true,
      show:false
    }
  },
  computed:{
    ...mapState(['playlist','playCurrentIndex','flag'])
  },
  updated(){
    this.$store.dispatch('reqLyric',{id:this.$store.state.playlist[this.$store.state.playCurrentIndex].id})
    UpdateTime:{
      this.$store.state.intervalId  =setInterval(()=>{
        this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
      },1000)
    }
  },
  methods:{
    play:function (){
      console.log("歌的时间"+this.$refs.audio.currentTime)
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        this.paused=false
        store.state.flag=true;
        this.UpdateTime
        console.log("play")
      }else{
        this.$refs.audio.pause()
        this.paused=true
        clearInterval(this.$store.state.intervalId)
        console.log("stop")
      }
    },
  }

}
</script>

<style lang="less" scoped>
.playController{
  width: 100%;
  height: 4.95rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #cccccc;
  background-color: white;
  .left{
    display: flex;
    padding: 0 0.2rem;
    height: 100%;
    align-items: center;
    width: 70%;
    img{
      width: 3rem;
      height: 3rem;
      border-radius: 100%;

    }
    .content{
      padding: 0 1rem;
      .tips{
        font-size: 0.5rem;
        color: #999;
      }
    }
  }
  .right{
    padding: 0 0.5rem;
    .icon{
      width: 2rem;
      height: 2rem;
      margin: 0 0.2rem;
    }
  }
}
</style>