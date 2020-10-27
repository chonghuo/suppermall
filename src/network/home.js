import {request} from "@/network/request";
// home 页的各种数据请求
export function getHomeMutidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
