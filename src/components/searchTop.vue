<template>
  <div class="searchTop" >
    <div class="searchTopNav">
      <div class="back" @click="back">
        <svg class="icon" aria-hidden="true" @click="$router.back()">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="right">
          <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyWord">
      </div>
    </div>
    <div class="history" v-show="searchSongs.length==0">
      <div class="historyLeft">
        历史
      </div>
      <div class="historyRight">
        <div class="keywordItem" v-for="(item,i) in keywordList" :key="i" @click="historySearch(item)">
          {{item}}
        </div>
        <div class="deleteAll">
          <svg class="iconD" aria-hidden="true" @click="deleteAll">
            <use xlink:href="#icon-shanchu"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="searchSongs" v-show="searchSongs.length!=0">
      <div class="playlist">
        <div class="playlist-top">
          <div class="left">
            <svg class="icon" aria-hidden="true" @click="$router.back()">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            <div class="text">
              <div class="title">播放全部</div>
              <div class="num">(共{{searchSongs.length}}首)</div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="playItem" v-for="(item,i) in searchSongs" :key="i">
            <div class="left">
              <div class="index">{{i+1}}</div>
              <div class="content">
                <div class="title">{{item.name}}</div>
                <div class="author">
                  <span>{{item.album.name}}</span>
                </div>
              </div>
            </div>
            <div class="right">
              <svg class="icon search" aria-hidden="true" @click="setPlay(item,i)">
                <use xlink:href="#icon-shipinbofang"></use>
              </svg>
              <svg class="icon search" aria-hidden="true" >
                <use xlink:href="#icon-gengduo-shuxiang"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {searchMusic} from '@/api/index'
export default {
  name: "searchTop",
  data:function (){
    return{
      placeholder:'陈奕迅',
      keywordList:[],
      searchKeyword:'',
      searchSongs:[],
    }
  },
  beforeMount(){
    this.keywordList=localStorage.keywordList? JSON.parse(localStorage.keywordList):[]
  },
  methods:{
    saveKeyWord:async function (){
      this.keywordList.push(this.searchKeyword)
      this.keywordList =Array.from(new Set(this.keywordList))
      if(this.keywordList.length>10){
        this.keywordList=this.keywordList.slice(this.keywordList.length-10,this.keywordList.length+1)
      }
      localStorage.keywordList=JSON.stringify(this.keywordList)
      let result =await searchMusic(this.searchKeyword)
      this.searchSongs=result.data.result.songs
      console.log(result)
    },
    deleteAll:function (){
      localStorage.clear(localStorage.keywordList)

      this.keywordList=localStorage.keywordList? JSON.parse(localStorage.keywordList):[]
    },
    historySearch:function (keyword){
      this.searchKeyword=keyword
      this.saveKeyWord()
    },
    setPlay:function (item,i){
      item.al=item.album
      item.al.picUrl=item.album.artist.img1v1Url
      this.$store.commit('pushPlaylist',item)
      this.$store.commit('setPlayCurrentIndex', this.$store.state.playlist.length-1)
    },
    back:function (){
      // this.$store.state.playlist=this.$store.state.playlist.slice(1,9)

      console.log(this.$store.state.playlist)
    }
  }
}
</script>

<style lang="less" scoped>
.searchTop{
  width:100%;
  padding: 0.2rem 0.5rem;

  .searchTopNav{
    display: flex;
    width: 100%;
    height: 20%;
    .icon{
      width: 2rem;
      height: 2rem;
    }
    .right{
      padding: 0.5rem 0.5rem;
      flex: 1;
      input{
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
        width: 100%;
        height: 1.5rem;
        font-size: medium;
      }
    }
  }
  .history{
    display: flex;
    width: 100%;
    margin-top: 1rem;
    .historyLeft{
      width: 10%;
      height: 20%;
      font-weight: 900;
      margin: 0.6rem 0.2rem;
    }
    .historyRight{
      color: #666;
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      .keywordItem{
        background-color: #eee;
        height: 2rem;
        padding: 0 0.4rem;
        border-radius: 10px;
        line-height: 2rem;
        margin: 0.2rem 0.3rem;
      }
      .deleteAll{
        position: absolute;
        right: 0;
        top:4rem;
        .iconD{
          width: 2rem;
          height: 2rem;
          fill: #8e8b8b;

        }
      }
    }
  }
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
}
</style>