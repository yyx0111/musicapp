<template>
    <div class="listViewTop" >
      <img v-bind:src="playDetaillist.coverImgUrl" class="bg">
      <div class="listViewTopNav">
          <div class="back">
              <svg class="icon" aria-hidden="true" @click="$router.back()">
                <use xlink:href="#icon-zuojiantou"></use>
              </svg>
              <div class="title">
                歌单
              </div>
          </div>
          <div class="right">
              <svg class="icon search" aria-hidden="true" >
                <use xlink:href="#icon-sousuo"></use>
              </svg>
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-gengduo-shuxiang"></use>
              </svg>
          </div>
      </div>
      <div class="content">
          <div class="contentLeft">
            <img v-bind:src="playDetaillist.coverImgUrl">
            <div class="count" >
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              {{changeValue(playDetaillist.playCount)}}
            </div>
          </div>
          <div class="contentRight">
            <h3>{{playDetaillist.name}}</h3>
            <div class="author">
              <img v-bind:src="playDetaillist.creator.avatarUrl" class="header">
              <span>{{playDetaillist.creator.nickname}}</span>
            </div>
            <div class="description">
              {{playDetaillist.description}}
            </div>
          </div>
      </div>
      <div class="iconList">
          <div class="iconItem">
            <svg class="icon search" aria-hidden="true" >
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            <span>{{playDetaillist.commentCount}}</span>
          </div>
          <div class="iconItem">
            <svg class="icon search" aria-hidden="true" >
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{playDetaillist.shareCount}}</span>
          </div>
          <div class="iconItem">
            <svg class="icon search" aria-hidden="true" >
              <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span>下载</span>
          </div>
          <div class="iconItem">
            <svg class="icon search" aria-hidden="true" >
              <use xlink:href="#icon-show_duoxuan"></use>
            </svg>
            <span>多选</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "listView",
  props:['playDetaillist'],
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
      changeValue
    }
  }
}
</script>

<style lang="less" scoped>
.listViewTop{
  width: 100%;
  padding: 1.2rem 0.5rem;
  height: 100%;
  .bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 35%;
    z-index: -1;
    filter: blur(50px);
  }
  .listViewTopNav{
    display: flex;
    justify-content: space-between;
    height: 1.5rem;
    align-items: center;
    font-size: 1.2rem;
    .icon{
      width: 2rem;
      height: 2rem;
      fill: #cccccc;
    }
    .title{
      margin-left: 0.8rem;
    }
    .search{
      margin-right: 1rem;
      fill: #cccccc;
    }
  }
  .back,.right{
    display: flex;
    color: #cccccc;
  }
  .content{
    display: flex;
    justify-content: space-between;
    .contentLeft{
      position: relative;
      padding: 2rem 0;
      img{
        width:10rem;
        height: 10rem;
        border-radius: 10px;
      }
      .count{
        position: absolute;
        right:0.4rem;
        top: 2rem;
        font-size: 1rem;
        color: #1d1d1d;
        display: flex;
        align-items: center;
        font-weight: 900;
        .icon{
          fill: #cccccc;
        }
      }
    }
    .contentRight{
      width: 13rem;
      padding: 1.9rem 0;
      h3{
        color: #131313;
      }
      .author{
        display: flex;
        align-items: center;
        margin: 1rem 0;
          .header{
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 30px;
            margin-right: 0.2rem;
          }
        span{
          color: #6a6868;
        }
      }
      .description{
        font-size:1rem;
        color: #e28e8e;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical  ;
      }

    }
  }
  .iconList{
    display: flex;
    justify-content: space-around;
    .iconItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 1.5rem;
        height: 1.5rem;
        fill: #6d6868;
      }
      span{
        font-size: 1rem;
        color: #ffffff;
        font-weight: 500;
      }
    }
  }
}
</style>