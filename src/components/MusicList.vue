<template>
  <div class="musiclist">
    <div class="musiclist-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
<!--    <div class="mlist">-->
<!--        <div class="swiper-container" id="musicSwiper">-->
<!--          <div  class="swiper-wrapper">-->
<!--                <div  class="swiper-slide" v-for="(item,i) in musiclist" :key="i">-->
<!--                    <img v-bind:src="item.picUrl">-->
<!--                    <div class="name">{{item.name}}</div>-->
<!--                    <div class="count">{{item.playCount}}</div>-->
<!--                </div>-->
<!--          </div>-->
<!--          <div class="swiper-pagination"></div>-->
<!--        </div>-->
<!--    </div>-->
   <div class="swiperComx">
     <swiper
         :slidesPerView="3"
         :spaceBetween="10"
         :pagination="{
      clickable: true,
    }"
         :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
         :modules="modules"
         class="mySwiper"
     >
       <swiper-slide class="swiper-slide" v-for="(item,i) in musiclist" :key="i">
         <div>
           <router-link :to="{path:'/listview',query:{id:item.id}}">
             <img v-bind:src="item.picUrl" @click="$store.state.flag=!$store.state.flag">
             <div class="name">{{item.name}}</div>
             <div class="count" >
               <svg class="icon" aria-hidden="true" >
                 <use xlink:href="#icon-24gl-play"></use>
               </svg>
               {{changeValue(item.playCount)}}
             </div>
           </router-link>
         </div>
       </swiper-slide>
     </swiper>
   </div>

  </div>
</template>
<script>
import { reactive,toRefs,onMounted} from 'vue';
import { Swiper,SwiperSlide} from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import {getMusiclist} from "@/api/index"
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state =reactive({
      musiclist:[]
    })
    onMounted(async ()=>{
      let result =await getMusiclist()
      state.musiclist = result.data.result
      console.log(result)
    })
    function  changeValue(num){
      let res=0
      if(num>=100000000){
        res =num/100000000
        res =res.toFixed(2)+'亿'
      }else if(num>10000){
        res =num/10000
        res =res.toFixed(2)+'万'
      }else{
        res=num
      }
      return res
    }
    return {
      ...toRefs(state),
      modules: [],
      changeValue,
    };
  },
};
</script>
<style lang="less" scoped>
.musiclist{
  width: 100%;
  padding: 1rem 0.6rem;
  .musiclist-top{
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .title{
      font-size: 1.2rem;
      font-weight: 600;
      font-family: 华文楷体;
      }
    .more{
      border: 1px solid #ccc;
      width: 4rem;
      height: 1.5rem;
      text-align: center;
      line-height: 1.2rem;
      border-radius: 10px;
      font-size: 0.24rem;
    }
  }
  .swiperComx{
    width: 100%;
    height: 30%;
    position: absolute;
    top: 17.5rem;
    left: 0;
    z-index: -1;
    .swiper-slide{
      margin-top: 0.3rem;
      width: 100%;
      height: 14rem;
      img{
        width: 100%;
      }
      .name{

        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical  ;
      }
      .count{
        position: absolute;
        right: 0.1rem;
        top: 0.3rem;
        font-size: 1rem;
        color: #1d1d1d;
        display: flex;
        align-items: center;
        .icon{
          fill: #cccccc;
        }
      }
  }
  }
}

  //.mlist{
  //  .swiper-container{
  //    width: 100%;
  //    height: 100%;
  //    .swiper-slide{
  //      display: flex;
  //      flex-direction: column;
  //      position: relative;
  //      width: 50%;
  //      margin-top: 0.5rem;
  //      margin-right: 0.5rem;
  //      img{
  //        width: 100%;
  //        height: auto;
  //      }
  //      .name{
  //        height: 1rem;
  //        width: 100%;
  //      }
  //      .count{
  //        position: absolute;
  //        right: 0.3rem;
  //        top: 0.3rem;
  //        font-size: 1rem;
  //      }
  //    }
  //
  //  }
  //}



</style>