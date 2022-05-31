<template>
  <div class="top-nav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn" @click="$router.push('/me')">我的</span>
      <span class="navBtn active" >发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/searchview')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top-nav{
  padding: 0.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .topCenter{
    width: 15rem;
    display: flex;
    justify-content: space-around;
    .active{
      font-weight: 1000;
    }
  }
}
</style>