<template>
  <div class='navbar'>
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'NavBar',
  }
</script>

<style lang="less" scoped>
  .navbar{
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
    // 原生滚动需要，better-scroll不需要，因为better-scroll是脱标的
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // z-index: 20;
    .left,.right{
      width: 60px;
    }
    .center{
      flex: 1;
    }
  }
</style>