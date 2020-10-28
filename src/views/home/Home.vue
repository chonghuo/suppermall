<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="['流行','新款','精选',]" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!--组件不能监听点击，必须加native-->
    <back-top @click.native="backClick"/>
  </div>
</template>

<script>


    import HomeSwiper from "@/views/home/childComps/HomeSwiper";
    import HomeRecommend from "@/views/home/childComps/HomeRecommend";
    import HomeFeature from "@/views/home/childComps/HomeFeature";

    import TabControl from "@/components/contents/tabControl/TabControl";
    import GoodsList from "@/components/contents/goods/GoodsList";
    import NavBar from "@/components/common/nabbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import BackTop from "@/components/contents/backTop/BackTop";
    import {getHomeMutidata,getHomeGoods} from "@/network/home";


    export default {
        name: "Home",
        components:{
          HomeFeature,
          HomeSwiper,
          NavBar,
          HomeRecommend,
          TabControl,
          GoodsList,
          Scroll,
          BackTop
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
        backClick(){
          //拿到组件对象
          // 500毫秒返回
          this.$refs.scroll.backTo(0,-500,500)
        },
        // 网络请求相关方法
        getHomeMutidata(){
          getHomeMutidata().then(res=>{
            // res 是一个局部变量，需要将返回数据存在data中
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
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
    padding-top: 44px;
    height: 100vh;
    /*相对定位*/
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
  .content{
     /*绝对定位*/
     position: absolute;
     /*overflow: hidden;*/
     top: 44px;
     bottom: 49px;
     left: 0px;
     right: 0px;
  }
</style>
