<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        click: true,
        pullUpLoad:this.pullUpLoad
    })
    // 监听滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    // 监听上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })

  },
  methods:{
    backTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
