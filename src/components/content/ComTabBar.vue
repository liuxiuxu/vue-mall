<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="skyblue">
        <div slot="item-icon" class="iconfont">&#xe61e;</div>
        <img slot='item-icon-active' src="../../assets/images/首页.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/classify' activeColor="skyblue">
        <div slot="item-icon" class="iconfont">&#xe601;</div>
        <img slot='item-icon-active' src="../../assets/images/分类.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="skyblue">
        <div slot="item-icon" class="iconfont">&#xe600;</div>
        <img slot='item-icon-active' src="../../assets/images/购物车.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mine' activeColor="skyblue">
        <div slot="item-icon" class="iconfont">&#xe603;</div>
        <img slot='item-icon-active' src="../../assets/images/我的.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
  export default {
    name:'ComTabBar',
    components:{
      TabBar,
      TabBarItem
    }

   }
</script>

<style lang="less" scoped>
</style>