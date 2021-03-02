<template>
  <div class="back-top">
    <p class="iconfont">&#xe6f2;</p>
  </div>
</template>

<script>
  export default {
    name:'BackName'
  }
</script>

<style lang="less" scoped>
  .back-top{
    position: fixed;
    right: 30px;
    bottom: 70px;
    color: red;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: 900;
    background-color: #fff;
    >p{
      font-size: 20px;
    }
  }
</style>