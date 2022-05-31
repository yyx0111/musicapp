<template>

  <div>
    <router-view/>
    <play-controller></play-controller>
  </div>
</template>

<style lang="less">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family:'微软雅黑';
}
.icon{
    width: 1.5rem;
    height: 1.5rem;
}
a{
  color: #1d1d1d;
  text-decoration:none ;
}
</style>
<script>
import PlayController from "@/components/playController";
export default {
  components: {PlayController},
  mounted() {
    // let userData=JSON.parse(localStorage.userData)
    // this.$store.commit('setUser',userData)
  }
}
</script>