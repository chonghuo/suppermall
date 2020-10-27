<template>
  <div class="tab-control">
    <!--当仅有文字不一样的时候就不用插槽了-->
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active: index==currentIndex}"
         @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    tabClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;

  }
  .tab-control-item{
    flex: 1;
    /*设置文字高度*/
    line-height:40px;
    /*设置span的高度*/
    height: 40px;
  }
  .tab-control-item span{
    /*设置vid 和 span之间的宽度*/
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    /*下划线*/
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
