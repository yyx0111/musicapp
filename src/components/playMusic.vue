<template>
  <div class="playMusic" >
    <div class="bg" :style="{backgroundImage:'url('+playDetail.al.picUrl+')'}"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title"><marquee behavior="scoll" direction="left">{{playDetail.name}}</marquee></div>
        <div class="author"></div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true" @click="">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent" v-if="!isLyric" @click="isLyric=!isLyric">
        <img class="cipan" src="@/assets/coverall1.png">
        <img class="playImg" v-bind:src="playDetail.al.picUrl">
    </div>
    <div class="playLyric" v-else ref="playLyric" @click="isLyric=!isLyric">
      <p :class="{active:($store.state.currentTime*1000>=(item.time) && $store.state.currentTime*1000<=(item.last))}" v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p>
    </div>
    <div class="progress"></div>
    <div class="playFoot">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-liebiaoxunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else-if="!$store.state.flag" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "playMusic",
  props:['playDetail','paused','play','show'],
  data:function (){
    return{
      isLyric:true
    }
  },
  computed: {
    ...mapState(['lyric','currentTime','playlist','playCurrentIndex']),
  },
  watch:{
    currentTime(newValue){
      if(this.isLyric&&this.show&& this.$store.getters.lyricList.length>5){
        let p=document.querySelector('p.active')
        this.$refs.playLyric.scrollTop=p.offsetTop
      }
    }
  },
  methods:{
    goPlay:function (num){
      let index=this.playCurrentIndex+num
      if(index<0){
        index=this.playlist.length-1
      }else if(index==this.playlist.length){
        index=0
      }
      this.$store.commit('setPlayCurrentIndex',index)
    }
  }
}
</script>

<style lang="less" scoped>
.playMusic{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
  .bg{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    background-position: center;
    filter: blur(80px);
    z-index: -1;
  }
  .playTop{
    display: flex;
    width: 100%;
    height: 5rem;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    .icon{
      fill: white;
      height: 2rem;
      width: 2rem;

    }
  }
  .playContent{
    position: absolute;
    width: 100%;
    left: 0;
    top: 12rem;
    .cipan{
      width: 18rem;
      height: 18rem;
      position: absolute;
      left: calc(50% - 9rem);
      top: 5rem;
    }
    .playImg{
      width: 11.2rem;
      height: 11.2rem;
      position: absolute;
      left: calc(50% - 5.2rem);
      top: 8.9rem;
      border-radius: 140px;
    }
  }
  .playFoot{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    .icon{
      width: 2rem;
      height:2rem;
      fill: white;
    }
    .play{
      width: 3rem;
      height: 3rem;
    }
  }
  .playLyric{
    position: absolute;
    width: 100%;
    height: 70%;
    left: 0;
    top: 7rem;
    overflow: scroll;
    text-align: center;
    color: white;
    .active{
      color: red;
    }
  }
}
</style>