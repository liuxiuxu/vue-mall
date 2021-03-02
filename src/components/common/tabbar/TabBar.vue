<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'TabBar'
  }
</script>

<style lang="less" scoped>
  .tab{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 2px rgba(100,100,100,.2);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>