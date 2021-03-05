<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont icon service">&#xe661;</i>
        <span>客服</span>
      </div>
      <div>
        <i class="iconfont icon shop">&#xe69a;</i>
        <span>店铺</span>
      </div>
      <div>
        <i class="iconfont icon select">&#xe629;</i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBottomBar',
    methods: {
      cartClick() {
        this.$emit('addCart')
      }
    },
  }
</script>

<style lang="less" scoped>
   .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    font-size: 24px;
    display: block;
    margin: 10px auto 3px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }
</style>