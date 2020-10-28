<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="['流行','新款','精选',]" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
    import NavBar from "@/components/common/nabbar/NavBar";

    import HomeSwiper from "@/views/home/childComps/HomeSwiper";
    import HomeRecommend from "@/views/home/childComps/HomeRecommend";
    import HomeFeature from "@/views/home/childComps/HomeFeature";

    import TabControl from "@/components/contents/tabControl/TabControl";
    import GoodsList from "@/components/contents/goods/GoodsList";

    import {getHomeMutidata,getHomeGoods} from "@/network/home";


    export default {
        name: "Home",
        components:{
          HomeFeature,
          HomeSwiper,
          NavBar,
          HomeRecommend,
          TabControl,
          GoodsList
        },
        data(){
          return{
              banners:[],
              recommends:[],
              goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
              },
              currentType:'pop'
          }
        },
        /*在组件创建完毕后就发送请求*/
        created() {
          //1、请求多个数据
          this.getHomeMutidata()
          //2、请求商品数据
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')
        },
      computed:{
        showGoods(){
          return this.goods[this.currentType].list
        }
      },
      methods:{
        // 事件监听相关方法
        tabClick(index){
         switch (index){
           case 0:
             this.currentType = 'pop';
             break;
           case 1:
             this.currentType = 'new';
             break;
           case 2:
             this.currentType = 'sell';
             break;
         }
        },
        // 网络请求相关方法
        getHomeMutidata(){
          getHomeMutidata().then(res=>{
            // res 是一个局部变量，需要将返回数据存在data中
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            console.log(this.banners)
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          })
        }
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
    /*固定位置--导航栏*/
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }
  .tab-control{
    position: sticky;
    top: 43px;
    z-index:9;
  }


</style>
