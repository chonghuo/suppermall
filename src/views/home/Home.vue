<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
    import NavBar from "@/components/common/nabbar/NavBar";
    import HomeSwiper from "@/views/home/childComps/HomeSwiper";
    import {getHomeMutidata} from "@/network/home";

    export default {
        name: "Home",
        components:{
          HomeSwiper,
          NavBar
        },
        data(){
          return{
              banners:[],
              recommends:[]
          }
        },
        /*在组件创建完毕后就发送请求*/
        created() {
          //1、请求多个数据
          getHomeMutidata().then(res=>{
            // res 是一个局部变量，需要将返回数据存在data中
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            console.log(this.banners)
          })
        }
    }
</script>

<style scoped>
  #home {
    /*到顶端边界的距离*/
    padding-top: 1px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    /*设置背景颜色*/
    background-color: var(--color-tint);
    /*设置文字颜色*/
    color:#fff;

    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
