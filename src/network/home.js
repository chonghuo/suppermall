import {request} from "@/network/request";
// home 页的各种数据请求
export function getHomeMutidata(){
  return request({
    url:'/home/multidata'
  })
}
