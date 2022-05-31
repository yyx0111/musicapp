<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="$router.back()">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{playDetaillist.tracks.length}}首)</div>
        </div>
      </div>
      <div class="btn">
        +收藏({{changeValue(playDetaillist.subscribedCount)}})
      </div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item,i) in playDetaillist.tracks" :key="i">
        <div class="left">
          <div class="index">{{i+1}}</div>
          <div class="content">
            <div class="title">{{item.name}}</div>
            <div class="author">
              <span class="tag" v-for="(tag,index) in playDetaillist.tags" :key="index">{{tag}}</span>
              <span>{{item.al.name}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon search" aria-hidden="true" @click="setPlayCurrentIndex(i)">
            <use xlink:href="#icon-shipinbofang"></use>
          </svg>
          <svg class="icon search" aria-hidden="true" >
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "playList",
  props:['playDetaillist'],
  methods:{
    ...mapMutations(['setPlayCurrentIndex'])
  },
  setup(){
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
    return{
      changeValue,
    }
  }
}
</script>

<style lang="less" scoped>
.playlist{
  width: 100%;
  padding: 0 0.8rem;
  height: 100%;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 0.1rem;
  margin-bottom: 81px;
  .playlist-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      .icon{
        width: 2rem;
        height: 2rem;
      }
      .title{
        font-size: 1rem;
        font-weight: 900;
      }
      .num{
        font-size: 0.9rem;
        color: #6a6868;
      }
      .text{
        display: flex;
        align-items: center;
      }
    }
    .btn{
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      color: #cccccc;
      background: orangered;
      line-height: 2rem;
      padding: 0.4rem;
      border-radius: 20px;
    }
  }
  .list{
    .playItem{
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      .left{
        display: flex;
        align-items: center;
        width: 70%;
        .index{
          color: #6a6868;
          width: 10px;
        }
        .content{
          font-size: 0.5rem;
          margin-left: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical ;
        }
        .title{
          font-size: 1.1rem;
          color: black;
          margin-bottom: 0.3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical  ;
        }
        .tag{
          font-size: 0.5rem;
          color: orangered;
          border:1px solid orangered;
          border-radius: 5px;
        }
        .author{
          color: #6a6868;
          height: 100%;
          span{
            margin-left: 0.2rem;
          }
        }
      }
      .right{
        .icon{
            margin: 0 0.5rem;
        }
      }
    }
  }
}
</style>