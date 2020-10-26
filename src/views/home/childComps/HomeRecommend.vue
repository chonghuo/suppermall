<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:  {
    recommends:{
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    /*水平布局*/
    display: flex;
    width: 100%;
    /*居中*/
    text-align: center;
    font-size: 10px;
    /*设置内层div距离外边框的距离*/
    padding: 15px 0px 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    /*均等分*/
    flex: 1;
  }
  .recommend img{
    width: 65px;
    height: 65px;
    /*设置图片和文字的距离*/
    margin-bottom: 10px;
  }
</style>
