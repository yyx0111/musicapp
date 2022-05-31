import { createStore } from 'vuex'
import axios from "axios";
let baseUrl="http://localhost:3000/"
export default createStore({
  state: {
    playlist:[{
      id: 124309279,
      name: "还是会想你",
      al:{
        id: 124309279,
        name: "还是会想你",
        pic: 109951165798773740,
        picUrl: "http://p4.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg",
        pic_str: "109951165798773745",
      },
    }],
    playCurrentIndex:0,
    flag:true,
    lyric: '',
    currentTime:0,
    intervalId:0,
    user:{
      isLogin:false,
      account:{},
      userDetail:{}
    },
  },
  getters: {
    lyricList:function (state){
      let arr=state.lyric.split('\n').map((item,i)=>{
        let min =parseInt(item.slice(1,3))
        let sec =parseInt(item.slice(4,6))
        let mill =parseInt(item.slice(7,9))
        return{
          min,sec,mill,
          lyric:item.slice(10,item.length).replace(']',''),
          content:item,
          time:mill+sec*1000+min*60*1000
        }

      })

      arr.forEach((item,i)=>{
        console.log(state.length)
        if(i==0){
          item.pre=0
        }else{
          item.pre=arr[i-1].time
        }
        if(i==(arr.length-1)){
          item.last=1000000
        }else{
          item.last=arr[i+1].time
        }
      })
      console.log(arr)
      return arr
    }
  },
  mutations: {
    setPlaylist: function (state,value){
      this.state.playlist=value
    },
    pushPlaylist: function (state,value){
      this.state.playlist.push(value)
    },
    setPlayCurrentIndex :function (state,value){
      this.state.playCurrentIndex=value
      this.state.flag=false
    },
    setLyric :function (state,value){
      this.state.lyric=value
    },
    setCurrentTime :function (state,value){
      this.state.currentTime=value
      console.log("现在时间:"+ this.state.currentTime)
    },
    setUser:function (state,value){
      this.state.user =value
    }
  },
  actions: {
     async reqLyric(content,payload){
       console.log(payload)
       let result=await axios.get(""+baseUrl+"lyric?id="+payload.id+"")
       content.commit('setLyric',result.data.lrc.lyric)
       console.log(result.data.lrc.lyric)
    },
    async phoneLogin(content,payload){
      console.log(payload)
      let result=await axios.get(""+baseUrl+"login/cellphone?phone="+payload.phone+"&password="+payload.password+"")
      if(result.data.code==200){
        content.state.user.isLogin=true
        content.state.user.account=result.data.account

        let userDetail= await axios.get(""+baseUrl+"user/detail?uid="+result.data.account.id+"")
        content.state.user.userDetail=userDetail
        console.log(content.state.user.userDetail)
        // localStorage.userData=JSON.stringify(content.state.user)
        content.commit('setUser',content.state.user)
      }
      return result
    },
  },
  modules: {
  }
})
