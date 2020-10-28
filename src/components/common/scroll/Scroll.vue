<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:2
    })
  },
  methods:{
    backTo(x,y,time=300){
      console.log("log");
      console.log(x);
      console.log(y);
      console.log(time);
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>
