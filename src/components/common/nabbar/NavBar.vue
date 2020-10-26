<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .nav-bar{
    /*垂直居中对齐*/
    display: flex;
    height: 44px;
    /*设置导航栏高度,需要有文字这个高度才能起作用，没有文字情况下需设置height*/
    line-height: 44px;
    /*设置文字居中*/
    text-align: center;
    /*加阴影*/
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }
  .left,.right{
    width: 60px;

  }
  .center{
    /*将剩余空间全部占据*/
    flex:1;
  }
</style>
