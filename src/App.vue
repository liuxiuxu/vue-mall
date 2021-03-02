<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <com-tab-bar></com-tab-bar>
  </div>
</template>
<script>
import ComTabBar from './components/content/ComTabBar'
  export default {
    name:'App',
    components:{
      ComTabBar
    }
  }
</script>
<style lang="less">
@import './assets/css/base.css';
</style>
