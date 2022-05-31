import axios from "axios";
//获取歌单
let baseUrl="http://localhost:3000/"
export function getMusiclist(){
    return axios.get(""+baseUrl+"personalized?limit=10")
}
//获取歌单详情
export  function getPlaylistDetail(id){
    return axios.get(""+baseUrl+"playlist/detail?id="+id+"")
}
//获取歌词
export  function getLyric(id){
    return axios.get(""+baseUrl+"lyric?id="+id+"")
}
//搜索歌曲
export  function searchMusic(keyword){
    return axios.get(""+baseUrl+"search?keywords="+keyword+"")
}
//手机登录
export  function phoneLogin(phone,password){
    return axios.get(""+baseUrl+"login/cellphone?phone="+phone+"&password="+password+"")
}
//获取用户详情
export  function userDetail(uid){
    return axios.get(""+baseUrl+"user/detail?uid="+uid+"")
}
export default {
    getLyric
}