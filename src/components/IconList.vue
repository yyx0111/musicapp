<template>
  <div class="iconlist">
    <div class="iconimg">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconimg">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouyinji"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconimg">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconimg">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.iconlist{
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  width: 100%;
  .iconimg{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon{
    width: 3rem;
    height: 2.5rem;
  }
  span{
    font-size: 0.7rem;
  }
}
</style>